import { FetchedDataTypes } from "@/lib/blogpost";
import Image from "next/image";

const Post = async ({ id }: { id: string }) => {
  const res = await fetch(
    `https://657c2c0b853beeefdb98d176.mockapi.io/posts/${id}`
  );
  const data: FetchedDataTypes = await res.json();
  return data;
};

const SinglePost = async ({ params }: { params: { id: string } }) => {
  const data = await Post(params);
  return (
    <main className="flex flex-col gap-3">
      <h1>{data.title}</h1>
      <Image src={data.avatar} alt={data.title} width={290} height={290} />
      <p>Article Written by: {data.name}</p>
      <p>{data.body}</p>
    </main>
  );
};
export default SinglePost;

export async function generateStaticParams() {
  const posts = await fetch(
    "https://657c2c0b853beeefdb98d176.mockapi.io/posts"
  );

  const blog: FetchedDataTypes[] = await posts.json();

  const slicedPosts = blog.slice(0, 10);
  // console.log(slicedPosts.length);

  return slicedPosts.map((post) => ({
    id: post.id,
  }));
}
