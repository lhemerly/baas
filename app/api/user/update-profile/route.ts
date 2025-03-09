import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/utils/GetSession';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session || !session.user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    const { name, image } = await request.json();
    
    // Update the user in the database
    const updatedUser = await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        name,
        image,
      },
    });
    
    return NextResponse.json({ 
      success: true, 
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
        email: updatedUser.email,
        image: updatedUser.image,
      } 
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}