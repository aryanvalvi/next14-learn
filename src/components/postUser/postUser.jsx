import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId} `,
//     { cache: "no-store" }
//   );
//   //   const res = await fetch("https://jsonplaceholder.typicode.com/posts" ,{cache:"no-store"}); it will not cache the data and every time its will fetch the api
//   //   const res = await fetch("https://jsonplaceholder.typicode.com/posts" ,{next:{revalidate:3600}}); will refresh the api evry 1 hr
//   if (!res.ok) {
//     throw new Error("something went wrong");
//   }
//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //   const user = await getData(userId);
  const user = await getUser(userId);
  return (
    <>
      <div className={styles.container}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </>
  );
};
export default PostUser;
