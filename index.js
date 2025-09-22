import express from "express";
import path from "path";
import methodOverride from "method-override";
import postsRouter from "./routes/posts.js";

const app = express();

const __dirname = process.cwd();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", postsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
