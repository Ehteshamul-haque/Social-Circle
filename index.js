const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRouter = require('./routes/users')
const authRouter = require('./routes/auth')

//dotenv
dotenv.config();

//MongoDB Connection
// mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true,useUnifiedTopology: true},
//     () => console.log("DB Connection Successfull!"))
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => console.log(err));

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.use("/api/user",userRouter)
app.use("/api/user", authRouter)

app.listen(3000, () => console.log("The Server is running on port 3000"));
