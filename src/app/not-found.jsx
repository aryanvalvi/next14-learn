import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h1>NotFound</h1>
      <p>Sorry the page you are looking for does not exist</p>
      <Link href="/">Return to Home</Link>
    </>
  );
};
export default NotFound;
