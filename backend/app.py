from flask import Flask, request, jsonify
from flask_cors import CORS
import re

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173", "http://localhost:4173"])

EMAIL_RE = re.compile(r"^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$")
PHONE_RE = re.compile(r"^[+\d\s\-()]{7,20}$")


def sanitize(value: str, max_len: int = 300) -> str:
    return str(value).strip()[:max_len]


@app.route("/api/contact", methods=["POST"])
def contact():
    data = request.get_json(silent=True)
    if not data:
        return jsonify({"error": "Invalid request body."}), 400

    name     = sanitize(data.get("name", ""), 100)
    email    = sanitize(data.get("email", ""), 150)
    phone    = sanitize(data.get("phone", ""), 20)
    company  = sanitize(data.get("company", ""), 150)
    industry = sanitize(data.get("industry", ""), 100)
    message  = sanitize(data.get("message", ""), 2000)

    errors = []
    if not name:
        errors.append("Name is required.")
    if not EMAIL_RE.match(email):
        errors.append("A valid email address is required.")
    if phone and not PHONE_RE.match(phone):
        errors.append("Phone number format is invalid.")
    if not industry:
        errors.append("Please select an industry.")

    if errors:
        return jsonify({"error": " ".join(errors)}), 422

    # In production: send an email (SMTP / SendGrid) or store to DB.
    # For now we log to console and return success.
    print(f"\n--- New Contact Request ---")
    print(f"Name:     {name}")
    print(f"Email:    {email}")
    print(f"Phone:    {phone}")
    print(f"Company:  {company}")
    print(f"Industry: {industry}")
    print(f"Message:  {message}")
    print(f"---------------------------\n")

    return jsonify({"success": True, "message": "Your request has been received."}), 200


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)
