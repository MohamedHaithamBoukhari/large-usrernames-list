import psycopg2
import os
from dotenv import load_dotenv

# Charger le fichier .env depuis la racine du projet
dotenv_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".env"))
load_dotenv(dotenv_path)

# Lire les variables d'environnement
DB_NAME = os.getenv("POSTGRES_DB")
DB_USER = os.getenv("POSTGRES_USER")
DB_PASSWORD = os.getenv("POSTGRES_PASSWORD")
DB_HOST = os.getenv("POSTGRES_HOST")
DB_PORT = os.getenv("POSTGRES_PORT")

# Connexion à la base de données
conn = psycopg2.connect(
    dbname="mydatabase",
    user="user",
    password="password",
    host="db",
    port=5432
)
cur = conn.cursor()

# Lire le fichier usernames.txt et insérer les données par batchs
with open("usernames.txt", "r", encoding="utf-8") as file:
    batch_size = 1000
    batch = []

    for line in file:
        name = line.strip()
        if name:
            batch.append((name,))
        
        if len(batch) >= batch_size:
            cur.executemany("INSERT INTO users (name) VALUES (%s)", batch)
            batch = []

    if batch:
        cur.executemany("INSERT INTO users (name) VALUES (%s)", batch)

# Valider et fermer la connexion
conn.commit()
cur.close()
conn.close()

print("Importation terminée avec succès !")
