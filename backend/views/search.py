from flask import Blueprint, request, jsonify

search_bp = Blueprint('search', __name__)

@search_bp.route('/search', methods=['GET'])
def search_services():
    """Search services by criteria"""
    try:
        city = request.args.get('city', '')
        budget = request.args.get('budget', '')
        service_type = request.args.get('service_type', '')
        
        # Mock search results - will be implemented with actual database queries
        results = [
            {
                'id': 1,
                'name': 'Luxury Wedding Photography',
                'category': 'photographer',
                'city': 'Paris',
                'price_range': '3000-8000€',
                'rating': 4.9,
                'image_url': '/images/service1.jpg',
                'description': 'Professional wedding photography with premium packages'
            },
            {
                'id': 2,
                'name': 'Elegant Wedding Venue',
                'category': 'venue',
                'city': 'Lyon',
                'price_range': '5000-12000€',
                'rating': 4.8,
                'image_url': '/images/service2.jpg',
                'description': 'Beautiful venue for your perfect wedding day'
            },
            {
                'id': 3,
                'name': 'Gourmet Catering Service',
                'category': 'catering',
                'city': 'Marseille',
                'price_range': '2000-6000€',
                'rating': 4.7,
                'image_url': '/images/service3.jpg',
                'description': 'Exquisite catering with customizable menus'
            }
        ]
        
        # Apply filters (mock filtering)
        if city:
            results = [r for r in results if city.lower() in r['city'].lower()]
        if service_type:
            results = [r for r in results if service_type.lower() in r['category'].lower()]
        
        return jsonify({
            'success': True,
            'data': results,
            'message': 'Search completed successfully'
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error searching services: {str(e)}'
        }), 500
