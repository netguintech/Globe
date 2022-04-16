import React from "react";
import {FaGithub, FaGlobe} from "react-icons/fa"
import {FaMedium} from "react-icons/fa"
import $ from 'jquery';

export const SideBar = () =>  {
   

    return(
        <> 
            <div class="sidenav">
                
                <a href="https://github.com/netguintech/Globe"><FaGithub/></a>
                <a href="#medium"><FaMedium/></a>
                <span onClick={() => {$('.graticule').toggle()} }>
                <i><FaGlobe/></i>
                </span>
            </div>
        </>
        
        );
  };

