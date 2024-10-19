// function to create grid 
function createGrid(size){
    const container=document.getElementById('grid-container');
    container.innerText='';

    const totalSquares = size * size;
    const squareSize = 550 / size;

    for(let i=0;i<totalSquares;i++){
        const square=document.createElement('div');
        square.style.width=`${squareSize}px`;
        square.style.height=`${squareSize}px`;
        square.classList.add('grid-square');
        

        //add hover effect
        addHoverEffect(square);

        container.appendChild(square);
    }
}
// Function to adjust grid when the window is resized
window.addEventListener('resize', () => {
    const gridSize = document.querySelectorAll('.grid-square').length ** 0.5; // Get the current grid size
    createGrid(gridSize); // Recreate the grid based on new size
});

// Function to add hover effect
function addHoverEffect(square){
    square.addEventListener('mouseover',function(){
        if(!square.classList.contains('hovered')){
            square.style.backgroundColor='#333';
            square.classList.add('hovered');
            updateHoverCount();
        }
    });
}

// Function to update hover count
function updateHoverCount(){
    const hoveredSquare=document.querySelectorAll('.hovered');
    const hoverCount=hoveredSquare.length;
    document.getElementById('hover-count').textContent=`Squares Hovered: ${hoverCount}`;
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

// Reset button to clear the grid and hover count
document.getElementById('reset-btn').addEventListener('click',()=>{
    const square=document.querySelectorAll('.grid-square');
    square.forEach(square=>{
        square.style.backgroundColor='';
        square.classList.remove('hovered');
    });
    updateHoverCount();
});

// Function to add random color hover effect
document.getElementById('random-color-btn').addEventListener('click',()=>{
    const square=document.querySelectorAll('.grid-square');

    square.forEach(square =>{


        square.addEventListener('mouseover',function(){
            const randomColor=`#${Math.floor(Math.random()*16777215).toString(16)}`;
            square.style.backgroundColor=randomColor;
            square.classList.add('hovered');
            updateHoverCount();
        });

    });
    
});

document.getElementById('reset-color-btn').addEventListener('click',()=>{

    const square=document.querySelectorAll('.grid-square');

    square.forEach(square =>{
        square.addEventListener('mouseover',function(){
            square.style.backgroundColor="#333";
            addHoverEffect(square);
        });
    });

});

//function to darken the color progressively
function darkenColor(square){
    square.addEventListener('mouseover',function(){
        const currentColor=window.getComputedStyle(square).backgroundColor;

        const colorValue=currentColor
        .replace('rgb(','')
        .replace(')','')
        .split(',');

    let r=parseInt(colorValue[0]);
    let g=parseInt(colorValue[1]);
    let b=parseInt(colorValue[2]);

    r=Math.max(0,r-(r*0.1));
    g=Math.max(0,g-(g*0.1));
    b=Math.max(0,b-(b*0.1));

    square.style.backgroundColor=`rgb(${r},${g},${b})`;

    if(!square.classList.contains('hovered')){
        square.classList.add('hovered');
        updateHoverCount();
    }
    });
}
document.getElementById('darker-btn').addEventListener('click',()=>{
    const square=document.querySelectorAll('.grid-square');

    square.forEach(square =>{
        darkenColor(square);
    });
});
document.getElementById("remove-border-btn").addEventListener('click',()=>{
    const gridContainer=document.getElementById('grid-container');
    gridContainer.style.border=gridContainer.style.border?'':none;
;});


let hoverCount=0;
createGrid(16);