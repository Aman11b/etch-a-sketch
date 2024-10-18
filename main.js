// function to create grid 
function createGrid(size){
    const container=document.getElementById('grid-container');
    container.innerText='';

    const squareSize=535/size;

    for(let i=0;i<size*size;i++){
        const square=document.createElement('div');
        square.style.width=`${squareSize}px`;
        square.style.height=`${squareSize}px`;
        square.classList.add('grid-square');
        

        //add hover effect
        square.addEventListener('mouseover',function(){
            square.style.backgroundColor="#333";
        });
        container.appendChild(square);
    }
}
//event listener for grid size button
document.getElementById("grid-size-btn").addEventListener("click",()=>{
   let newSize=prompt("Enter new Grid size(1-100):");
   if(newSize>0 && newSize<=100){
    createGrid(newSize);
   }else{
    alert("Please enter a valid number between 1 and 100.");
   }
});

document.getElementById('reset-btn').addEventListener('click',()=>{
    const square=document.querySelectorAll('.grid-square');
    square.forEach(square=>{
        square.style.backgroundColor='';
    });

    
});
createGrid(16);