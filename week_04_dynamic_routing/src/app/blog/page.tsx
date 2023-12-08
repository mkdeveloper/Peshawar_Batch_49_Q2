import Link from "next/link";
import { fakeData } from "../../../public/MOCK_DATA";

const Blog = () => {
  const blogData = fakeData;
  return (
    <main className="flex flex-col">
      {blogData.map((post) => (
        <Link href={`/blog/${post.slug}`} key={post.id}>
          {post.title}
        </Link>
      ))}
    </main>
  );
};

export default Blog;
