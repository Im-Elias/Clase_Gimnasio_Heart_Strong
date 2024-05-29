import express, { urlencoded } from "express";
import router from "./routes/router.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Server start
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", router);
