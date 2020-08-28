import React from 'react';
export const SearchBar=(props)=>
{
    return (
        <div>  
            <input onChange={props.searchdata} onKeyUp={props.btclick} className='form-control' type="text" placeholder={props.txtvalue}  aria-label="Search"/>
            { <button onClick={props.btclick}  type="button" className="btn btn-success">Search</button> }
        </div>
    );
}