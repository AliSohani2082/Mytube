import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'dark',
    pallet: {
      background: '#181818',
      primary: '#202020',
      secondary: '#383838',
      mainText: '#FFFFFF',
      subText: '#A6A8AA'
    },
    allPallet: {
      dark:{
        background: '#181818',
        primary: '#202020',
        secondary: '#383838',
        mainText: '#FFFFFF',
        subText: '#A6A8AA'
      },
      light:{
        
      }
    }
  },
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload
      state.pallet = state.allPallet[action.payload]
    }
  }
})

export const { changeMode } = themeSlice.actions
export default themeSlice.reducer