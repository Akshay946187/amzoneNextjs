'use client'
import { superbase } from '@/lib/superbase/hooks/useSuperbase'
import { Auth } from '@supabase/auth-ui-react'
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared'

const Sigin = () => {
  return (
    <div className='absolute top-0 h-full w-full bg-gray-200'>
      <div className='w-[300px] mx-auto my-8'>
      <Auth
    supabaseClient={superbase}
    
    appearance={{ theme: ThemeSupa }}
  />
      </div>
    </div>
  )
}

export default Sigin
