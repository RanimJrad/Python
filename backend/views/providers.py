from flask import Blueprint, request, jsonify

providers_bp = Blueprint('providers', __name__)

@providers_bp.route('/providers', methods=['GET'])
def get_providers():
    """Get all service providers"""
    try:
        # Mock data for now - will be implemented with actual database queries
        providers = [
            {
                'id': 1,
                'name': 'Wedding Photography Studio',
                'category': 'photographer',
                'rating': 4.8,
                'location': 'Paris',
                'price_range': '2000-5000€',
                'image_url': '/images/provider1.jpg'
            },
            {
                'id': 2,
                'name': 'Luxury Wedding Venue',
                'category': 'venue',
                'rating': 4.9,
                'location': 'Lyon',
                'price_range': '5000-15000€',
                'image_url': '/images/provider2.jpg'
            }
        ]
        
        return jsonify({
            'success': True,
            'data': providers,
            'message': 'Providers retrieved successfully'
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error retrieving providers: {str(e)}'
        }), 500

@providers_bp.route('/providers/<int:provider_id>', methods=['GET'])
def get_provider(provider_id):
    """Get provider by ID"""
    try:
        # Mock data for now
        provider = {
            'id': provider_id,
            'name': 'Wedding Photography Studio',
            'category': 'photographer',
            'rating': 4.8,
            'location': 'Paris',
            'price_range': '2000-5000€',
            'description': 'Professional wedding photography with 10 years of experience',
            'services': ['Photography', 'Video', 'Album Design'],
            'image_url': '/images/provider1.jpg'
        }
        
        return jsonify({
            'success': True,
            'data': provider,
            'message': 'Provider retrieved successfully'
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error retrieving provider: {str(e)}'
        }), 500
