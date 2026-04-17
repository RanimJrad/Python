# 3arrasli - Wedding Platform

A platform that connects clients with wedding service providers (photographers, venues, caterers, etc.).

## Project Structure

```
3arasslii/
├── backend/          # Flask API with MVC architecture
├── frontend/         # React.js application
├── .gitignore
├── README.md
└── .env.example
```

## Tech Stack

### Frontend
- React.js (functional components + hooks)
- React Router
- Axios for API calls
- Tailwind CSS
- Responsive design

### Backend
- Python with Flask
- MVC architecture
- Flask Blueprints
- CORS enabled
- MySQL database

### Database
- MySQL (via XAMPP / phpMyAdmin)

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- Python (v3.8 or higher)
- XAMPP with MySQL and phpMyAdmin

### 1. Clone the Repository
```bash
git clone <repository-url>
cd 3arasslii
```

### 2. Setup MySQL Database
1. Start XAMPP and launch Apache & MySQL
2. Open phpMyAdmin (http://localhost/phpmyadmin)
3. Create a new database named `3arraslii_db`
4. Import the `backend/schema.sql` file

### 3. Backend Setup
```bash
cd backend
python -m venv venv
# On Windows
venv\Scripts\activate
# On Mac/Linux
source venv/bin/activate

pip install -r requirements.txt
```

### 4. Configure Environment Variables
1. Copy `.env.example` to `.env` in both frontend and backend directories
2. Configure the database connection in `backend/.env`:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=
   DB_NAME=3arraslii_db
   ```

### 5. Run the Application

#### Backend
```bash
cd backend
python app.py
```
The API will be available at `http://localhost:5000`

#### Frontend
```bash
cd frontend
npm install
npm start
```
The application will be available at `http://localhost:3000`

## Features

- **Home Page**: Landing page with search functionality
- **Service Discovery**: Browse wedding service providers
- **Provider Profiles**: View detailed information about vendors
- **Booking System**: Reserve services directly through the platform

## API Endpoints

- `GET /api/services` - Get all available services
- `GET /api/providers` - Get all service providers
- `POST /api/bookings` - Create a new booking
- `GET /api/search` - Search services by criteria

## Development

### Frontend Structure
```
frontend/src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── services/        # API service functions
├── styles/          # CSS/Tailwind styles
└── utils/           # Utility functions
```

### Backend Structure
```
backend/
├── app.py           # Main Flask application
├── models/          # Database models
├── views/           # Route controllers (Blueprints)
├── services/        # Business logic
├── config/          # Configuration files
└── requirements.txt # Python dependencies
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
