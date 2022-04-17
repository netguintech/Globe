import React from "react";
import {FaGithub, FaGlobe} from "react-icons/fa"
import {FaMedium} from "react-icons/fa"
import $ from 'jquery';

export const SideBar = () =>  {
   

    return(
        <> 
            <div class="sidenav">
                
                <a href="https://github.com/netguintech/Globe"><FaGithub/></a>
                <a href="https://medium.com/netguin/how-to-create-an-interactive-spinning-globe-with-d3-js-and-react-724fbcf8a0cd"><FaMedium/></a>
                <span onClick={() => {$('.graticule').toggle()} }>
                <i><FaGlobe/></i>
                </span>
            </div>
        </>
        
        );
  };

