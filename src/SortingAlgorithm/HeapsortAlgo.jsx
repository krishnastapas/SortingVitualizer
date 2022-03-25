export function HeapSortAnimation(array){
   const animation=[];
  let n=array.length;
  // building  max heap
  for(let i=Math.floor(n/2)-1;i>=0;i--)
    heapify(array,n,i,animation);

    // one by extract element from the root and
    //  swap with the last index decreease the size of the array
    for(let i=n-1;i>0;i--){
        animation.push([0,array[0]]);
        animation.push([i,array[i]]);
        let temp=array[0];
        array[0]=array[i];
        array[i]=temp;

        // call heapify on the subtreee also

        heapify(array,i,0,animation);
    }

    return animation;
}
function heapify(array,n,i,animation){
   let largest=i ; // Intialize largest as root
   let left=2*i+1;  // left child index
   let right=2*i+2; // right child index

   // if left child is larger than root
  if(left<n && array[left]>array[largest]){
      largest=left;
  }
  // if right child is larger then root
  if(right<n && array[right]>array[ largest]){
      largest=right;

  }
  if(largest!==i){
    animation.push([i,array[i]]);
    animation.push([largest,array[largest]]);
      let temp=array[i];
      array[i]=array[largest];
      array[largest]=temp;

      heapify(array,n,largest,animation);
  }

}