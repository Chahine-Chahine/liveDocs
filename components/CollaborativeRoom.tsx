'use client'

import { ClientSideSuspense, RoomProvider } from '@liveblocks/react/suspense'
import React, { ReactNode } from 'react'
import Header from '@/components/Header'
import { Editor } from '@/components/editor/Editor'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const CollaborativeRoom = () => {
  return (
    <RoomProvider id="my-room">
    <ClientSideSuspense fallback={<div>Loading…</div>}>
      <div className='collabrotive-room'>
      <Header>
        <div className='flex w-fit items-center justify-center gap-2'>
<p className='document-title'>Share</p>
       </div>
       <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
      </Header>
      <Editor/>
      </div>
    </ClientSideSuspense>
  </RoomProvider>
  )
}

export default CollaborativeRoom