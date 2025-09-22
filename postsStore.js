import { v4 as uuid } from "uuid";


const posts = [
  {
    id: uuid(),
    title: "Welcome to Simple Blog",
    content:
      "This is your first post! Create, edit, and delete posts to try things out."
  }
];

export function listPosts() {
  return [...posts].reverse();
}

export function createPost({ title, content }) {
  const post = { id: uuid(), title: title?.trim() || "Untitled", content: content?.trim() || "" };
  posts.push(post);
  return post;
}

export function findPost(id) {
  return posts.find(p => p.id === id);
}

export function updatePost(id, { title, content }) {
  const post = findPost(id);
  if (!post) return null;
  post.title = (title ?? post.title).trim();
  post.content = (content ?? post.content).trim();
  return post;
}

export function deletePost(id) {
  const idx = posts.findIndex(p => p.id === id);
  if (idx !== -1) {
    posts.splice(idx, 1);
    return true;
  }
  return false;
}
