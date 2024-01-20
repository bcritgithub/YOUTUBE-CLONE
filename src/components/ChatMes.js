import React from 'react'

const ChatMes = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2 '>
    <img className="h-8"
    alt="user" 
    src="https://tse2.mm.bing.net/th?id=OIP.RhSxWB9hh6m-zupBh9sTXwHaHw&pid=Api&P=0&h=180">
   </img>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMes
