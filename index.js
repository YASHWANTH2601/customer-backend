import express from "express";
import connectDB from "./db/db.js";
import router from "./src/routes/customer.routes.js";
import productRouter from "./src/routes/product.routes.js";
import quotationRoute from "./src/routes/quotation.routes.js";
import errorHandler from "./src/utils/commonError.js";
const app = express();

app.use(express.json());
app.use("/api/customer", router);
app.use("/api/product", productRouter);
app.use("/api/quotations",quotationRoute);

app.use(errorHandler);
const startServer = async () => {
  try {
    await connectDB();
    app.listen(5000, () => console.log("Server running on port 5000"));
  } catch (err) {
    console.log(err);
  }
};

startServer();
