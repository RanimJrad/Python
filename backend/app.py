from flask import Flask
from flask_cors import CORS
from config.database import init_db
from views.services import services_bp
from views.providers import providers_bp
from views.bookings import bookings_bp
from views.search import search_bp

def create_app():
    app = Flask(__name__)
    
    # Configuration
    app.config['SECRET_KEY'] = 'your-secret-key-here'
    app.config['DEBUG'] = True
    
    # Initialize database
    init_db()
    
    # Enable CORS
    CORS(app)
    
    # Register blueprints
    app.register_blueprint(services_bp, url_prefix='/api')
    app.register_blueprint(providers_bp, url_prefix='/api')
    app.register_blueprint(bookings_bp, url_prefix='/api')
    app.register_blueprint(search_bp, url_prefix='/api')
    
    @app.route('/')
    def index():
        return {'message': '3arraslii API is running!'}
    
    @app.route('/api/health')
    def health_check():
        return {'status': 'healthy', 'message': 'API is running'}
    
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=5000, debug=True)
