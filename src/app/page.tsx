import * as Sentry from '@sentry/nextjs';

// when the runtime is edge, sentry does not log the below handled error.
// comment out the below line to see the error logged in sentry.
export const runtime = 'edge';

const page = () => {
  const action = async () => {
    'use server';

    // pause for 500ms
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      throw new Error('test action error');
      console.log('Hello world');
    } catch (error) {
      Sentry.captureException(error);
      console.log('Error');
    }
  };

  return (
    <form action={action}>
      <button>Test action</button>
    </form>
  );
};
export default page;
