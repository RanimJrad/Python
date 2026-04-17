import mysql.connector
from mysql.connector import Error

def create_database():
    """Create the database if it doesn't exist"""
    try:
        # Connect to MySQL server (without specifying database)
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password=''
        )
        
        cursor = connection.cursor()
        
        # Create database
        cursor.execute("CREATE DATABASE IF NOT EXISTS 3arraslii_db")
        print("Database '3arraslii_db' created successfully!")
        
        cursor.close()
        connection.close()
        
        return True
        
    except Error as e:
        print(f"Error creating database: {e}")
        return False

if __name__ == "__main__":
    create_database()
