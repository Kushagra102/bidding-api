import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import { protect } from "./middlewares/authMiddleware";
import validate from "./middlewares/validateMiddleware";
import { BaseUserSchema, LoginUserSchema } from "./validators/user";
import userRouter from "./routes/userRoutes";
import { loginUser, registerUser } from "./controllers/userController";
import itemsRouter from "./routes/itemRoutes";
import bidRouter from "./routes/bidRoutes";
import notificationRouter from "./routes/notificationRoutes";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  console.log("Hello from Bidding Platform!");
  res.status(200).json({ message: "Hello from Bidding Platform" });
});

app.use("/api", protect);

app.post("/users/register", validate(BaseUserSchema), registerUser);
app.post("/users/login", validate(LoginUserSchema), loginUser);

app.use("/api/users", userRouter);
app.use("/api", itemsRouter);
app.use("/api", bidRouter);
app.use("/api", notificationRouter);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: err });
});

export default app;
