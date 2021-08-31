import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form';
import './css/app-header.css';
import './css/app.css';
import './css/index.css';
import './css/post-add-form.css';
import './css/post-list-item.css';
import './css/post-list.css';
import './css/post-status-filter.css';
import './css/search-panel.css';
const App = () =>{

    const data = [
        {label: "Going to learn React", important: true,id: 'asahfasd'},
        {label: "That is so good", important: true,id: 'sdfsdf'},
        {label: "i need a break...-_-", important: false,id:'asdasdasd'},
    ];
    return(
<div className='app'>
<AppHeader/>
        <div className='search-panel d-flex'>
            <SearchPanel></SearchPanel>
            <PostStatusFilter></PostStatusFilter>
        </div>
        <PostList posts={data}></PostList>
        <PostAddForm/>
</div>
    )
}
export default App;
