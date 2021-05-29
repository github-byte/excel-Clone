let allCells=document.querySelectorAll(".cell");
let cells=document.querySelectorAll('.cells');
let addressInput=document.querySelector('#address')
let formulaInput=document.querySelector('#formula');
let topRow=document.querySelector('.top-row')
let  leftCol= document.querySelector('.left-col')
let topLeftCell=document.querySelector('.top-left-cell')
let rowId="";
let colId="";
let address="";
let value;
let row="";
let col="";
let lastSelectedCell=""

for(let i=0;i<allCells.length;i++){
    allCells[i].addEventListener('click',function (e) {
        rowId=Number(e.target.getAttribute('rowid'))
        colId=Number(e.target.getAttribute('colid'))
        let address = String.fromCharCode(65+colId) + (rowId+1)+"";
        addressInput.value=address;
        let cellObject = db[rowId][colId];
        formulaInput.value = cellObject.formula;
    })


}    




let sheetsdb=[];
let db;
function initdb(){
    let newDB=[];
    db=[];
    for(let i=0;i<100;i++){
     let row=[];
        for(let j=0;j<26;j++){
         let address=String.fromCharCode(65+j)+(i+1)+"";
         let cellObject={
             name:address,
             value:"",
             formula:"",
             children:[],
             parents:[]
         }
         row.push(cellObject);
        }
        db.push(row);               //important otherwise it repeats values in other db's
        newDB.push(row)  
    }
    db=newDB;
    sheetsdb.push(newDB)
    console.log(sheetsdb);
   
}

initdb()


// document.querySelector('.cells').addEventListener('scroll',function(e){
//     let hei=e.offsetY;
//     let wide=e.offsetX;
//     topRow.style.top=hei+"px";
//     leftCol.style.left=wide+"px"
//     console.log("pp");
// })



formulaInput.addEventListener('blur',function(e){
let formula=formulaInput.value;

if(formula && lastSelectedCell){
    let r= Number(lastSelectedCell.getAttribute('rowId'))+1
    let lc=String.fromCharCode(Number(lastSelectedCell.getAttribute('colId'))+65) +r
   let solvedValue=solvedFormula(formula,lc);
   let cellObject=db[rowId][colId];

   if(cellObject.formula != formula){    
    if(cellObject.formula){
        deleteChild(cellObject);
    }
    }

    
   cellObject.value=solvedValue;
   cellObject.formula=formula;
   lastSelectedCell.textContent=solvedValue;
}



})










for(let i=0;i<allCells.length;i++){

    allCells[i].addEventListener('blur',function(e){
        let currentElement=e.target;
        lastSelectedCell=currentElement;
        value=e.target.textContent;
        let cellObject=db[rowId][colId];
         if(value!=cellObject.value){
            cellObject.value=value;
           deleteChild(cellObject)
            updateChildren(cellObject);
            //console.log(db);
        }
    })
    
}

