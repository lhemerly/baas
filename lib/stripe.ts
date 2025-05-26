import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY_PLACEHOLDER || 'sk_test_YOUR_FALLBACK_SECRET_KEY_PLACEHOLDER', {
  apiVersion: '2024-06-20', // Use the latest API version
  typescript: true, // Enable TypeScript support
});

export const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY_PLACEHOLDER || 'pk_test_YOUR_FALLBACK_PUBLISHABLE_KEY_PLACEHOLDER';
