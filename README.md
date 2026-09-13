# NexaTech Solutions — Company Website

Custom SaaS software company landing page built with React (Vite) + Python (Flask).

## Project Structure

```
saas-website/
├── frontend/        React + Vite (static site)
│   ├── src/
│   │   ├── components/
│   │   └── index.css
│   └── package.json
└── backend/         Python Flask API (contact form)
    ├── app.py
    └── requirements.txt
```

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev          # http://localhost:5173
```

### Backend
```bash
cd backend
python -m venv venv
venv\Scripts\activate      # Windows
pip install -r requirements.txt
python app.py              # http://localhost:5000
```

## Customization

| What to change         | Where                              |
|------------------------|------------------------------------|
| Company name / logo    | `Navbar.jsx`, `Footer.jsx`         |
| Hero headline          | `Hero.jsx`                         |
| Industries / services  | `Industries.jsx`                   |
| Stats numbers          | `Stats.jsx`                        |
| Testimonials           | `Testimonials.jsx`                 |
| Contact details        | `Contact.jsx`                      |
| Colors / fonts         | `src/index.css` (CSS variables)    |
| Email on form submit   | `backend/app.py`                   |

## Deploy to GitHub Pages

```bash
cd frontend
npm run build
npm run deploy       # requires gh-pages package
```

Set the repo name in `vite.config.js` → `base: '/your-repo-name/'` before deploying.
