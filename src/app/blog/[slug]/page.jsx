import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost, getUser } from "@/lib/data";

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   //   const res = await fetch("https://jsonplaceholder.typicode.com/posts" ,{cache:"no-store"}); it will not cache the data and every time its will fetch the api
//   //   const res = await fetch("https://jsonplaceholder.typicode.com/posts" ,{next:{revalidate:3600}}); will refresh the api evry 1 hr
//   if (!res.ok) {
//     throw new Error("something went wrong");
//   }
//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug);
  const post = await getPost(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/17747363/pexels-photo-17747363/free-photo-of-top-view-of-a-beach-and-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill
        ></Image>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://images.pexels.com/photos/17747363/pexels-photo-17747363/free-photo-of-top-view-of-a-beach-and-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={50}
            height={50}
          ></Image>
        </div>
        {post && (
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}></PostUser>
          </Suspense>
        )}
        <div className={styles.detailText}>
          <span className={styles.detailTitle}>Published</span>
          <span className={styles.detailCalue}>5.1.24</span>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};
export default SinglePostPage;
