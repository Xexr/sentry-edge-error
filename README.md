## Getting Started

Create .env.local and add:
`NEXT_PUBLIC_SENTRY_DSN="YOUR_SENTRY_DSN"`

Open next.config.mjs and update 'org' and 'project' to your sentry org and project

Install packages:
`npm install`

Run the development server:
`npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser

Click the "Test action" button and you will see that no sentry events are logged.

Open /src/app/page.tsx and comment out the edge runtime line

Restart the dev server and click the "Test action" button again. You will see that the sentry event is logged.
