const currentUser = (new URLSearchParams(window.location.search)).get('user')
const currentPost = (new URLSearchParams(window.location.search).get('post'))


fetch(`https://jsonplaceholder.typicode.com/users/${currentUser}/posts`)
    .then((response) => response.json())
    .then(posts =>{
        let postDetails = document.createElement('div')
        postDetails.classList.add('post')
        document.body.appendChild(postDetails)

        for (let prop in posts[currentPost]) {
            let item = document.createElement('p')
            item.textContent = (prop + ': ' + posts[currentPost][prop])
            item.classList.add('postDetails')
            postDetails.appendChild(item)
        }
    })

fetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}/comments`)
    .then((response) => response.json())
    .then(comments =>{
        let commentSection = document.createElement('div')
        commentSection.classList.add('commentSection')
        document.body.appendChild(commentSection)

        for (let id in comments) {
            let comment = document.createElement('div')
            comment.classList.add('comment')
            commentSection.appendChild(comment)

            // for (let prop in comments[id]) {
            //     let item = document.createElement('p')
            //     item.textContent = (prop + ': ' + comments[id][prop])
            //     comment.appendChild(item)
            // }
            let name = document.createElement('p')
            name.textContent = ("Name: " + comments[id]["name"])
            comment.appendChild(name)

            let email = document.createElement('p')
            email.textContent = ("E-mail: " + comments[id]["email"])
            comment.appendChild(email)

            let body = document.createElement('p')
            body.textContent = (comments[id]["body"])
            comment.appendChild(body)
        }
    })
