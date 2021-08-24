import React from 'react'

const PostAddForm = () =>{
    return (
        <form className='bottom-panel d-flex'>
            <input type='text' placeholder='О чем ви думаете сейчас?' className='form-control new-post-label'>
            </input>
            <button type='submit' className='btn btn-outline-secondary'>Добавить пост!</button>
        </form>
    )
};

export default PostAddForm;