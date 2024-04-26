"use client"
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { useUser } from '@clerk/clerk-react'
import { useMutation } from 'convex/react';
import { PlusCircle } from 'lucide-react';
import Image from 'next/image'
import React from 'react'
import { toast } from 'sonner';

export default function DocumentsPage() {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = ()=>{
    const promise = create({
      title: "Untitled",
    });
    toast.promise(promise, {
      loading: "Creating...",
      success: "Note created",
      error: "Failed to create note",
    })
  }

  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
        <Image
          src="/empty.png"
          alt="Empty"
          width={300}
          height={300}
          className=""
        />
        <h2>
          Welcome to {user?.firstName}&apos;s Jotion
        </h2>
        <Button onClick={onCreate}>
          <PlusCircle className="w-4 h-4 mr-2" />
          Create e note
        </Button>
    </div>
  )
}
