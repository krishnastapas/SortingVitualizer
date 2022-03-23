export  function BubbleSortAnimation(array){
    // const tempay=array.slice();
    let n=array.length;
    const animations=[];
    for(let i=0;i<n-1;i++){
    
        for(let j=0;j<n-i-1;j++)
        {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([j,j+1]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([j,j+1]);

            if(array[j]>array[j+1])
             {
                 // two value swaped
                 animations.push([j,array[j]]);
                 animations.push([j+1,array[j+1]]);
                 let temp=array[j];
                 array[j]=array[j+1];
                 array[j+1]=temp;
             }
        }
    }
    return animations;
}