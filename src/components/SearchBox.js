import React, {Component} from 'react';



const SearchBox =({searchChange}) => {
    
    return(
        <div className="pa3">
            <input className="pa3 ba b--blue br3 bg-lightest-blue grow bw2 shadow-5" type='search' placeholder="Search Robots" onChange={searchChange} />
        </div>
    );
    
}


export default SearchBox;