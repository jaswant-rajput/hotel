const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const productsRouter = require("./routes/productsRouter");
const ordersRouter = require("./routes/ordersRouter");

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => console.log("Connected"))
	.catch((err) => console.erro(err));

const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is listening on PORT : ${PORT}`);
});
