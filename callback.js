
const clbkbt=document.getElementById("callbackbutton")
clbkbt.addEventListener("click",function(){
            
setTimeout(() => {
    const divcb=document.getElementById("divcallback");
    divcb.innerHTML="Callback executed after 5 seconds";
         fetch("https://dummyjson.com/posts").then(response=> {return response.json()})
        .then(data=>{
            setTimeout(() => {
                arr=data.posts;
                arr.forEach((element) => {
                const title1=`<li>${element.title} </li>`;
                document.querySelector('div').insertAdjacentHTML('beforeend',title1);
        }) }, 3000);
    })    
} , 5000);
})


