
import { ThemeProvider } from 'styled-components'
import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";

const  App = () => {

  React.useEffect(()=>{
    Aos.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    Aos.refresh();
  },[]);

    const theme ={
        colors:{
             bg:"#082D4A",
             btnbg:"#062237",
             txtcolor:"#FF785A",
             hr:"#DBDBDC",
             hr2:"border: 1px solid #D1D3DC",
             white:"#fff",
             black:" #13213B2",
             
             
        },

        media:{mobile:"768px", tab:"998px"},
    }
  return (
    <ThemeProvider theme={theme}>
    
    </ThemeProvider>
  )
}

export default  App;

