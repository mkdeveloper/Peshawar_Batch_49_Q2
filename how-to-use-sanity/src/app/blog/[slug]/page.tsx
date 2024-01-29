import { blogType } from "@/types";
import { client } from "../../../../sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import PortableText from "react-portable-text"

export const dynamic = 'force-dynamic'
// 'auto' | 'force-dynamic' | 'error' | 'force-static'

const singlePost = async (slug: string) => {
    const query = `*[_type == "blog" && slug.current == "${slug}"] {
      _id,
        mainImage,
        post,
        author,
        _createdAt,
        "slug": slug.current,
        body
    }[0]`;

    console.log(slug)

    const data: blogType = await client.fetch(query)
    return data;
}

const SingleBlog = async ({ params }: { params: { slug: string } }) => {
    const data = await singlePost(params.slug);

    return (
        <div className="container max-w-7xl mx-auto ">
            <div className="flex flex-col gap-5">

                <Image src={urlForImage(data.mainImage)} alt="some image" width={1000} height={1000} />

                <h1>{data.post}</h1>
                <div>

                    <p>
                        <PortableText
                            content={data.body}
                            serializers={{

                                h1: (props: any) => <h1 className="text-5xl font-bold" {...props} />,
                                h2: (props: any) => <h1 className="text-3xl font-bold" {...props} />,
                            }}
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog


export const generateStaticParams = async () => {
    const query = `*[_type == "blog"] {
          "slug": slug.current,
      }`;

    const data: blogType[] = await client.fetch(query);

    return data.map((post) => ({
        slug: post.slug,
    }))
}