const text=document.querySelector(".input");
const addButton=document.querySelector(".addButton");
const container=document.querySelector(".container");
addButton.addEventListener('click',()=>{
    const adddiv = document.createElement("div");
    const para = document.createElement("p");
        const edit = document.createElement("button");
        const editpara = document.createElement("p");
        editpara.innerText="EDIT";
        edit.classList.add("editButton");
        edit.appendChild(editpara);

        const deletebut = document.createElement("button");
        const deletepara = document.createElement("p");
        deletepara.innerText="DELETE";
        deletebut.classList.add("deleteButton");
        deletebut.appendChild(deletepara);


    para.innerText =text.value;
    para.classList.add("item_input");
    adddiv.appendChild(para);
    adddiv.appendChild(edit);
    adddiv.appendChild(deletebut);
    adddiv.classList.add("item");
    container.appendChild(adddiv);
    console.log("hello");
    text.innerText="";
});
const editButton=document.querySelector(".editButton");
const deleteButton=document.querySelector(".deleteButton");