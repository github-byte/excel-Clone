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
   console.log(db
    
)
   //display
   setUI(); 

}


function initUI(){
    for(let i=0;i<allCells.length;i++){
        allCells[i].textContent="";
    }
}


function setUI() {
   for(let i=0;i<allCells.length;i++){
       let r=allCells[i].getAttribute('rowid');
       let c=allCells[i].getAttribute('colid');
       allCells[i].textContent=db[r][c].value;

   }
}