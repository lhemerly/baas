# BAAS with Next.js and Prisma

This project is a Next.js application that uses Prisma and a SQLite database.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
   Then open [http://localhost:3000](http://localhost:3000).

3. Update the database schema (optional):
   ```bash
   npx prisma migrate dev
   ```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://prisma.io/docs)

## Deploy on Vercel

You can deploy this project using [Vercel](https://vercel.com/). Refer to the [deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.

## Stripe Integration

This project uses Stripe for payment processing.

### Environment Variables

To enable Stripe functionality, you need to set up the following environment variables. These should be obtained from your Stripe Dashboard.

*   `STRIPE_PUBLISHABLE_KEY_PLACEHOLDER`: Your Stripe publishable API key.
    *   *Example in code: `pk_test_YOUR_FALLBACK_PUBLISHABLE_KEY_PLACEHOLDER`*
*   `STRIPE_SECRET_KEY_PLACEHOLDER`: Your Stripe secret API key.
    *   *Example in code: `sk_test_YOUR_FALLBACK_SECRET_KEY_PLACEHOLDER`*
*   `STRIPE_WEBHOOK_SECRET_PLACEHOLDER`: Your Stripe webhook signing secret for the `/api/stripe/webhooks` endpoint.
    *   *Example in code: `whsec_YOUR_WEBHOOK_SECRET_PLACEHOLDER`*

**Note:** The values used in the codebase are placeholders. For a real deployment, replace these with your actual keys from the Stripe Dashboard. Create a `.env.local` file in the root of your project and add these variables there.

### Setup

*   **SDK Installation**: The Stripe Node.js SDK (`stripe`) is already included in the project's dependencies (`package.json`).
*   **Configuration**: The Stripe client is initialized in `lib/stripe.ts`. This file uses the environment variables mentioned above.
*   **API Routes**:
    *   `/api/stripe/checkout`: This route handles the creation of Stripe Checkout sessions. When a user initiates a payment, the frontend calls this endpoint, which then communicates with Stripe to create a secure payment session.
    *   `/api/stripe/webhooks`: This route is designed to receive and process webhook events sent from Stripe. Webhooks are used for asynchronous events like successful payments, subscription updates, etc. It's crucial for fulfilling orders and keeping your system in sync with Stripe.

### Testing Webhooks (Optional but Recommended)

To test your webhook endpoint (`/api/stripe/webhooks`) locally, you can use the Stripe CLI:

1.  Install the [Stripe CLI](https://stripe.com/docs/stripe-cli).
2.  Log in to your Stripe account: `stripe login`
3.  Forward webhook events to your local development server:
    ```bash
    stripe listen --forward-to localhost:3000/api/stripe/webhooks
    ```
    This command will provide you with a webhook secret (use this for `STRIPE_WEBHOOK_SECRET_PLACEHOLDER` during local testing).

This setup allows Stripe to send events to your local application, enabling you to test the webhook handling logic.
