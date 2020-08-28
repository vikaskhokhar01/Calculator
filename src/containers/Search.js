import React from 'react';
import {SearchBar} from '../components/SearchBar';
import SearchList from '../components/SearchList';

// function Search()
// {
//     return (
//         <div>
//            <SearchBar/>
//            <SearchList/>
//         </div>
//     );
// }
// export default Search;

export default class Search extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={imagedata:[]};
        this.searchValue='Search'
    }
    getData(searchvalue)
    {
        const url=`https://pixabay.com/api/?key=18010131-2c6717d7279979e4db2c229fd&image_type=all&q=${searchvalue}`;
        const promise=fetch(url);
        promise.then(response=>
            { 
                var p=response.json(); 
            p.then(result=>{
                console.log('Data is',result.hits);
                this.setState({imagedata:result.hits});
            }).catch(error=>{
                console.log('Error aaya hai',error);
            });
            console.log('Response is',response);
        }).catch(err=>{
            console.log("Error coming from server",err);
        });
    }
    takeInput(event)
    {
        this.searchValue=event.target.value;
    }
    searchnow(event)
    {
        console.log('button is clicked');
        this.getData(this.searchValue);
    }
    render()
    {
        console.log('Render ::: Imagedata is',this.state.imagedata);
        return(
        <div className='container'>
            <h1 className='alert-success text-center'>{this.props.title}</h1>
            <SearchBar searchdata={this.takeInput.bind(this)} btclick={this.searchnow.bind(this)} txtvalue={this.searchValue}/>
            <SearchList imagedata={this.state.imagedata}/>
            </div>
        );
    }
} 