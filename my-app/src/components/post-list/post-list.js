import React from 'react';
import PostListItem from '../post-list-item';
const PostList = ({posts}) =>{

  const elements = posts.map((e)=>{
    return (
    <li key = {e.id} className='list-group-item'>
           <PostListItem label = {e.label} important = {e.important}/>
    </li>
    )
  });
     return (
       <ul className='app-list list-group'>
         {elements}
       </ul>
     );
};

export default PostList;