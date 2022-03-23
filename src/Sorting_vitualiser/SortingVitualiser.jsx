import React from 'react'
// import {useState} from 'react'
import './SortingVitualiser.css'

import { MergeSortAnimaton } from '../SortingAlgorithm/MergeSortAlgo';
import { BubbleSortAnimation } from '../SortingAlgorithm/BubbleSortAlgo';

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
        const color=i%3===0?"red":"green";
        
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
          // barOneSytle.backgroundColor="green";
          
        }, i*this.state.animationTime);
      }

    }

  }
  // quick sort animation
  quickSort(){

  }
  // bubble Sort animation
  bubbleSort(){
    // const javaScriptSortedArray=this.state.array.slice().sort((a,b)=>a-b);
    const animations=BubbleSortAnimation(this.state.array);
    console.log(animations)
    // console.log(isArraysEqual(this.state.array,javaScriptSortedArray));
    for(let i=0;i<animations.length;i++)
    {
      if(i%4===3)
         continue;
      const arrayBars=document.getElementsByClassName('array-bar');
      const iscolorchange=i%4!==2;
      if(iscolorchange){
        
        const [barOneIdx,barTwoIdx]=animations[i];
        const barOneSytle=arrayBars[barOneIdx].style;
        const barTwoStyle=arrayBars[barTwoIdx].style;
        const color=i%4===0?"red":"blue";
        
        setTimeout(() => {
          // const [barOneIdx,newHeight]=animations[i];
          barOneSytle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;


          
        }, i*this.state.animationTime);

      }
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
  // heapSort animation
  heapSort(){

  }
  
  render() {
    const { array } = this.state;
    return (
       
      <div className='middleContain'>

        <div className='array-container'>
          {array.map((value, idx) => (

            <div className='array-bar' key={idx}
              style={{ height: `${value}px` }}>
            </div>

          ))}
        </div>
     
        <div className='buttons-div'>
           Array Size: <input value={this.state.arraySize} onChange={(e)=>{
             const arraySize=e.target.value;
             this.setState({arraySize})
           }}></input>
           Animation Time: <input value={this.state.animationTime} onChange={(e)=>{
             const animationTime=e.target.value;
             this.setState({animationTime})
           }}></input>
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={()=>this.mergeSort()}>Merge Sort</button>
          <button onClick={()=>this.bubbleSort()}>Bubble Sort</button>

        </div>
        
      </div>

    );
  }
}
// to genereate the random array element 
// it can generate duplicate element
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// function isArraysEqual(arrayOne,arrayTwo){
//   if(arrayOne.length!==arrayTwo.length) return false;
//   let n=arrayOne.length;
//   for(let i=0;i<n;i++)
//   {
//     if(arrayOne[i]!==arrayTwo[i]) return false;
//   }
//   return true;
// }