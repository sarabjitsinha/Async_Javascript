

document.getElementById("promisebutton").addEventListener("click",function(){
   promise();
})

function promise() {
   var mydate= Date.now();
   var secdate;
   var diffdate;
   document.querySelector('div').insertAdjacentText("afterbegin","Loading...")
   new Promise((resolve, reject) => {
      const apilink="https://dummyjson.com/posts";
      fetch(apilink)
      .then((response)=>{
         if(response.ok){
               secdate=Date.now();
               diffdate=secdate-mydate;
               if(diffdate>5000)
               {
              document.querySelector('div').insertAdjacentText("afterbegin","Failed loading as it is taking time") 
               }
               else{
               return response.json();
               }
                     }
         else{
             throw new Error("Unable to fetch api");
         }
      })
      .then(data=>{
       const arrayposts=data.posts;
            for (item of arrayposts){
                  const postTitle=`<li>${item.title} </li>`;
                  document.querySelector('div').insertAdjacentHTML("afterbegin",postTitle);
                                     }
         alert("Promise Fullfilled")
      })
      .catch(err=>{console.error(err); alert("Promise has been rejected")})
   })
}

