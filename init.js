let cellsContent = document.querySelector(".cells-content");


// top left cell

(function(){
    let cellsContentHtml = `<div class="top-left-cell"></div>`;

    // top row
    cellsContentHtml += `<div class="top-row">`
    for(let i=0 ; i<26 ; i++){
        // i=0 => A
        // 65+i
        cellsContentHtml += `<div class="top-row-cell">${String.fromCharCode(65+i)}</div>`
    }
    cellsContentHtml += `</div>`
    

    
    // left col
    cellsContentHtml += `<div class="left-col">`
    for(let i=0 ; i<100 ; i++){
    
        cellsContentHtml += `<div class="left-col-cell"  leftId="${i}">${i+1}</div>`
    }
    cellsContentHtml += `</div>`
    
    
    // cells
    cellsContentHtml += `<div class="cells">`
    for(let i=0 ; i<100 ; i++){
        cellsContentHtml += `<div class="row">`;
        for(let j=0 ; j<26 ; j++){
            cellsContentHtml += `<div class="cell" rowid="${i}" colid="${j}" contentEditable="true" ></div>`
        }
        cellsContentHtml+= `</div>`;
    }
    cellsContentHtml += `</div>`
    
    cellsContent.innerHTML = cellsContentHtml;
 
})()





