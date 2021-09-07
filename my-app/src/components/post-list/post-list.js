import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
const PostList = ({posts, onDelete, onToggleLiked,onToggleImportant,like}) =>{

  const elements = posts.map((e)=>{
    return (
    <li key = {e.id} className='list-group-item'>
           <PostListItem label = {e.label} important = {e.important} onDelete={()=> onDelete(e.id)} onToggleImportant={()=>onToggleImportant(e.id)} onToggleLiked={()=>{onToggleLiked(e.id)}} like = {e.like}/>
    </li>
    )
  });
     return (
       <ListGroup className='app-list list-group'>
         {elements}
       </ListGroup>
     );
};

export default PostList;
 