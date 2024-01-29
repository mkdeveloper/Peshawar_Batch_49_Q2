import { defineType, defineField } from "sanity";

export const blog = defineType({
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
        defineField({
            name: "post",
            title: "Post",
            type: "string"
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "post",
                maxLength: 96
            }
        }),
        defineField({
            name: "body",
            title: "Body",
            type: 'array',
            of: [{ type: 'block' }]
        }),
        defineField({
            name: "mainImage",
            type: "image",
            title: "Hero Image"
        }),
        defineField({
            name: "author",
            title: "Author",
            type: "string"
        }),

    ]


})