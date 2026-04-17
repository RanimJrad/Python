from flask import Blueprint, request, jsonify
from models.service import Service

services_bp = Blueprint('services', __name__)

@services_bp.route('/services', methods=['GET'])
def get_services():
    """Get all services"""
    try:
        services = Service.get_all()
        return jsonify({
            'success': True,
            'data': services,
            'message': 'Services retrieved successfully'
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error retrieving services: {str(e)}'
        }), 500

@services_bp.route('/services/<int:service_id>', methods=['GET'])
def get_service(service_id):
    """Get service by ID"""
    try:
        service = Service.get_by_id(service_id)
        if service:
            return jsonify({
                'success': True,
                'data': service,
                'message': 'Service retrieved successfully'
            }), 200
        else:
            return jsonify({
                'success': False,
                'message': 'Service not found'
            }), 404
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error retrieving service: {str(e)}'
        }), 500

@services_bp.route('/services/category/<category>', methods=['GET'])
def get_services_by_category(category):
    """Get services by category"""
    try:
        services = Service.get_by_category(category)
        return jsonify({
            'success': True,
            'data': services,
            'message': f'Services in {category} category retrieved successfully'
        }), 200
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error retrieving services by category: {str(e)}'
        }), 500

@services_bp.route('/services', methods=['POST'])
def create_service():
    """Create a new service"""
    try:
        data = request.get_json()
        
        if not data or not all(key in data for key in ['name', 'description', 'category', 'base_price']):
            return jsonify({
                'success': False,
                'message': 'Missing required fields: name, description, category, base_price'
            }), 400
        
        result = Service.create(
            name=data['name'],
            description=data['description'],
            category=data['category'],
            base_price=data['base_price'],
            image_url=data.get('image_url')
        )
        
        return jsonify({
            'success': True,
            'message': 'Service created successfully'
        }), 201
        
    except Exception as e:
        return jsonify({
            'success': False,
            'message': f'Error creating service: {str(e)}'
        }), 500
