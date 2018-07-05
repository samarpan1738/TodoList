var addbtn=document.getElementsByClassName('btn')[0];
var list=document.getElementById("list");
//Adding new list item
addbtn.onclick=function ()
{
var todo=document.getElementById("todo");
var newli=document.createElement("li");
      
    if(todo.value==="")
        ;
    else
    {
        //Adding list item text
        newli.innerText=todo.value;
        //Creating buttons
        var rembtn=document.createElement("button");
        var upbtn=document.createElement("button");
        var dwnbtn=document.createElement("button");
      //adding buttons
        upbtn.innerHTML='<i class="fa fa-arrow-up"></i>';
        dwnbtn.innerHTML='<i class="fa fa-arrow-down"></i>';
        rembtn.innerHTML='<i class="fa fa-window-close"></i>';
        //Adding class name
        upbtn.className="edit";
        dwnbtn.className="edit";
        rembtn.className="edit";
      //Appending buttons
        newli.appendChild(upbtn);
        newli.appendChild(dwnbtn);
        newli.appendChild(rembtn);
        //Appending <li>
        list.appendChild(newli);
        //Clearing input box
        todo.value="";
        //Removing <li>
        rembtn.onclick=function()
        {
          list.removeChild(newli);
        }
        //move UP
        upbtn.onclick=function(e)
        {
          list.insertBefore(e.target.parentElement,e.target.parentElement.previousElementSibling);
        }
        //move DOWN
        dwnbtn.onclick=function(e)
        {
          list.insertBefore(e.target.parentElement.nextElementSibling,e.target.parentElement);
        }
      }
    
}