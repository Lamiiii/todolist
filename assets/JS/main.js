let form=document.querySelector("form")
let button=document.querySelector("#btn");
let input=document.querySelector("#input");
button.addEventListener("click",function(event){
event.preventDefault();
if(input.value==="Learn Javascript"){
    const newDiv=document.createElement("div");
    newDiv.textContent="Learn Javascript"
    newDiv.style.margin="20px"
    newDiv.style.backgroundColor="#D3D3D3"
    newDiv.style.padding="10px"
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.margin="-43px";
    checkbox.style.marginRight="100px";
     const newButton=document.createElement("button");
    newButton.textContent="Delete"
    newButton.style.marginLeft="300px"
    newButton.style.marginTop="26px"
    newButton.style.width="60px";
    const newButtons=document.createElement("button");
    newButtons.textContent="Edit"
    newButtons.style.marginLeft="450px"
     newButtons.style.marginTop="-23px"
    newButtons.style.width="60px";
    

    form.append(newDiv,checkbox,newButton,newButtons);



    input.value = '';
}


if(input.value==="Build Javascript Projects"){
    const newDiv=document.createElement("div");
    newDiv.textContent="Build Javascript Projects"
    newDiv.style.margin="20px"
    newDiv.style.backgroundColor="#D3D3D3"
    newDiv.style.padding="10px"
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.margin="-43px";
    checkbox.style.marginRight="100px";
     const newButton=document.createElement("button");
    newButton.textContent="Delete"
    newButton.style.marginLeft="300px"
    newButton.style.marginTop="26px"
    newButton.style.width="60px";
    const newButtons=document.createElement("button");
    newButtons.textContent="Edit"
    newButtons.style.marginLeft="450px"
     newButtons.style.marginTop="-23px"
    newButtons.style.width="60px";
    

    form.append(newDiv,checkbox,newButton,newButtons);



    input.value = '';
}


if(input.value==="Create a Javascript To-Do List"){
    const newDiv=document.createElement("div");
    newDiv.textContent="Create a Javascript To-Do List"
    newDiv.style.margin="20px"
    newDiv.style.backgroundColor="#D3D3D3"
    newDiv.style.padding="10px"
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.margin="-43px";
    checkbox.style.marginRight="100px";
     const newButton=document.createElement("button");
    newButton.textContent="Delete"
    newButton.style.marginLeft="300px"
    newButton.style.marginTop="26px"
    newButton.style.width="60px";
    const newButtons=document.createElement("button");
    newButtons.textContent="Edit"
    newButtons.style.marginLeft="450px"
     newButtons.style.marginTop="-23px"
    newButtons.style.width="60px";
    

    form.append(newDiv,checkbox,newButton,newButtons);



    input.value = '';
}
   
}
)



