import { fakeData } from "../../../../public/MOCK_DATA";

const post = ({ slug }: { slug: string }) => {
  const singleBlogPost = fakeData.find((post) => post.slug === slug);
  return singleBlogPost;
};

const SinglePage = ({ params }: { params: { slug: string } }) => {
  const singlePost = post(params);
  return (
    <div className="flex flex-col p-10">
      <h1>Tiltle: {singlePost?.title}</h1>
      <p>Description: {singlePost?.description}</p>
    </div>
  );
};

export default SinglePage;

export async function generateStaticParams() {
  const posts = fakeData;

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
