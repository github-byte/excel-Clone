let plus=document.querySelector('.add-sheets')
let sheet=document.querySelector('.sheet-line');
let sid=0;

plus.addEventListener('click',handleAddSheet);
sheet.addEventListener('click',handleSwitch)


function handleAddSheet(){
    document.querySelector('.active-filter').classList.remove('active-filter');
    sid++;
    let newDiv = document.createElement('div');
    newDiv.classList.add('sheet');
    newDiv.classList.add('active-filter')
    newDiv.setAttribute("sid",sid)
    newDiv.textContent=`Sheet  ${sid+1}`
    sheet.append(newDiv)
   
    initdb();
 
    initUI();
    setMenu()
}


function handleSwitch(e) {
    let sheetClicked=e.target;
    if(sheetClicked.classList.contains('active-filter')){
        return;
    }
    document.querySelector('.active-filter').classList.remove('active-filter')
    sheetClicked.classList.add('active-filter')

    //get sid 
    //point db to sheetsdb[sid]

    //db updated
    db=sheetsdb[sheetClicked.getAttribute('sid')]
   //display
   setUI(); 

}


function initUI(){
    for(let i=0;i<allCells.length;i++){
        allCells[i].textContent="";
        allCells[i].style=""
    }
}

function initMenu(){
    bold.classList.remove('active-menu')
    italic.classList.remove('active-menu')
    underline.classList.remove('active-menu')
    leftAlign.classList.remove('active-menu')
    centerAlign.classList.remove('active-menu')
    rightAlign.classList.remove('active-menu')
}

function setUI() {
   for(let i=0;i<allCells.length;i++){
       let r=allCells[i].getAttribute('rowid');
       let c=allCells[i].getAttribute('colid');
       let cellObject = db[r][c];
       allCells[i].textContent = cellObject.value;
       allCells[i].style.fontWeight = cellObject.fontstyle.bold ? "bold" : "normal";
       allCells[i].style.fontStyle = cellObject.fontstyle.italic ? "italic":"normal"; 
       allCells[i].style.textDecoration = cellObject.fontstyle.textDecoration ? "underline":"none";
       allCells[i].style.textAlign = cellObject.textAlign;

   }
}

// function setMenu(){
//     console.log("nsbsbsbs");
//     for(let i=0;i<allCells.length;i++){
//         let r=allCells[i].getAttribute('rowid');
//         let c=allCells[i].getAttribute('colid');
//         console.log(allCells[i]+"db value"+db[r][c].textAlign);
//         console.log(allCells[i]+"db value"+db[r][c].bold);
//         console.log(allCells[i]+"db value"+db[r][c].italic);
//         allCells[i].style.textAlign=db[r][c].textAlign;
//         allCells[i].style.fontWeight=db[r][c].fontstyle.bold?'bold':'normal';
//         allCells[i].style.fontStyle=db[r][c].fontsyle.italic?'italic':'normal';
//         allCells[i].style.textDecoration=db[r][c].fontsyle.underline?'underline':""
//     }


// }