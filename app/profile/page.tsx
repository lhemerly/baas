'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProfilePage() {
  const { data: session, update } = useSession();
  const router = useRouter();
  const [name, setName] = useState(session?.user?.name || '');
  const [imageUrl, setImageUrl] = useState(session?.user?.image || '');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect to home page if not logged in
  if (!session) {
    router.push('/');
    return null;
  }

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/user/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          image: imageUrl,
        }),
      });

      if (response.ok) {
        // Update the session with the new data
        await update({
          ...session,
          user: {
            ...session.user,
            name,
            image: imageUrl,
          },
        });
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating your profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      setIsLoading(true);
      try {
        // Delete the account from the database
        const response = await fetch('/api/user/delete-account', {
          method: 'DELETE',
        });

        if (response.ok) {
          // Force a hard reload to the homepage, which will clear the session state
          window.location.href = '/?deleted=true';
        } else {
          alert('Failed to delete account');
        }
      } catch (error) {
        console.error('Error deleting account:', error);
        alert('An error occurred while deleting your account');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto py-10 px-4 max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Profile</h1>
        <Link href="/">
          <Button variant="outline" size="sm">
            Back to Main Page
          </Button>
        </Link>
      </div>
      
      <form onSubmit={handleUpdateProfile} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={session.user?.email || ''}
            disabled
            className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
          />
          <p className="text-xs text-muted-foreground">Email is linked to your Google account and cannot be changed</p>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="image">
            Profile Picture URL
          </label>
          <input
            id="image"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {imageUrl && (
            <div className="mt-2 flex justify-center">
              <img
                src={imageUrl}
                alt="Profile picture preview"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
          )}
        </div>
        
        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Updating...' : 'Update Profile'}
        </Button>
      </form>
      
      <div className="mt-12 pt-6 border-t">
        <h2 className="text-xl font-semibold text-red-600 mb-4">Danger Zone</h2>
        <Button
          variant="destructive"
          onClick={handleDeleteAccount}
          disabled={isLoading}
          className="w-full"
        >
          Delete Account
        </Button>
        <p className="text-xs text-muted-foreground mt-2">
          This action cannot be undone. This will permanently delete your account and remove all your data.
        </p>
      </div>
    </div>
  );
}