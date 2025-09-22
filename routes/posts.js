import express from "express";
import { listPosts, createPost, findPost, updatePost, deletePost } from "../postsStore.js";

const router = express.Router();

router.get("/", (req, res) => {
  const posts = listPosts();
  res.render("index", { posts });
});

router.post("/posts", (req, res) => {
  const { title, content } = req.body;
  createPost({ title, content });
  res.redirect("/");
});

router.get("/posts/:id/edit", (req, res) => {
  const post = findPost(req.params.id);
  if (!post) return res.status(404).send("Post not found");
  res.render("edit", { post });
});

router.put("/posts/:id", (req, res) => {
  const updated = updatePost(req.params.id, req.body);
  if (!updated) return res.status(404).send("Post not found");
  res.redirect("/");
});

router.delete("/posts/:id", (req, res) => {
  const ok = deletePost(req.params.id);
  if (!ok) return res.status(404).send("Post not found");
  res.redirect("/");
});

export default router;
