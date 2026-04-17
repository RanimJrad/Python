from flask import Blueprint, request, jsonify

bookings_bp = Blueprint('bookings', __name__)

@bookings_bp.route('/bookings', methods=['POST'])
def create_booking():
    """Create a new booking"""
    try:
        data = request.get_json()
        
        if not data or not all(key in data for key in ['provider_id', 'service_id', 'client_name', 'email', 'date']):
            return jsonify({
                'success': False,
                'message': 'Missing required fields: provider_id, service_id, client_name, email, date'
            }), 400
        
        # Mock booking creation - will be implemented with actual database queries
        booking = {
            'id': 1,
            'provider_id': data['provider_id'],
            'service_id': data['service_id'],
            'client_name': data['client_name'],
            'email': data['email'],
            'date': data['date'],
            'status': 'pending',
            'created_at': '2024-01-01T00:00:00Z'
        }
        
        return jsonify({
            'success': True,
            'data': booking,
            'message': 'Booking created successfully'
        }), 201
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error creating booking: {str(e)}'
        }), 500

@bookings_bp.route('/bookings', methods=['GET'])
def get_bookings():
    """Get all bookings"""
    try:
        # Mock data for now
        bookings = [
            {
                'id': 1,
                'provider_id': 1,
                'service_id': 1,
                'client_name': 'Jean Dupont',
                'email': 'jean@example.com',
                'date': '2024-06-15',
                'status': 'confirmed',
                'created_at': '2024-01-01T00:00:00Z'
            }
        ]
        
        return jsonify({
            'success': True,
            'data': bookings,
            'message': 'Bookings retrieved successfully'
        }), 200
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error retrieving bookings: {str(e)}'
        }), 500
