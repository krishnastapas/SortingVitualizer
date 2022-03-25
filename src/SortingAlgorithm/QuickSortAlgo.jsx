export  function QuickSortAnimation(array){
    let n=array.length;
    const animations=[];

    quickSort(array,0,n-1,animations);
    return animations;
}
function quickSort(array,low,high,animations){
    if(low<high)
    {
        let pi=partition(array,low,high,animations);

        quickSort(array,low,pi-1,animations);
        quickSort(array,pi+1,high,animations);
    }
}
function partition(array,low,high,animations){
    let pivot=array[high];
    let i=low-1;
    animations.push([high,-1]);
    animations.push([high,-1]);
    // let temp=0;
    for(let j=low;j<=high-1;j++)
    {
        if(array[j]<pivot ){
            i++;
            if(i!==j)
            {
            animations.push([i,array[i]]);
            animations.push([j,array[j]]);

            
            let temp1=array[j];
            array[j]=array[i];
            array[i]=temp1;
            }
        }
    }
    animations.push([i+1,array[i+1]]);
    animations.push([high,array[high]]);
    let temp2=array[i+1];
    array[i+1]=array[high];
    array[high]=temp2;
    
    
    return (i+1);

}