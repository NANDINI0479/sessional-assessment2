document.querySelector('#button').addEventListener('click', () => {
    // API call
    const xhr = new XMLHttpRequest()
    

    let url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
    
    xhr.open('GET', url)

    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)
            
            let output = ''
            for(let i=0; i < 6; i++) {
                output += `
                
                <div>
                    
                    <p>${response[i].title}</p>
                    
                </div>
            `
            }
console.log(output)
            document.querySelector('#text').innerHTML = output
        }
    }

    xhr.send()
})
// var btn=document.getElementById("btn").addEventListener("click",getPost);
// var con=0;
// var div=document.getElementById("cardDiv")

// function getPost(){
//     fetch('https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09')
//     .then((res)=>{
//         return res.json();
//     })
//     .then((post)=>{
//         for(let index = 0;index<8;index++){
//             div.innerHTML+=`
//             <div class=card col-3 m-1 mx-auto">
//             <img class=card-img-top" src=${post[con].titleUrl}">
//             <div class=card-body">
//             <h5 class="card-title">${post[con].id}</h5>
//             <p class="card-text">${post[con].body}</p>
//             </div>
//             </div>`

//             con=con+1;
//         }
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
// }
