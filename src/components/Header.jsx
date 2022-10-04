import React from 'react'
import Search from './Search'
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
  return (
    <div className='absolute flex flex-nowrap justify-between items-center w-full h-[7] border-b-[1px] text-white border-white bg-[#202020] text-sm p-1'>
      <div className='flex justify-center items-center'>
        <IconButton aria-label='menu-btn' size='large' color='primary' >
          <MenuIcon fontSize='inherit'/>
        </IconButton>
        <Typography>MyTube</Typography>
      </div>
      <Search />
      
    </div>
  )
}

export default Header