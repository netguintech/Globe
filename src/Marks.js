import { geoOrthographic, geoPath, geoGraticule } from 'd3';
import React, {useState, useCallback} from 'react';

const width = 960;
const height = 500;
const intialMousePosition = {x: width/2, y: height/2};

const projection = geoOrthographic();
const path = geoPath(projection);
const graticule = geoGraticule();


export const Marks = ({data: {land, interiors}}) => {

  const [MousePosition, SetMousePosition] = useState(intialMousePosition)
  const [mouseDown, SetMousedDown] = useState(false)

  const handleMouseDown = useCallback((event) => {
  // const {clientX, clientY}= event;
  // SetMousePosition({x:clientX, y:clientY});
  SetMousedDown(true);
  
},[])
const handleMouseUp = useCallback((event) => {
  // const {clientX, clientY}= event;
  // SetMousePosition({x:clientX, y:clientY});
  SetMousedDown(false);
  
},[])

const handleMouseMove = useCallback((event) => {

  const {clientX, clientY}= event;
  if(mouseDown){
    SetMousePosition({x:clientX, y:clientY});
  }
  
},[SetMousePosition, mouseDown])

  
  return(
  <g  className="marks" onMouseDown = {handleMouseDown} onMouseMove = {handleMouseMove} onMouseUp= {handleMouseUp}>
      {projection.rotate([MousePosition.x + 30 / 60, MousePosition.y + 30 / 60, 0])}
     <path className = "sphere" d={ path({type: 'Sphere'})}/>
      <path className = "graticule" d={ path(graticule())}/> 
     
    {
      land.features.map(feature => (
       <path className = "feature" d={ path(feature)}/>
      )) 
    }
   	 <path className = "interiors" d={ path(interiors)}/>
   
  </g>);
};
