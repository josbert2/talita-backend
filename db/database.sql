CREATE DATABASE IS NOT EXISTS talita;

USE talita;

-- Esta base de datos se usara para el proyecto de Talita, donde talita es un restaurante de sushi, donde venden comida, tiene clientes, delivery, vendas por dia, etc.

-- Crear tabla de clientes

CREATE TABLE IF NOT EXISTS clientes (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    direccion VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO clientes (nombre, apellido, telefono, direccion) VALUES ('Juan', 'Perez', '12345678', 'Calle 1'), ('Pedro', 'Gomez', '87654321', 'Calle 2'), ('Maria', 'Gonzalez', '12348765', 'Calle 3'), ('Jose', 'Rodriguez', '56781234', 'Calle 4'), ('Ana', 'Fernandez', '43218765', 'Calle 5');