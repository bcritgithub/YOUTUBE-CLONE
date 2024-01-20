import React from 'react'

const commentsData = [
    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolar sit amet,buli buli",
        replies: [],
    },

    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolar sit amet,buli buli",
        replies: [],
    },

    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolar sit amet,buli buli",
        replies: [],
    },

    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolar sit amet,buli buli",
        replies: [],
    },

    {
        name: "Akshay Saini",
        text: "Lorem ipsum dolar sit amet,buli buli",
        replies: [],
    },
]

const Comment = ({data}) => {
    const { name, text, replies} = data;
    return(
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>

    <img
    className='w-12 h-12'
    alt='user' src="https://tse2.mm.bing.net/th?id=OIP.RhSxWB9hh6m-zupBh9sTXwHaHw&pid=Api&P=0&h=180"
    />

    <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>

    </div>

    </div>
    );
};

const CommentsList = ({comments}) => {

    return comments.map((comment, index) => (
        <div>
        <Comment key={index} data={comment}/>
        <div className='pl-5 border border-l-black ml-5'>
        <CommentsList comments={comment.replies}/>
        </div>
        </div>
    ));
};



const CommentsContainer = () => {

 return (
    <div className='m-5 p-2'>
    <h1 className='font-bold text-2xl'>Comments:</h1>

    <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer
