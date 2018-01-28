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
    author,
    comment
  }
}

// Delete Comments
export function deleteComment(postId, i) {
  return {
    type: 'DELETE_COMMENT',
    postId,
    i
  }
}
