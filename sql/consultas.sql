-- Crear base de datos gym
CREATE DATABASE gym;

-- Conectar a la base de datos
\c gym

-- Crear tabla ejercicios
  CREATE TABLE ejercicios (
    nombre varchar(30),
    series varchar(30),
    repeticiones varchar(30),
    descanso varchar(30)
  );
  