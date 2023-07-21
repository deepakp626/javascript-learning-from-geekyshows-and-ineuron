import psycopg2

## Connect to the DB

connection = psycopg2.connect(
                host = "127.0.0.1",
                port = "5432",
                database = "postgres",
                user="postgres",
                password="india5634"
)


connection.autocommit = True # "autcommit" set to True, so you don't have to commit your queries.
cursor = connection.cursor()

# Create Database Query
# Suppose we are asking user to choose, name of the database,

database_name = str(input("Database Name: "))
create_db_query = f'''
                                        DROP DATABASE {database_name}
                                    '''

#Execute Query
cursor.execute(create_db_query)



