const Renderer = function()
{
    const renderPosts = function(posts)
    {
        $('#posts').remove()
        for(let post of posts)
        {
            const ay = $(`<div class=post data-id=${post.id}>Post:${post.text}</div>`)
            console.log(ay.text())
            $('#postA').append(ay)
            $('#postA').append($('<br></br>'))
            for(let comment of post.comments)
            {
            const cm = $(`<div class=comments data-id=${comment.id}>Comment:${comment.text}</div>`)
                $('#postA').append(cm)
            }
            $('#postA').append($('<br></br>'))

        }
    }

    return{
        renderPosts
    }
}