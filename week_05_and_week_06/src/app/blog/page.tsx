import { FetchedData } from "@/lib/blogpost";
import Image from "next/image";
import Link from "next/link";

const Blog = async () => {
  const blogs = await FetchedData();
  //   console.log(blogs);
  return (
    <main className="">
      {blogs.map((post) => (
        <div key={post.id}>
          <Link href={`/blog/${post.id}`} className="flex gap-5">
            <p>{post.id}.</p>
            <h1>{post.title}</h1>
            <Image src={post.avatar} width={50} height={50} alt={post.title} />
          </Link>
        </div>
      ))}
    </main>
  );
};
export default Blog;
