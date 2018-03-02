
function Cell(cols, rows){
    
    this.cols = cols;
    this.rows = rows;
        
    this.newTable();
    this.addInput(this.rows);

}

Cell.prototype.newTable = function(){

    bdy = document.body;
    tab = document.createElement('table');

    for(i=0;i<this.cols;i++){
        tab.appendChild(document.createElement('tr'));
    }    

    bdy.appendChild(tab);    
        
    collist = document.querySelectorAll('tr');  
    
    //create td's

    for(i=0;i<collist.length;i++){

        // set default value of the the first tr line
        if(i==0){

            for(z=0;z<this.rows;z++){

                if(z==0){
                    td = document.createElement('td')
                    collist[i].appendChild(td);                
                    }
                else{

                    res = String.fromCharCode(64+z);
                    td = document.createElement('td')
                    td.style.color = 'rgba(206, 232, 255, 0.500)';
                    td.innerHTML = res;
                    collist[i].appendChild(td);                
                }                
            }
        }

        // set (empty) td's of the rest of the tr's lines
        
        else{
            for(z=0;z<this.rows;z++){
                td = document.createElement('td')
                collist[i].appendChild(td); 
                }                   
            }
        }
    
    // set default value of the first cell fo the first row

    line_num = document.querySelectorAll('tr');
    for(i=0;i<line_num.length;i++){
        temp = line_num[i].firstChild;
        temp.style.color = 'rgba(206, 232, 255, 0.500)';
        temp.style.width = '30px';
        temp.innerHTML = i;
    }
}

Cell.prototype.addInput = function(rows){

    // input function : click on a cell of your 
    // classeur and add type something.

    // add input on each td of the table

    setInterval(function(){

        cells = document.querySelectorAll('td');
        
        // for each td, on click, add an input quote

        for(i=0; i<cells.length;i++){

            // if statement says : ignore first cell of each line 
            // AND each cells of the first line 
            // (because they are filled with default value)

            if(i%rows!=0 && i>rows){

                cells[i].onclick = function(){

                    // if there is already an input highlighted on the 
                    // classeur cancel the input and add a new input 
                    // on the current td selected

                    if(document.querySelector('input')){
                        
                        // if there is a value inside the clicked cell
                        // keep the value in the new input

                        if(this.innerHTML){

                            lastinp = document.querySelector('input');
                            // get input value
                            lastinp_value = lastinp.value;
                            // get td node
                            new_value = lastinp.parentNode;
                            // remove input                
                            lastinp.parentNode.removeChild(lastinp);
                            // set td value with the input value (lastinp_value)    
                            new_value.innerHTML = lastinp_value;

                            inp = document.createElement('input');
                            // store td value in the input value field
                            // the iput shows contains the last value and can be edited
                            inp.setAttribute('value', this.innerHTML);
                            // clear td value (inner HTML)
                            this.innerHTML ='';
                            // append new input
                            this.appendChild(inp); 
                            inp.focus();
                            // set cursos position at the end of the input value
                            inp.setSelectionRange(inp.value.length,inp.value.length);                         
                            
                        }
                        else{
                            
                            lastinp = document.querySelector('input');
                            lastinp_value = lastinp.value;
                            new_value = lastinp.parentNode;                
                            lastinp.parentNode.removeChild(lastinp);
    
                            new_value.innerHTML = lastinp_value;
                            inp = document.createElement('input');
                            this.appendChild(inp); 
                            inp.focus();
                            inp.selectionEnd;                         
                        }
                        
                    }
                    
                    // if there is no field highlighted, add an input
                    // on the selected field.

                    else{
                        inp = document.createElement('input');
                        this.appendChild(inp);
                        inp.focus(); 
                    }
                }    
            }
        }
    }, 200)
}

new Cell(100,10);
