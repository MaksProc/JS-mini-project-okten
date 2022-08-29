fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        let container = document.createElement('div')
        document.body.appendChild(container)
        container.classList.add('container')

        for (const user of users) {
            let div = document.createElement('div')
            div.classList.add('card')
            container.appendChild(div)

            let name = document.createElement('p')
            name.innerText = `ID:${user.id} \n ${user.name}`
            name.classList.add('name')
            div.appendChild(name)

            let link = document.createElement('a')
            link.classList.add('link')
            div.appendChild(link)
            link.text = 'Details'
            link.href = `../user-details/user-details.html?user=${user.id}`
        }
    })