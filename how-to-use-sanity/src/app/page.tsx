import { Image as SnImage } from "sanity";
import { client } from "../../sanity/lib/client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { blogType } from "@/types";

export const revalidate = 60;
// false | 0 | number

const BlogPosts = async () => {
  const query = `*[_type == "blog"] {
    _id,
      mainImage,
      post,
      author,
      _createdAt,
      "slug": slug.current
  }`;

  const data: blogType[] = await client.fetch(query)
  return data;
}

const Home = async () => {
  const blog = await BlogPosts();
  console.log(blog)
  return (
    <main className="container w-full mx-auto max-w-7xl">
      <div className="grid grid-cols-3 mt-5 gap-5">
        {
          blog.map((post) => (
            <Card key={post._id}>
              <Image src={urlForImage(post.mainImage)} alt="some random text" width={500} height={500} />
              <CardContent>
                <h1 className="mt-5">{post.post}</h1>
                <p>{post.author}</p>
                <p>{new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}</p>

                <Button asChild className="w-full mt-5">
                  <Link href={`/blog/${post.slug}`}>
                    Read more
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))
        }

      </div>

    </main>
  )
}

export default Home