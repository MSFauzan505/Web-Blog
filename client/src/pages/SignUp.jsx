import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white test-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Persona</span>
            Blog
          </Link>
          <p className='test-sm mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis recusandae fugiat atque rerum ipsam. Id perspiciatis maiores quae eos ab fugit tempore vitae dolores. Veniam laudantium dicta magnam assumenda tenetur!
          </p>
        </div>
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div className=''>
               <Label value='Your username'/>
               <TextInput
               type='text'
               placeholder='Username'
               id='username'
               />
            </div>

            <div className=''>
               <Label value='Your email'/>
               <TextInput
               type='text'
               placeholder='example@gmail.com'
               id='email'
               />
            </div>

            <div className=''>
               <Label value='Your password'/>
               <TextInput
               type='text'
               placeholder='Password'
               id='password'
               />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sing Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/sing-in' className='text-blue-500'>
            Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
