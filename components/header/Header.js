import React from 'react'
import Image from 'next/image'
import HeaderIcon from '../headerIcon/HeaderIcon'
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid'
import { FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline'


const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-3 lg:px-5 shadow-md">
        {/* left */}
        <div className='flex items-center'>
            <Image 
                src='https://links.papareact.com/5me'
                alt='fb-logo'
                width={40}
                height={40}
                layout='fixed' 
            />
            <div className='flex ml-2 items-center rounded p-3 bg-gray-200'>
              <SearchIcon className="h-5 w-5 text-gray-600"/>
              <input type='text' className='hidden md:inline-flex ml-2 outline-none placeholder-gray-500 items-center bg-transparent' placeholder='Search Facebook' />
            </div>
        </div>


        {/* center */}
        <div className='flex justify-center flex-grow'>
          <div className='flex space-x-6 md:space-x-2 '>
            <HeaderIcon active Icon={HomeIcon} />
            <HeaderIcon Icon={FlagIcon} />
            <HeaderIcon Icon={PlayIcon} />
            <HeaderIcon Icon={ShoppingCartIcon} />
            <HeaderIcon Icon={UserGroupIcon} />

          </div>
        </div>


        {/* right */}
        <div className="flex items-center sm:space-x-2 justify-end">
          {/* profile pic */}

          <p className='whitespace-nowrap font-semibold pr-3'>Lee Owonikoko</p>
          <ViewGridIcon className="icon" />
          <ChatIcon className='icon' />
          <BellIcon className='icon' />
          <ChevronDownIcon className='icon' />
        </div>


    </div>
  )
}

export default Header