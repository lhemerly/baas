import { stripe } from '@/lib/stripe'; // Adjust path as needed
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// This is your Stripe CLI webhook secret for testing your endpoint locally.
// IMPORTANT: Store this in an environment variable in production!
const STRIPE_WEBHOOK_SECRET_PLACEHOLDER = process.env.STRIPE_WEBHOOK_SECRET_PLACEHOLDER || 'whsec_YOUR_WEBHOOK_SECRET_PLACEHOLDER';

export async function POST(req: NextRequest) {
  const rawBody = await req.text();
  const sig = req.headers.get('stripe-signature');

  let event: Stripe.Event;

  try {
    // TODO: IMPORTANT - Implement proper signature verification in a real application
    // For now, we are bypassing signature verification for placeholder purposes.
    // Ensure STRIPE_WEBHOOK_SECRET_PLACEHOLDER is set up and used for verification.
    // event = stripe.webhooks.constructEvent(rawBody, sig!, STRIPE_WEBHOOK_SECRET_PLACEHOLDER);
    
    // For placeholder purposes, we'll parse the JSON directly.
    // REMOVE THIS IN PRODUCTION AND USE stripe.webhooks.constructEvent
    event = JSON.parse(rawBody) as Stripe.Event;

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error(`Webhook signature verification failed: ${errorMessage}`, err);
    return NextResponse.json({ error: `Webhook Error: ${errorMessage}` }, { status: 400 });
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      // TODO: Fulfill the purchase...
      // e.g., save the order to your database, grant access to a service
      console.log(`Checkout session completed: ${session.id}`);
      // Example: await fulfillOrder(session);
      break;
    case 'invoice.paid':
      const invoice = event.data.object as Stripe.Invoice;
      // TODO: Handle successful invoice payment
      console.log(`Invoice paid: ${invoice.id}`);
      break;
    case 'invoice.payment_failed':
      const failedInvoice = event.data.object as Stripe.Invoice;
      // TODO: Handle failed invoice payment
      console.log(`Invoice payment failed: ${failedInvoice.id}`);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
