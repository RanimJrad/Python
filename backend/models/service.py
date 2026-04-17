from config.database import execute_query

class Service:
    def __init__(self, id=None, name=None, description=None, category=None, 
                 base_price=None, image_url=None, created_at=None):
        self.id = id
        self.name = name
        self.description = description
        self.category = category
        self.base_price = base_price
        self.image_url = image_url
        self.created_at = created_at
    
    @staticmethod
    def get_all():
        """Get all services"""
        query = "SELECT * FROM services ORDER BY name"
        return execute_query(query)
    
    @staticmethod
    def get_by_id(service_id):
        """Get service by ID"""
        query = "SELECT * FROM services WHERE id = %s"
        return execute_query(query, (service_id,), fetch_one=True)
    
    @staticmethod
    def get_by_category(category):
        """Get services by category"""
        query = "SELECT * FROM services WHERE category = %s ORDER BY name"
        return execute_query(query, (category,))
    
    @staticmethod
    def create(name, description, category, base_price, image_url=None):
        """Create a new service"""
        query = """
        INSERT INTO services (name, description, category, base_price, image_url)
        VALUES (%s, %s, %s, %s, %s)
        """
        return execute_query(query, (name, description, category, base_price, image_url), fetch_all=False)
    
    @staticmethod
    def update(service_id, name=None, description=None, category=None, base_price=None, image_url=None):
        """Update service"""
        updates = []
        params = []
        
        if name is not None:
            updates.append("name = %s")
            params.append(name)
        if description is not None:
            updates.append("description = %s")
            params.append(description)
        if category is not None:
            updates.append("category = %s")
            params.append(category)
        if base_price is not None:
            updates.append("base_price = %s")
            params.append(base_price)
        if image_url is not None:
            updates.append("image_url = %s")
            params.append(image_url)
        
        if not updates:
            return False
        
        params.append(service_id)
        query = f"UPDATE services SET {', '.join(updates)} WHERE id = %s"
        return execute_query(query, params, fetch_all=False)
    
    @staticmethod
    def delete(service_id):
        """Delete service"""
        query = "DELETE FROM services WHERE id = %s"
        return execute_query(query, (service_id,), fetch_all=False)
