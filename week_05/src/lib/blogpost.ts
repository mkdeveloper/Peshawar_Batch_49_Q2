export type FetchedDataTypes = {
  id: string;
  slug: string;
  avatar: string;
  body: string;
  createdAt: string;
  name: string;
  title: string;
};

export const FetchedData = async () => {
  const res = await fetch(`https://657c2c0b853beeefdb98d176.mockapi.io/posts`, {
    next: { revalidate: 120 },
  });

  const blog: FetchedDataTypes[] = await res.json();

  return blog;
};
