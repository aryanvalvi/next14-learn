//temporary data
// const users = [
//   { id: 1, name: "johne" },
//   { id: 2, name: "jane" },
// ];

import { connectToDb } from "./connectToDb";
import { Post, User } from "./models";

// const posts = [
//   {
//     id: 1,
//     title: "post 1",
//     body: "......",
//     userId: 1,
//   },
//   {
//     id: 2,
//     title: "post 2",
//     body: "......",
//     userId: 2,
//   },
//   {
//     id: 3,
//     title: "post 3",
//     body: "......",
//     userId: 3,
//   },
// ];
export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.find({ slug: slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch posts");
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch user");
  }
};
export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("failed to fetch users");
  }
};
