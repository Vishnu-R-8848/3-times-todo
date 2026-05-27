import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * @requires POST /api/data
 * @description get the data from the request body 
 * @access public
 */



export default app;