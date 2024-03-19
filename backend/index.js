import  express from "express";
import cors from "cors";

import replicateRoute from "./routes/replicateRoute.js";

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

// routes
app.use("/api", replicateRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})