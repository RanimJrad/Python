import os
import mysql.connector
from mysql.connector import Error

def get_db_connection():
    """Create and return a database connection"""
    try:
        connection = mysql.connector.connect(
            host=os.getenv('DB_HOST', 'localhost'),
            user=os.getenv('DB_USER', 'root'),
            password=os.getenv('DB_PASSWORD', ''),
            database=os.getenv('DB_NAME', '3arraslii_db')
        )
        return connection
    except Error as e:
        print(f"Error connecting to MySQL Database: {e}")
        return None

def init_db():
    """Initialize database connection"""
    connection = get_db_connection()
    if connection:
        connection.close()
        print("Database connection initialized successfully")
    else:
        print("Failed to initialize database connection")

def execute_query(query, params=None, fetch_one=False, fetch_all=True):
    """Execute a database query and return results"""
    connection = get_db_connection()
    if not connection:
        return None
    
    try:
        cursor = connection.cursor(dictionary=True)
        cursor.execute(query, params)
        
        if fetch_one:
            result = cursor.fetchone()
        elif fetch_all:
            result = cursor.fetchall()
        else:
            result = None
            
        connection.commit()
        return result
        
    except Error as e:
        print(f"Error executing query: {e}")
        connection.rollback()
        return None
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
