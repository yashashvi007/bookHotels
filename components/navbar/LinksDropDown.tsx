import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
  } from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { LuAlignLeft } from "react-icons/lu"
import UserIcon from './UserIcon';
import { NavLinks } from '@/utils/links';
import Link from 'next/link';

export default function LinksDropDown() {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className='flex gap-4 max-w-[100px]'>
                <LuAlignLeft className='w-6 h-6' />
                <UserIcon/>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-52' align='start' sideOffset={10} >
            {NavLinks.map((link)=> {
                return (
                    <DropdownMenuItem key={link.href} >
                        <Link href={link.href} className='capitalize w-full' >
                          {link.label}
                        </Link>
                    </DropdownMenuItem>
                )
            })}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
