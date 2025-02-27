# Large Username List

### Description

Large Username List is a web application that retrieves and displays a large list of usernames.  
The project consists of a **backend** (Node.js with PostgreSQL and Redis) and a **frontend** (React.js with Ant Design and Infinite Scroll). 

### Problem Statement

Handling a large dataset of usernames efficiently while ensuring a smooth user experience can be challenging. Retrieving and displaying such data in real time can lead to performance issues.

### Solution

To enhance performance and scalability, the application implements:
- **Database Indexing**: Optimizes search queries.
- **Caching with Redis**: Reduces database load and speeds up responses.
- **Infinite Scroll**: Loads data dynamically as the user scrolls.
- **Efficient API Calls**: Paginated requests to avoid overloading the server.

### Features & Steps

- **Save usernames in a database with indexing** for fast retrieval.
- **Use caching mechanisms** (Redis) to store frequently accessed data.
- **Implement infinite scroll** to dynamically load usernames as users scroll.
- **Navigation filtering** to fetch usernames by the first letter.


### Installation & Usage


Make sure you have the following tools installed on your system:  
- **Node.js & npm**
- **Docker**  

### Clone the Project

```sh
git clone <repository-url>
cd large-user-list
```

### Configure the Environment Variables

Before starting the services, update the configuration values in the **.env** file located in both the **root** and **backend** directories.


### Start the Services

Run the following command from the project root:

```sh
docker-compose up -d
```

This starts the PostgreSQL and Redis containers and migrates the data into the database.

❗ IMPORTANT: Wait until you see the message 'Importation terminée avec succès !' in the container logs of python_script (this may take up to 2 minutes) before proceeding. This ensures the data has been imported into the database.

### Start the Backend

```sh
cd backend
npm install  # Install dependencies
npm start    # Start the backend server
```

### Start the Frontend

Make sure you are in the project root, then:

```sh
cd frontend
npm install  # Install dependencies
npm start    # Start the frontend application
```

### Access the Application

Once all services are running, open your browser and go to:

```sh
http://localhost:4200
```
