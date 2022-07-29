DROP TABLE IF EXISTS owners CASCADE;
DROP TABLE IF EXISTS cars CASCADE;

CREATE TABLE owners (
owner_id SERIAL PRIMARY KEY,
first_name TEXT,
last_name TEXT,
age INTEGER,
insured BOOLEAN
);


CREATE TABLE cars (
car_id SERIAL PRIMARY KEY,
make TEXT,
model TEXT,
year INTEGER,
automatic BOOLEAN,
owner_id INTEGER NOT NULL,
CONSTRAINT fk_owner
FOREIGN KEY (owner_id) 
REFERENCES owners (owner_id)
);







