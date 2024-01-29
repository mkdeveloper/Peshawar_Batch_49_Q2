import { Image } from "sanity";


type blogType = {
    _id: string;
    mainImage: Image;
    post: string;
    author: string;
    _createdAt: string;
    slug: string;
    body: any
}