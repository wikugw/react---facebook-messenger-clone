import { Card, CardContent, Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import "./Message.css"

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message_card ${isUser && 'message_user'}`}>
      <Card className={isUser ? "message_user_card" : "message_guest_card"}>
        <CardContent>
          <Typography variant="h5" component="h2" >{!isUser && `${message.username || 'Unknown User'}  : `} {message.message}</Typography>
        </CardContent>
      </Card>
    </div>
  )
})

export default Message
