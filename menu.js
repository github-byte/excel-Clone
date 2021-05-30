let bold=document.querySelector('.bold');
let italic=document.querySelector('.italic');
let underline=document.querySelector('.underline');
let leftAlign=document.querySelector('.left-align');
let rightAlign=document.querySelector('.right-align');
let centerAlign=document.querySelector('.center-align');
let fontFam=document.querySelector('#font-family')
let fontSize=document.querySelector('#font-size')
let fontColor=document.querySelector('#fontColor')
let fontBgColor=document.querySelector('#bgcolor')


bold.addEventListener('click',function(){
    cellObject=db[rowId][colId];
    if(!cellObject.fontstyle.bold){

        lastSelectedCell.style.fontWeight='bold'
        bold.classList.add('active-menu');
    }
    else{
        lastSelectedCell.style.fontWeight='normal'
        bold.classList.remove('active-menu');
    }

    cellObject.fontstyle.bold=!cellObject.fontstyle.bold

})

italic.addEventListener('click',function(){
    cellObject=db[rowId][colId];
    if(!cellObject.fontstyle.italic){

        lastSelectedCell.style.fontStyle='italic'
        italic.classList.add('active-menu');
    }
    else{
        lastSelectedCell.style.fontStyle=''
       italic.classList.remove('active-menu');
    }

    cellObject.fontstyle.italic=!cellObject.fontstyle.italic
})
underline.addEventListener('click',function(){
    cellObject=db[rowId][colId];
    if(!cellObject.fontstyle.underline){
        lastSelectedCell.style.textDecoration='underline'
        underline.classList.add('active-menu');
    }
    else{
        lastSelectedCell.style.textDecoration='none'
        underline.classList.remove('active-menu');
    }

    cellObject.fontstyle.underline=!cellObject.fontstyle.underline
})


leftAlign.addEventListener('click',function(){
    cellObject=db[rowId][colId];
    if(cellObject.textAlign=='left'){
        return;
    }
    cellObject.textAlign='left';
    lastSelectedCell.style.textAlign='left';
    setMenu();
})


centerAlign.addEventListener('click',function(){
    cellObject=db[rowId][colId];
    if(cellObject.textAlign=='center'){
        return;
    }
    cellObject.textAlign='center';
    lastSelectedCell.style.textAlign='center'
    setMenu()
})

rightAlign.addEventListener('click',function(){
    cellObject=db[rowId][colId];
    if(cellObject.textAlign=='right'){
        return;
    }
    cellObject.textAlign='right';
    lastSelectedCell.style.textAlign='right';
    setMenu();
})

function setMenu(){
    let cellObject=db[rowId][colId]
    cellObject.fontstyle.bold? bold.classList.add('active-menu'):bold.classList.remove('active-menu')
    cellObject.fontstyle.italic? italic.classList.add('active-menu'):italic.classList.remove('active-menu')
    cellObject.fontstyle.underline? underline.classList.add('active-menu'):underline.classList.remove('active-menu')

    //fontalignment
    if(document.querySelector('.font-alignment .active-menu')){
        document.querySelector('.font-alignment .active-menu').classList.remove('active-menu')
    }
    if(cellObject.textAlign=='left'){
        document.querySelector('.left-align').classList.add('active-menu');
    }
    else if(cellObject.textAlign=='center'){
        document.querySelector('.center-align').classList.add('active-menu');
    }
    else{
        document.querySelector('.right-align').classList.add('active-menu');
    }
    
}

function setMenu(){
    let cellObject=db[rowId][colId]
    cellObject.fontstyle.bold? bold.classList.add('active-menu'):bold.classList.remove('active-menu')
    cellObject.fontstyle.italic? italic.classList.add('active-menu'):italic.classList.remove('active-menu')
    cellObject.fontstyle.underline? underline.classList.add('active-menu'):underline.classList.remove('active-menu')

    //fontalignment
    if(document.querySelector('.font-alignment .active-menu')){
        document.querySelector('.font-alignment .active-menu').classList.remove('active-menu')
    }
    if(cellObject.textAlign=='left'){
        document.querySelector('.left-align').classList.add('active-menu');
    }
    else if(cellObject.textAlign=='center'){
        document.querySelector('.center-align').classList.add('active-menu');
    }
    else{
        document.querySelector('.right-align').classList.add('active-menu');
    }
    
}




fontFam.addEventListener('change',function(){
    if(fontFam.value=='Ariel'){
        lastSelectedCell.style.fontFamily='Arial, Helvetica, sans-serif'
    }
    if(fontFam.value=='Lucida Sans'){
        lastSelectedCell.style.fontFamily='Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode'
    }
    if(fontFam.value=='Times New Roman'){
        lastSelectedCell.style.fontFamily='Times New Roman, Times, serif'
    }

   
})

fontSize.addEventListener('change',function(){
    lastSelectedCell.style.fontSize=`${fontSize.value}`+"px";
})

fontColor.addEventListener('change',function(){
    lastSelectedCell.style.color=`${fontColor.value}`;
})

fontBgColor.addEventListener('change',function(){
    lastSelectedCell.style.backgroundColor=`${fontBgColor.value}`;
})