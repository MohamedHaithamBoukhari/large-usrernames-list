-- Création de la table users
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    first_letter CHAR(1) GENERATED ALWAYS AS (UPPER(LEFT(name, 1))) STORED
);

-- Index pour une recherche rapide par première lettre
CREATE INDEX IF NOT EXISTS idx_first_letter ON users (first_letter);