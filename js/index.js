// // form event listener
// // document.querySelector('#github-form').addEventListener('submit', handleSubmit);


// // // handling the submit and distinguishing which elements to capture from the json file
// // function handleSubmit(e) {
// //     e.preventDefault();
// //     let input = e.target.search.value
// //     fetchUserData()
// // }

// const input = document.querySelector('#search').value

// // fetching the user data from the github json server
// function fetchUserData() {
//     fetch(`https://api.github.com/search/users?q=${input}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/vnd.github.v3+json'
//         },
//         // body: JSON.stringify()
//     })
//     .then(res=>res.json())
//     .then(output => console.log(output))
//     // output.items.forEach(user => buildCard(user));
// }
// // fetchUserData()

// // building the card
// function buildCard(user) {
//     let card = document.createElement('li')
//     card.className = 'card'
//     card.innerHTML = `
//         <img src="${user.avatar_url}"/>
//         <div class="content">
//             <h4>${user.login}</h4>
//             <p>${user.url}</p>
//         </div>
//         `
//     // adding the user card to DOM
//     document.querySelector('#user-list').appendChild(card)
// }

const form = document.getElementById('github-form');

// form submit event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // capturing search input
    let search = document.getElementById('search').value;
    
    
    
    // fetching the github url based on the search input value
    fetch(`https://api.github.com/users/${search}`, {
        headers: {
                   'Content-Type': 'application/json',
                   'Accept': 'application/vnd.github.v3+json'
                 },
    })
    .then(response => response.json())
    .then(data => { 
        console.log(data)

        let card = document.createElement('li')
        card.className = 'card'
        card.innerHTML = `
            <img src="${data.avatar_url}"/>
            <div class="content">
                <h4>${data.login}</h4>
                <a target = "_blank" href ="https://github.com/${search}" <p>${data.url}</p> </a>
            </div>
            `
            // the target makes the link to appear in another page. The a tag makes the url a link

        
        // adding the user card to DOM
        document.querySelector('#user-list').appendChild(card)

    })

    

    



})

// list event listener
let li = document.querySelector('#user-list')
li.addEventListener('click', () => {
    let inp = document.getElementById('search').value;
        fetch(`https://api.github.com/users/${inp}/repos`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            }
            })
            .then(res => res.json())
            .then(repo => {console.log(repo)
                let repcard = document.createElement('li')
                repcard.className = 'repcard'
                repcard.innerHTML = `
                <p>${repo[1].name}</p>
                `
            // adding the repo card to DOM
            document.getElementById('repos-list').appendChild(repcard)


            })
        }

    

)