import React from 'react'
import logo from './logo.png';
import './SortingVitualiser.css'

import { MergeSortAnimaton } from '../SortingAlgorithm/MergeSortAlgo';
import { BubbleSortAnimation } from '../SortingAlgorithm/BubbleSortAlgo';
import { QuickSortAnimation } from '../SortingAlgorithm/QuickSortAlgo';
import { HeapSortAnimation } from '../SortingAlgorithm/HeapsortAlgo';

// const animationTime=1000;

export default class SortingVitualiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [], arraySize:100,animationTime:5,
    };
  }

  componentDidMount() {
    this.resetArray();

  }
  // to reset the array
  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.arraySize; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    this.setState({ array })

  }
  // mergesort animation
  mergeSort(){
    const animations=MergeSortAnimaton(this.state.array);
    for(let i=0;i<animations.length;i++)
    {
      const arrayBars=document.getElementsByClassName('array-bar');
      const iscolorchange=i%3!==2;
      if(iscolorchange){
        const [barOneIdx,barTwoIdx]=animations[i];
        const barOneSytle=arrayBars[barOneIdx].style;
        const barTwoStyle=arrayBars[barTwoIdx].style;
        const color=i%3===0?"peru":"khaki";
        
        setTimeout(() => {
          // const [barOneIdx,newHeight]=animations[i];
          barOneSytle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;


          
        }, i*this.state.animationTime);

      }
      else{
        setTimeout(() => {
          const [barOneIdx,newHeight]=animations[i];
          const barOneSytle=arrayBars[barOneIdx].style;
          barOneSytle.height=`${newHeight}px`;
          
          
        }, i*this.state.animationTime);
      }

    }

  }
  
  // bubble Sort animation
  bubbleSort(){
    // const javaScriptSortedArray=this.state.array.slice().sort((a,b)=>a-b);
    const animations=BubbleSortAnimation(this.state.array);
    // animations has set of %4 values first two is the two value we comaparing, one is change to red and then again back to own color
    // third and fourth value are the indexes and heights which are need to swapped
    
    // console.log(animations)
   
    for(let i=0;i<animations.length;i++)
    {
      if(i%4===3)
         continue;
      const arrayBars=document.getElementsByClassName('array-bar');
      const iscolorchange=i%4!==2;  
      // for comparison two height chaning into red and agian two green in next iteration
      if(iscolorchange){
        
        const [barOneIdx,barTwoIdx]=animations[i];
        const barOneStyle=arrayBars[barOneIdx].style;
        const barTwoStyle=arrayBars[barTwoIdx].style;
        const color=i%4===0?"peru":"khaki";
        
        setTimeout(() => {
          // const [barOneIdx,newHeight]=animations[i];
          barOneStyle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;


          
        }, i*this.state.animationTime);

      }
      // swapping the  height
      else{
        
        setTimeout(() => {
          const [barOneIdx,Height1]=animations[i];
          const barOneStyle=arrayBars[barOneIdx].style;
          
          const [barTwoIdx,Height2]=animations[i+1];
          const barTwoStyle=arrayBars[barTwoIdx].style;
          if(barOneIdx!==-1)
          {
          barOneStyle.height=`${Height2}px`;
          barTwoStyle.height=`${Height1}px`;

          }
          // barOneStyle.backgroundColor="green";
          // barTwoStyle.backgroundColor="green";
          
        }, i*this.state.animationTime);
      }

    }

  }
  // Quick Sort animation
  QuickSort(){
    // console.log("Unsorted Array");
    // const javaScriptSortedArray=this.state.array.slice().sort((a,b)=>a-b);
    // console.log(this.state.array)
    
    let animations=QuickSortAnimation(this.state.array);
    // console.log("sorted array");
    // console.log(this.state.array);
    // console.log("animation array")
    // console.log(animations);
    // console.log(isArraysEqual(this.state.array,javaScriptSortedArray));
    
    
    const arrayBars=document.getElementsByClassName('array-bar');
    let m=animations.length;
    // let n=animations[0].length;
     for(let i=0;i<m;i=i+2){
         if(animations[i][1]!==-1)
         {
        setTimeout(() => {
          const [barOneIdx,Height1]=animations[i];
          const barOneStyle=arrayBars[barOneIdx].style;
          
          const [barTwoIdx,Height2]=animations[i+1];
          const barTwoStyle=arrayBars[barTwoIdx].style;

          // let color1=barOneStyle.backgroundColor;
          // let color2=barTwoStyle.backgroundColor;
          //  console.log(`${color1}`)
          barOneStyle.height=`${Height2}px`;
          // barOneStyle.backgroundColor=color2;

          barTwoStyle.height=`${Height1}px`;
          // barTwoStyle.backgroundColor=color1;
          
          
         
          
        }, i*this.state.animationTime);
         }
        //  else{
        //    setTimeout(() => {
        //     const [barIdx,height]=animations[i];
        //     const barstyle=arrayBars[barIdx].style;
        //     barstyle.backgroundColor="blue";
        //    }, i*this.state.animationTime);
           
        //  }
     }
  }
  
  HeapSort(){
    
    console.log("Unsorted Array");
    const javaScriptSortedArray=this.state.array.slice().sort((a,b)=>a-b);
    console.log(this.state.array)
    
   let animations=HeapSortAnimation(this.state.array);
    console.log("sorted array");
    console.log(this.state.array)

    console.log(isArraysEqual(this.state.array,javaScriptSortedArray));
    const arrayBars=document.getElementsByClassName('array-bar');
    let m=animations.length;
    // let n=animations[0].length;
     for(let i=0;i<m;i=i+2){
         if(animations[i][1]!==-1)
         {
        setTimeout(() => {
          const [barOneIdx,Height1]=animations[i];
          const barOneStyle=arrayBars[barOneIdx].style;
          
          const [barTwoIdx,Height2]=animations[i+1];
          const barTwoStyle=arrayBars[barTwoIdx].style;

          // let color1=barOneStyle.backgroundColor;
          // let color2=barTwoStyle.backgroundColor;
          //  console.log(`${color1}`)
          barOneStyle.height=`${Height2}px`;
          // barOneStyle.backgroundColor=color2;

          barTwoStyle.height=`${Height1}px`;
          // barTwoStyle.backgroundColor=color1;
          
          
         
          
        }, i*this.state.animationTime);
         }
        //  else{
        //    setTimeout(() => {
        //     const [barIdx,height]=animations[i];
        //     const barstyle=arrayBars[barIdx].style;
        //     barstyle.backgroundColor="blue";
        //    }, i*this.state.animationTime);
           
        //  }
     }

  }
  render() {
    const { array } = this.state;
    return (
      <>
       <nav className='navbar'>
         <div className='Logodiv'>
         <img src={logo} alt="Sorting Visualizer"/>

         </div>
        <div className='buttons-div'>
           <div className='ArraySizeInput'>Array Size: <input value={this.state.arraySize} onChange={(e)=>{
             const arraySize=e.target.value;
             this.setState({arraySize})
           }}></input>
           </div>
           <div className='AnimationTimeInput'>
           Animation Time: <input value={this.state.animationTime} onChange={(e)=>{
             const animationTime=e.target.value;
             this.setState({animationTime})
           }}></input>
           </div>
          <button className='GenerateNewArrayBtn' onClick={() => this.resetArray()}>Generate New Array</button>
          
        </div>
        
     </nav>

     <div className='middleContain'>  

        <div className='array-container'>
          {array.map((value, idx) => (

            <div className='array-bar' key={idx}
              style={{ height: `${value}px` }}>
            </div>

          ))}
        </div>
     

     
     <div className='sortBtn'>
          <button className='MergeSortBtn' onClick={()=>this.mergeSort()}>Merge Sort</button>
          <button className='BubbleSortBtn' onClick={()=>this.bubbleSort()}>Bubble Sort</button>
          <button className='QuickSorttn' onClick={()=>this.QuickSort()}>Quick Sort</button>
          <button className='HeapSortBtn' onClick={()=>this.HeapSort()}>Heap Sort</button>
     </div>
        
        </div>
        
     </> 

    );
  }
}
// to genereate the random array element 
// it can generate duplicate element
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function isArraysEqual(arrayOne,arrayTwo){
  if(arrayOne.length!==arrayTwo.length) return false;
  let n=arrayOne.length;
  for(let i=0;i<n;i++)
  {
    if(arrayOne[i]!==arrayTwo[i]) return false;
  }
  return true;
}