// Increment action
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// Add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    comment
  }
}

// Delete Comments
export function deleteComment(postId, index) {
  return {
    type: 'DELETE_COMMENT',
    postId,
    index
  }
}
