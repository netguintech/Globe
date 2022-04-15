import React from "react";
import {FaGithub} from "react-icons/fa"
import {FaMedium} from "react-icons/fa"

export const SideBar = () =>  {
   

    return(
        <>
            
            <div class="sidenav">
                
                <a href="#about"><FaGithub/></a>
                <a href="#services"><FaMedium/></a>
            </div>
        </>
        
        );
  };

