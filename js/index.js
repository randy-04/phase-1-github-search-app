
const form = document.querySelector('#github-form');

// form submit event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // capturing search input
    let search = document.getElementById('search').value;
    
    
    
    // fetching the github url based on the search input value
    fetch(`https://api.github.com/search/users?q=${search}`, {
        method: 'GET',
        headers: {
                   'Content-Type': 'application/json',
                   'Accept': 'application/vnd.github.v3+json'
                 },
    })
    .then(response => response.json())
    .then(data => { 
        console.log(data);
        

        // using .forEach() to create a card for each user as a list item
        data.items.forEach(user => {
            let userlogin = document.createElement('h3');
            let avatar = document.createElement('div')
            let userlink = document.createElement('p')
            let repobtn = document.createElement('button')

            // appending the user information to the DOM
            
            avatar.innerHTML = `<img class="img-thumbnail ml-4" width="100" height="100" src="${user.avatar_url}" />`
            userlogin.innerHTML = `${user.login}`
            userlink.innerHTML = `<a target = "_blank" href ="https://github.com/${search}" <p>${user.url}</p> </a>`
            repobtn.innerHTML = "Repos"

            // the target makes the link to appear in another page. The a tag makes the url a link


            
            // adding the user card to DOM
            document.getElementById('user-list').appendChild(avatar)
            document.getElementById('user-list').appendChild(userlogin)
            document.getElementById('user-list').appendChild(userlink)
            document.getElementById('user-list').appendChild(repobtn)

            // let's add the repos per user after clicking the Repos button
            repobtn.addEventListener('click', () => {
                fetch(user.repos_url, {
                  method: 'GET',
                  header:{
                       'Content-Type': 'application/json',
                        'Accept': 'application/vnd.github.v3+json'
                        }
                        })
                          .then(res => res.json())
                              .then(data => { data.forEach(user => {
                                  let card = document.createElement('li')
                                  card.innerHTML = `
                                      <h3> ${user.name} </h3>
                                      <p> ${user.url}</p>
                                  `
                                  document.getElementById('repos-list').appendChild(card)    
                              });
                          });
                    })
        })
        


        

    })

    

    



})

