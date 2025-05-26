'use client';

import React, { useState } from 'react';

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // You might send product details or other data in the body
        // For now, the API route uses placeholder data, so an empty body or minimal data is fine.
        body: JSON.stringify({ items: [{ id: 'placeholder-item' }] }), 
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Failed to get redirect URL.');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      console.error('Checkout error:', errorMessage);
      setError(errorMessage);
      // Optionally, display this error to the user in the UI
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? 'Processing...' : 'Proceed to Checkout'}
      </button>
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
    </div>
  );
};

export default CheckoutButton;
