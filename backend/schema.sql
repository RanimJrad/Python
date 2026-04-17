-- 3arraslii Wedding Platform Database Schema

-- Create database
CREATE DATABASE IF NOT EXISTS 3arraslii_db;
USE 3arraslii_db;

-- Services table
CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category ENUM('photographer', 'venue', 'catering', 'music', 'decoration', 'transport') NOT NULL,
    base_price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Providers table
CREATE TABLE providers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    description TEXT,
    category ENUM('photographer', 'venue', 'catering', 'music', 'decoration', 'transport') NOT NULL,
    location VARCHAR(255) NOT NULL,
    price_range VARCHAR(50),
    rating DECIMAL(3, 2) DEFAULT 0.00,
    image_url VARCHAR(500),
    verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Users table (clients)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('client', 'provider', 'admin') DEFAULT 'client',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Bookings table
CREATE TABLE bookings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    provider_id INT NOT NULL,
    client_id INT NOT NULL,
    service_id INT,
    event_date DATE NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled', 'completed') DEFAULT 'pending',
    total_price DECIMAL(10, 2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (provider_id) REFERENCES providers(id) ON DELETE CASCADE,
    FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE SET NULL
);

-- Reviews table
CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    booking_id INT NOT NULL,
    provider_id INT NOT NULL,
    client_id INT NOT NULL,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE,
    FOREIGN KEY (provider_id) REFERENCES providers(id) ON DELETE CASCADE,
    FOREIGN KEY (client_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Provider services junction table
CREATE TABLE provider_services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    provider_id INT NOT NULL,
    service_id INT NOT NULL,
    price DECIMAL(10, 2),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (provider_id) REFERENCES providers(id) ON DELETE CASCADE,
    FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE,
    UNIQUE KEY unique_provider_service (provider_id, service_id)
);

-- Insert sample data
INSERT INTO services (name, description, category, base_price, image_url) VALUES
('Wedding Photography Package', 'Full day wedding photography with high-resolution photos', 'photographer', 3000.00, '/images/photography.jpg'),
('Luxury Wedding Venue', 'Beautiful outdoor venue for up to 200 guests', 'venue', 8000.00, '/images/venue.jpg'),
('Premium Catering Service', 'Gourmet catering with customizable menu options', 'catering', 5000.00, '/images/catering.jpg'),
('Live Band Entertainment', 'Professional live band for wedding reception', 'music', 2500.00, '/images/music.jpg'),
('Wedding Decoration Package', 'Complete wedding decoration and floral arrangements', 'decoration', 3500.00, '/images/decoration.jpg'),
('Luxury Transportation', 'Vintage car transportation for bride and groom', 'transport', 1500.00, '/images/transport.jpg');

INSERT INTO providers (name, email, phone, description, category, location, price_range, rating, verified) VALUES
('Elegant Moments Photography', 'contact@elegantmoments.com', '+33612345678', 'Professional wedding photography with 15 years of experience', 'photographer', 'Paris', '3000-8000€', 4.8, TRUE),
('Château de Romance', 'info@chateauderomance.fr', '+33623456789', 'Historic castle venue for fairytale weddings', 'venue', 'Lyon', '8000-20000€', 4.9, TRUE),
('Gourmet Delights Catering', 'hello@gourmetdelights.fr', '+33634567890', 'Award-winning catering service with international cuisine', 'catering', 'Marseille', '4000-10000€', 4.7, TRUE);
