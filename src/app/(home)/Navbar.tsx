import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchInput from './SearchInput'
import { UserButton, OrganizationSwitcher } from '@clerk/nextjs'

type Props = {}

export const Navbar = (props: Props) => {
  return (
    <nav className='flex items-center justify-between h-full w-full'>
        <div className='flex gap-3 items-center shrink-0 pr-6'>
            <Link href="/">
                <Image
                    src="/logo.svg"
                    alt='Logo'
                    width={66}
                    height={66}
                />
            </Link>
            <h3 className='text-xl'>
                Docs
            </h3>
        </div>
        <SearchInput />
        <div className='flex gap-3 items-center pl-6'>
            <OrganizationSwitcher
                afterCreateOrganizationUrl="/"
                afterLeaveOrganizationUrl="/"
                afterSelectOrganizationUrl="/"
                afterSelectPersonalUrl="/"
            />
            <UserButton />
        </div>
    </nav>
  )
}