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
