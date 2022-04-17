import { geoOrthographic, geoPath, geoGraticule } from 'd3';
import React, {useState, useCallback} from 'react';
import $ from 'jquery';

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

  SetMousedDown(true);
  
},[])
const handleMouseUp = useCallback((event) => {

  $('.marks').css('cursor', '')
  SetMousedDown(false);
  
},[])

const handleMouseMove = useCallback((event) => {
  
  const {clientX, clientY}= event;
  if(mouseDown){
    SetMousePosition({x:clientX, y:clientY});
    $('.marks').css('cursor', 'pointer')
    $('.star').css('backgroundPositionX', clientX);
    $('.star').css('backgroundPositionY', clientY);
  }
  
},[SetMousePosition, mouseDown])

  
  return(
  <g  className="marks" onMouseDown = {handleMouseDown} onMouseMove = {handleMouseMove} onMouseUp= {handleMouseUp}>
      {projection.rotate([MousePosition.x + 30 / 60, -MousePosition.y, 0])}
     <path className = "sphere" d={ path({type: 'Sphere'})}/>
      <path className = "graticule" d={ path(graticule())} style = {{display: 'none'}}/> 
     
    {
      land.features.map(feature => (
       <path className = "feature" d={ path(feature)}/>
      )) 
    }
   	 <path className = "interiors" d={ path(interiors)}/>
   
  </g>);
};
