import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/GetSession';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // Get the user's ID
    const userId = session.user.id;
    
    // Delete the user's account
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    
    // Return a plain text success response to avoid JSON parsing errors
    return new Response(null, { 
      status: 200,
      headers: {
        'Content-Type': 'text/plain'
      }
    });
  } catch (error) {
    console.error('Error deleting account:', error);
    return NextResponse.json({ error: 'Failed to delete account' }, { status: 500 });
  }
}