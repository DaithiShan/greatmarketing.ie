# Great Marketing IE

Great Marketing IE is a marketing agency website that allows potential clients to book a discovery call easily. This repository contains the frontend and backend code for the website.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [License](#license)
- [Contact](#contact)

## Project Overview

The goal of this project is to create a seamless user experience for potential clients to book a discovery call. The website consists of a frontend built with HTML, CSS, and JavaScript, and a backend powered by Node.js and Express, with a PostgreSQL database.

## Features

- Responsive frontend design
- Simple and intuitive discovery call booking form
- Email notifications for new discovery call requests
- Secure handling of user input

## Technology Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js
- PostgreSQL

### Email
- Nodemailer (for email notifications)

## Installation

### Prerequisites

- Node.js and npm installed
- PostgreSQL installed and running
- A domain and Google Workspace setup for sending emails

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/DaithiShan/greatmarketing.ie.git
   cd greatmarketing.ie
   ```
2. Install the dependencies:
```sh
cd backend
npm install
```
3. Set up the PostgreSQL database:
```sh
createdb -O yourusername greatmarketing_db
```
4. Create a .env file in the backend directory and add the following variables:

```sh
DB_CONNECTION_URL=postgres://yourusername:yourpassword@localhost:5432/greatmarketing_db
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=admin@greatmarketing.ie
SMTP_PASS=admin-email-password
CONTACT_EMAIL=staff@greatmarketing.ie
```
5. Start the backend server:
```sh
node server.js
```
## Usage

### Start the frontend server (if applicable):

- If you have a separate frontend server, start it according to the instructions provided in the frontend directory.
- Open your browser and navigate to `http://localhost:3000`.

### Fill out the discovery call booking form and submit it.

- Check the configured contact email to ensure you receive the booking notification.

## Environment Variables

Create a `.env` file in the `backend` directory and add the following:

```sh
DB_CONNECTION_URL=postgres://yourusername:yourpassword@localhost:5432/greatmarketing_db
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=admin@greatmarketing.ie
SMTP_PASS=admin-email-password
CONTACT_EMAIL=staff@greatmarketing.ie
```

License
This project is proprietary and its code is not open for public use or distribution. All rights are reserved by Great Marketing IE.

Contact
For any questions or support, please contact us at admin@greatmarketing.ie.
