# Assignment 2

Assignment for this week.

Follow the following steps.

1. Install a fresh copy of Nextjs using PNPM.

2. Generate some dummy data. (You can use [mockaroo](https://www.mockaroo.com/) or any other tool you prefer). e.g.

```bash
const dummyData = [{
id: number;
title: string;
description: string;
date: string;
slug: string; (same as title but without any spaces)
},
]
```

3. Create a static Blog page, and display complete dummy data on this page. (You can use tailwindcss or simple css for styling).

4. Each of your title should point to a dynamic route. (Use Nextjs Link component)

5. In blog page route, make sure you create a dynamic route.

6. Filter out the dummy data to show the specific post.

7. Use generateStaticParams function to create static pages at build time.

8. Test your application with the following commands.

```
# To create a production version build
pnpm build

# To run the production version
pnpm start
```

9. Create account at [vercel](https://vercel.com/) (Better signUp with github.com)

10. Install vercel at your PC.

11. Deploy the project using the following command.

```
vercel
```

Follow [Readme file](https://github.com/mkdeveloper/Peshawar_Batch_49_Q2/blob/main/week_04_dynamic_routing/README.md), it will help you in deployment at vercel.

**Bonus:** If you are facing any types of error, while running `vercel` command, make sure you use **Command Prompt** as your terminal instead of powershell.

If you are having Difficulty, I will create Videos on how to use Mockaro and select commandPrompt as your terminal.
