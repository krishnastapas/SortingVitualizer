import React from 'react'
// import {useState} from 'react'
import './SortingVitualiser.css'

import { MergeSortAnimaton } from '../SortingAlgorithm/MergeSortAlgo';

// const [arraySize, setarraySize] = useState(500);

export default class SortingVitualiser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [], arraySize:200,
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
        const color=i%3===0?"red":"aqua";
        
        setTimeout(() => {
          // const [barOneIdx,newHeight]=animations[i];
          barOneSytle.backgroundColor=color;
          barTwoStyle.backgroundColor=color;


          
        }, i);

      }
      else{
        setTimeout(() => {
          const [barOneIdx,newHeight]=animations[i];
          const barOneSytle=arrayBars[barOneIdx].style;
          barOneSytle.height=`${newHeight}px`;
          // barOneSytle.backgroundColor="green";
          
        }, i);
      }

    }

  }
  // quick sort animation
  quickSort(){

  }
  // bubble Sort animation
  bubbleSort(){

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
           Enter Array Size: <input value={this.state.arraySize} onChange={(e)=>{
             const arraySize=e.target.value;
             this.setState({arraySize})
           }}></input>
          <button onClick={() => this.resetArray()}>Generate New Array</button>
          <button onClick={()=>this.mergeSort()}>MergeSort</button>
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