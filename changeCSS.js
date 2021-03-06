function changeCSS(select, cssArray){
  //function that Removes ClassList
  //then adds back that that DOM element
  // this only works because elem is stored in Memory
  var myArray = [];
  
  var elem = document.getElementsByClassName(select);
  for(var i=0; i<elem.length; i++){
     myArray.push(elem[i]);     
  }  
  myArray.forEach((item, index)=>{
    console.log(myArray);
    myArray[index].removeAttribute('class');
    myArray[index].classList.add(select);
  });
  
  for(var ii=0; ii<elem.length; ii++){
    cssArray.forEach((item, index)=>{
      myArray[ii].classList.add(item);
    });
  }  
}


//this functon takes into account the changeCSS function
//pass through (as parameter) - the selected CSS class
//pass through (as parameter 2) - array - each matrix of Array strips all CSS class and adds

//eg
//cssFromArray('myClass', [['class1', class2'], ['class1', 'class3', 'class4'],['class1', 'class5']]);
async function cssFromArray(select, time, array){
    for(var i=0; i<=array.length; i++){
      await wait(time).then(()=>{
        changeCSS(select, array[i]);  
      });
    }
}

//helper function - to make 'await wait(time).then(()=>{});' to work
function wait(timeout){
    return new Promise(resolve=>setTimeout(resolve, timeout));
}
