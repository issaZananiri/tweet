const Tweeter = function()
{
    const posts = 
        [
            {
                text: "First post!",
                id: "p1",
                comments: [
                    { id: "c1", text: "First comment on first post!" },
                    { id: "c2", text: "Second comment on first post!!" },
                    { id: "c3", text: "Third comment on first post!!!" }
                ]
            },
            {
                text: "Aw man, I wanted to be first",
                id: "p2",
                comments: [
                    { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                    { id: "c5", text: "Yeah, believe in yourself!" },
                    { id: "c6", text: "Haha second place what a joke." }
                ]
            }
        ]

        let postIdCounter = 2
        let commentIdCounter = 6

        const getPosts = () =>
        {
            
            return posts}


        const addPost = function(text){
            postIdCounter++
            const post = {
                id: "p" + postIdCounter,
                text,
                comments: []
            }
            posts.push(post)

        }

        const addComment = function(text,postID){
            commentIdCounter++
            const comment = {
                id: "c" + commentIdCounter,
                text
            }
            
            for(let post of posts)
            {
                if(post.id == postID)
                {
                    post.comments.push(comment)
                }
            }

        }

        const removePost = function(postID)
        {
            
            for(let i= 0;i<posts.length;i++)
            {
                console.log(i)
                if(posts[i].id == postID)
                {
                    posts.splice(i,1)
                }
            }
        }

        const removeComment = function(postID,commentID)
        {
            for(let post of posts)
            {
                if(post.id == postID)
                {
                    for(let i = 0;i<post.comments.length;i++)
                    {
                        console.log(i)
                        if(post.comments[i].id == commentID)
                        {
                            post.comments.splice(i,1)
                        }
                    }
                }
            }
        }
        return{
            getPosts,
            addPost,
            removePost,
            addComment,
            removeComment
        }
}

