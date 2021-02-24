import React from 'react'

const Posts = ({ title, body, comments, created_at, user, openPost}) => {

    return (
        <div className='row m-3'>
            <div className = 'col-lg-8 col-md-10 mx-auto border border-4 p-2 bg-white' >
                <div className="">
                    <h3>{title}</h3>
                    <p>{body}</p>

                    <button className="btn btn-outline-secondary btn-sm mb-2" onClick={openPost} >Read more</button>
                    <p className="text-muted mb-0 " > Created At: {created_at}</p>
                    <p className="text-muted ">Created By {user.name}</p>
                    <hr/>
                    <p className="mb-0">Comments:</p>
                    
                    {comments !== [] ? comments.map(comment =>{
                            let date = comment.created_at.split('T')
                        return(
                            <div>
                                <p key = {comment.id}> {comment.body} </p>
                                <p className="text-muted"> Created At: {date[0]}</p>
                            </div>
                            )}) : ''}  
                </div>
            </div>
        </div>
    )
}

export default Posts
