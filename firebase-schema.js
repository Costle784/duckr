/users
  uid
    name
    uid
    avatar

/toots
  tootId
    avatar
    tootId
    name
    text
    timestamp
    uid (of toot author)

/likeCount
  tootId
    0

/usersToots
  uid
    tootId
      avatar
      tootId
      name
      text
      timestamp
      uid (of toot author)

/replies
  tootId
    replyId
      name
      comment
      uid
      timestamp
      avatar

/usersLikes
  uid
    tootId: true
