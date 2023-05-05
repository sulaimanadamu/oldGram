const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let newPost = 1;
function addFeed(){
    while (newPost < posts.length){
    document.querySelector(".app-body").innerHTML += 
    `
    <div class="card">
            <div class="above-content space-around">
                <div class="friend-info">
                    <img src="${posts[newPost].avatar}" alt="${posts[newPost].name}-pics" class="profile-pics round-img profile-Infoposition">
                    <div class="profile-details">
                        <h1>${posts[newPost].name}</h1>
                        <p>${posts[newPost].location}</p>
                    </div>
                </div>
            </div>
            <div class="post">
                <img src="${posts[newPost].post}" alt="${posts[newPost].name}-post" class="post">
            </div>
            <div class="below-content">
                <div class="emojis">
                    <img src="./images/icon-heart.png" alt="heart Post" class="icons heart">
                    <img src="./images/icon-comment.png" alt="comment on post" class="icons comment">
                    <img src="./images/icon-dm.png" alt="send message" class="icons message">
                </div>
                <div class="post-reaction">
                    <p class="likes reactions"><span class="number-of-likes">${posts[newPost].likes}</span> likes</p>
                    <p class="caption reactions"><span class="lastCommenter">${posts[newPost].username}</span> ${posts[newPost].comment}</p>
                </div>
            </div>
    </div>
    `
    newPost += 1
    }
}
newPost = 1

window.addEventListener("scroll", addFeed)
