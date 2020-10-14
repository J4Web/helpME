let idk= document.getElementById("userinput");
let idk1=document.getElementById("enter");
let ui= document.querySelector("ul");

idk1.addEventListener('click', function()
{

    if(idk.value.length > 0)
    {

    
    let list1= document.createElement("li");
    list1.classList='list';
    list1.appendChild(document.createTextNode(idk.value));
    ui.appendChild(list1);
    idk.value="";
        
    }

});


idk.addEventListener('keypress',function(event)
{

    if(idk.value.length>0 && event.keyCode===13)
    {
        let list1 = document.createElement("li");
        list1.classList='list';
        list1.appendChild(document.createTextNode(idk.value));
        ui.appendChild(list1);
        idk.value = "";
    }

    });


