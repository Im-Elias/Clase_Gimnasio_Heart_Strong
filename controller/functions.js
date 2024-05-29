import pool from "../model/dbconfig.js";

const insertar = async (nombre, series, repeticiones, descanso) => {
  try {
    const consulta = {
      text: "INSERT INTO ejercicios values($1, $2, $3, $4) returning *",
      values: [nombre, series, repeticiones, descanso],
    };
    const result = await pool.query(consulta);
    if (result.rowCount > 0) {
      return result.rows[0];
    } else {
      return new Error("No se pudo insertar");
    }
  } catch (error) {
    console.log("Error: ", error.code);
    console.log(error.message);
  }
};

const getEjercicios = async () => {
  try {
    const consulta = {
      text: "SELECT * FROM ejercicios",
    };
    const result = await pool.query(consulta);
    if (result.rowCount > 0) {
      return result;
    } else {
      return new Error("No se encontraron ejercicios");
    }
  } catch (error) {
    console.log("Error: ", error.code);
    console.log(error.message);
  }
};

const editar = async (nombre, series, repeticiones, descanso) => {
  try {
    const consulta = {
      text: "UPDATE ejercicios SET series = $2, repeticiones = $3, descanso = $4 WHERE nombre = $1 returning *",
      values: [nombre, series, repeticiones, descanso],
    };
    const result = await pool.query(consulta);
    if (result.rowCount > 0) {
      return result;
    } else {
      return new Error("No se pudo editar");
    }
  } catch (error) {
    console.log("Error: ", error.code);
    console.log(error.message);
  }
};

const eliminar = async (nombre) => {
  try {
    const consulta = {
      text: "DELETE FROM ejercicios WHERE nombre = $1 returning *",
      values: [nombre],
    };
    const result = await pool.query(consulta);
    if (result.rowCount > 0) {
      return result;
    } else {
      return new Error("No se pudo eliminar");
    }
  } catch (error) {
    console.log("Error: ", error.code);
    console.log(error.message);
  }
};

export { insertar, getEjercicios, editar, eliminar };
