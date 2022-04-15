import React from "react";
import {FaGithub} from "react-icons/fa"
import {FaMedium} from "react-icons/fa"

export const SideBar = () =>  {
   

    return(
        <> 
            <div class="sidenav">
                
                <a href="https://github.com/netguintech/Globe"><FaGithub/></a>
                <a href="#medium"><FaMedium/></a>
            </div>
        </>
        
        );
  };

