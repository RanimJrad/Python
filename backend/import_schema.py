import mysql.connector
from mysql.connector import Error

def import_schema():
    """Import the schema.sql file"""
    try:
        # Read the schema file
        with open('schema.sql', 'r', encoding='utf-8') as file:
            sql_statements = file.read().split(';')
        
        # Connect to the database
        connection = mysql.connector.connect(
            host='localhost',
            user='root',
            password='',
            database='3arraslii_db'
        )
        
        cursor = connection.cursor()
        
        # Execute each SQL statement
        for statement in sql_statements:
            if statement.strip():
                try:
                    cursor.execute(statement)
                except Error as e:
                    print(f"Warning: {e}")
                    continue
        
        connection.commit()
        print("Schema imported successfully!")
        
        cursor.close()
        connection.close()
        
        return True
        
    except Error as e:
        print(f"Error importing schema: {e}")
        return False

if __name__ == "__main__":
    import_schema()
