

function solvedFormula(formula,lc){

    let formulaArr=formula.split(" ");

    for(let i=0;i<formulaArr.length;i++){
        let first = formulaArr[i];
        //["(","A1","+","A2",")"]
        if(first[0]>='A' && first[0]<='Z'){
            let {rowId,colId}=getRowIdColIdFromAddress(first);

            let cellObject=db[rowId][colId];

            if(lc){
                cellObject.children.push(lc);
                cellObject.parents.push(first);
            }
            //replace a1 with its value
            let value=cellObject.value;
            formula=formula.replace(first,value)
            //console.log(rowId+"  "+colId)
        }
    }

        let value=eval(formula);
        return value;
}

function updateChildren(cellOb){
    //cellObject.children
    //use for loop to go over elements
    for(let i=0;i<cellOb.children.length;i++){
        let child=cellOb.children[i];
        let {rowId,colId}=getRowIdColIdFromAddress(child);
        let cellObject=db[rowId][colId];
        let val=solvedFormula(cellObject.formula)
        cellObject.value=val;
        
        //update ui
        document.querySelector(`div[rowId="${rowId}"][colId="${colId}"]`).textContent=val;
        updateChildren(cellObject);
    }
    ///for each child get row and column id
    //convert it into db element
    //get formuls of that db element
    //use solve formula 
}

function getRowIdColIdFromAddress(formula){
    let colId=formula.charCodeAt(0)-65;

    let rowId=Number(formula.substring(1))-1;
    return {rowId,colId};

}


function deleteChild(cellObj) {
    cellObj.formula="";
    for(let i=0;i<cellObj.parents;i++){
        //delete parent 
        let cell=cellObj.parents[i]
        let {row,col}=getRowIdColIdFromAddress(cell);
        let parentCellObj=db[row][col];
        let filtered=parentCellObj.children.filter(child=>{return child!=cellObj.name});
        parentCellObj.children=filtered;

    }
}

