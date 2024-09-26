const express = require("express");
const app = express();
const router = require("./router/auth-router")
app.use("/api/auth",router);


const PORT = process.env.PORT || 5001; // Change 5000 to 5001
app.listen(PORT, () => {
  console.log(`server is running at server port ${PORT}`);
});
