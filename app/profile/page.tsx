import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

export default function CreateProfile() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize' >new user</h1>
      <div className='border p-8 rounded-md max-w-lg' >  
        <div className='mb-2'>
          <Label htmlFor='firstName' >First Name</Label>
          <Input id='firstName' name='firstName' type='text' />
        </div>
        <Button type='submit' size='lg' >
          Create Profile
        </Button>
      </div>
    </section>
  )
}
