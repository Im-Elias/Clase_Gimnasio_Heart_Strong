import { Router } from "express";
import path from "path";
import {
  insertar,
  getEjercicios,
  editar,
  eliminar,
} from "../controller/functions.js";

const __dirname = path.resolve();
const router = Router();

// Ruta principal
router.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Ruta para insertar datos
router.post("/ejercicios", async (req, res) => {
  try {
    const { nombre, series, repeticiones, descanso } = req.body;
    const respuesta = await insertar(nombre, series, repeticiones, descanso);
    res.json(respuesta);
  } catch (error) {
    res.status(500).send("Algo salio mal");
  }
});

// Ruta para obtener datos
router.get("/ejercicios", async (req, res) => {
  try {
    const respuesta = await getEjercicios();
    res.json(respuesta);
  } catch (error) {
    res.status(500).send("Algo salio mal");
  }
});

// Ruta para editar datos
router.put("/ejercicios", async (req, res) => {
  try {
    const { nombre, series, repeticiones, descanso } = req.body;
    const respuesta = await editar(nombre, series, repeticiones, descanso);
    res.json(respuesta);
  } catch (error) {
    res.status(500).send("Algo salio mal");
  }
});

// Ruta para eliminar datos
router.delete("/ejercicios", async (req, res) => {
  try {
    const { nombre } = req.query;
    const respuesta = await eliminar(nombre);
    res.json(respuesta);
  } catch (error) {
    res.status(500).send("Algo salio mal");
  }
});

export default router;
