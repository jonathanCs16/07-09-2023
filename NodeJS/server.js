const express = require('express');
const app = express();

const PORT = 5000;


app.get("/" , (req , res) => {
    res.send("Hello Word");
})


app.listen(PORT, () => console.log(`Server Node y Nodemon Corriendo en puerto ${PORT}`));