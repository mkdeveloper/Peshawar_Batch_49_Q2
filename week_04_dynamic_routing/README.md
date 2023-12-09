# Topics for Today

- Dynamic Routes.
- GenerateStaticParams.
- Create Account at Vercel.
- Install vercel globaly using command.

  ```bash
  npm install -g vercel
  ```

- Deployed Site to vercel.

- To deploy site to vercel run command in terminal
  ```bash
  vercel
  ```
- Sign in to vercel, select your desired Account, through wich you have created vercel account

  ```bash
  Vercel CLI 32.6.1

  > > No existing credentials found. Please log in:
  > > ? Log in to Vercel
  > > ○ Continue with GitHub
  > > ○ Continue with GitLab
  > > ○ Continue with Bitbucket
  > > ○ Continue with Email
  > > ○ Continue with SAML Single Sign-On
  > > ─────────────────────────────────
  > > ○ Cancel
  > >

  - Now follow the following steps.

  ? Set up and deploy “~/web/my-lovely-project”? [Y/n] y
  ? Which scope do you want to deploy to?
  My Awesome Team (Your desired account name)
  ? Link to existing project? [y/N] n
  ? What’s your project’s name? (week-04-dynamic-routing)
  ? In which directory is your code located? ./
      Local settings detected in vercel.json:
      Auto-detected Project Settings (Next.js):
      - Build Command: next build
      - Development Command: next dev --port $PORT
      - Install Command: `yarn install`, `pnpm install`, `npm install`, or `bun install`
      - Output Directory: Next.js default
      ? Want to modify these settings? [y/N] n
  ```

  Great, you have deployed you first application at vercel.

- When you make changes to existing project and want to commit these settings to vercel use this command.

  ```bash
  vercel --prod
  ```

## Bonus

To create fake data I have used [mockaroo](https://www.mockaroo.com/). Make sure you select the format as **json**

[Click here to access live link](https://week-04-dynamic-routing-ffiuuya65-mkdeveloper.vercel.app/)
