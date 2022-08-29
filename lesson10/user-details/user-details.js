const currentUser = (new URLSearchParams(window.location.search)).get('user')
// console.log(currentUser)

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(users => {
        let userInfo = document.createElement('div')
        document.body.appendChild(userInfo)
        userInfo.classList.add('userInfo')

        let list = document.createElement('ul')
        userInfo.appendChild(list)

        for (let item in users[currentUser-1]) {
            let li = document.createElement('li')
            let info = users[currentUser-1][item];
            li.textContent = (item + ': ' + parseObj(info))
            list.appendChild(li)
        }}
    )

function parseObj (obj, s) {
    s = s || ''
    if (typeof obj === "object") {
        for (let prop in obj) {
            s += parseObj(obj[prop], s) + ' ; '
        }
        return s
    } else {
        return obj
    }}



fetch(`https://jsonplaceholder.typicode.com/users/${currentUser}/posts`)
    .then((response) => response.json())
    .then(posts => {
        let titles = document.createElement('div')
        document.body.appendChild(titles)
        titles.classList.add('titles')

        let expand = document.createElement('button')
        expand.innerText='Expand'
        expand.classList.add('expand')

        let cond = false
        titles.appendChild(expand)

        expand.onclick = function () {

            if (!cond) {
                let headers = document.createElement('div')
                titles.appendChild(headers)
                headers.classList.add('headers')
                for (let item in posts) {
                    let post = document.createElement('div')
                    post.classList.add('post')
                    post.textContent = (posts[item]["title"])
                    headers.appendChild(post)
                    let detailsBtn = document.createElement('button')
                    detailsBtn.innerText = "Details"
                    detailsBtn.classList.add('detailsBtn')
                    detailsBtn.onclick = function () {
                        window.location=`../post-details/post-details.html?user=${currentUser}&post=${item}`
                    }
                    post.appendChild(detailsBtn)
                }
                cond = true
                expand.innerText = 'Collapse'
            } else if (cond) {
                let headers = titles.querySelector('div')
                titles.removeChild(headers)
                cond = false
                expand.innerText = 'Expand'
            }
        }

    })





















