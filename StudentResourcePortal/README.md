# JIGSAW – Student Learning Resource Platform

A modern, professional **Student Learning Resource Platform** that helps students discover the best technical learning resources from across the internet.

Built as a **portfolio project** to showcase production-level frontend practices, clean code, and modern UI/UX design.

---

## ✨ Features

- Beautiful SaaS-style UI with Glassmorphism
- Fully Responsive Design
- 10+ Interconnected Pages
- Search, Filters & Smooth Animations
- Realistic Educational Content
- Admin Dashboard UI
- Community Discussion Section

---

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6)
- **Database**: MySQL
- **Icons**: Font Awesome

---

## 📁 Project Structure

```bash
JIGSAW/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── icons/
├── pages/
│   ├── index.html
│   ├── about.html
│   ├── resources.html
│   ├── coursework.html
│   ├── pathways.html
│   ├── discussion.html
│   ├── contact.html
│   ├── login.html
│   ├── register.html
│   └── dashboard.html
├── database/
│   └── schema.sql
└── README.md

## 🚀 Installation & Setup

Follow these steps to set up and run **JIGSAW** on your local machine.
Step-1
### Prerequisites
- A modern web browser (Chrome, Firefox, Edge)
- MySQL Database (XAMPP, WAMP, Laragon, or MySQL installed locally)

---

### Step 1: Download the Project

```bash
git clone https://github.com/yourusername/jigsaw.git
cd jigsaw

Or simply download and extract the ZIP file.

Step 2: Database Setup
-- Start your MySQL server (using XAMPP, MAMP, etc.).
-- Open phpMyAdmin or MySQL Command Line.
-- Run the following commands:

-- Create the database
CREATE DATABASE IF NOT EXISTS jigsaw_db 
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_unicode_ci;

-- Use the database
USE jigsaw_db;

-- Import schema and sample data
SOURCE database/schema.sql;

Step 3: Run the Project

--Navigate to the pages folder.
--Open index.html in your browser:Recommended Way: Right-click on pages/index.html → Open with Chrome/Firefox.

No additional server setup is required for the frontend.

Project Structure Overview
JIGSAW/
├── assets/              # CSS, JavaScript, Images
├── pages/               # All HTML pages
├── database/
│   └── schema.sql       # Database schema + sample data
└── README.md