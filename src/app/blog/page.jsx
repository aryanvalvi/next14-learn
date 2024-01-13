import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   //   const res = await fetch("https://jsonplaceholder.typicode.com/posts" ,{cache:"no-store"}); it will not cache the data and every time its will fetch the api
//   //   const res = await fetch("https://jsonplaceholder.typicode.com/posts" ,{next:{revalidate:3600}}); will refresh the api evry 1 hr
//   if (!res.ok) {
//     throw new Error("something went wrong");
//   }
//   return res.json();
// };

const BlogPage = async () => {
  //   const posts = await getData();

  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return (
          <>
            <div className={styles.post} key={post.id}>
              <PostCard post={post}></PostCard>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default BlogPage;
