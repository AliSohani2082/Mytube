import React from 'react'
import Search from './Search'
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';


const Header = () => {
  const pallet = useSelector(state => state.theme.pallet)
  return (
    <div className={`bg-[${pallet.primary}] absolute flex flex-nowrap justify-between items-center w-full h-[7] border-b-[1px] text-white border-white text-sm p-1`}>
      <div className='flex justify-center items-center'>
        <IconButton aria-label='menu-btn' size='large' sx={{color: pallet.mainText}} >
          <MenuIcon fontSize='inherit'/>
        </IconButton>
        <Typography sx={{color: pallet.mainText}}>MyTube</Typography>
      </div>
      <Search />
      <div>
        
      </div>
      
    </div>
  )
}

export default Header