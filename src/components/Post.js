import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Post = ({onePost, closePost}) => {
    let date = onePost.created_at.split(' ');
      return (
        <div>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>{onePost.title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>{onePost.body}</p>
                <p className="text-muted">Created at: {date[0]}</p>
                <h6>Comments:</h6>
                  {onePost.comments.map(comment => {
                      let date = comment.created_at.split('T');
                      return (
                          <div key={comment.id}>
                            <p>{comment.body}</p>
                            <p className="text-muted">Commented at: {date[0]}</p>
                          </div>
                      )
                  })}
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick = {closePost}>Close</Button>
              </Modal.Footer>
          </Modal.Dialog>
            
        </div>
        
    )
}

export default Post
