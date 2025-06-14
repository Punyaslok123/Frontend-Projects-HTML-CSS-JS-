const inputbox=document.getElementById('input-box');
const listcontainer=document.getElementById('listcontainer');

const btn=document.getElementById('btn');


// now when click the button means a new task is created ,so add this task in the web page 

function addText(){
      if(inputbox.value===''){
        alert("you must write something");
      }
      else{
         let li=document.createElement('li');
         li.innerHTML=inputbox.value;
         listcontainer.appendChild(li);

         // need to add one cross icon at the end of that element 

         let span=document.createElement("span");
         span.innerHTML="\u00d7";
         li.appendChild(span);
      }
      // after adding the text in the input field we need to remove the text form the input field

      inputbox.value="";

      // call

      saveItems();
}

btn.addEventListener('click',()=>{
      addText();
})


// step-2 when click any list item we need to toggle the item means if completed then show it not completed and vice versa  
// but if click the span (cross ) then delete that list item 

listcontainer.addEventListener('click',(e)=>{
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            saveItems();
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveItems();
        }
},false)


// step-3 store all the information of listcontainer in the browser so that whenever we open our tudo list it will display

function saveItems(){
    localStorage.setItem("data",listcontainer.innerHTML);
    // listcontainer items will save in browser as a data name 
    // when ever we add,update,remove list items call this function
}

// now need to display all the content that stored in browser in the name of data

function showTask(){
       listcontainer.innerHTML=localStorage.getItem("data");
}

showTask();



