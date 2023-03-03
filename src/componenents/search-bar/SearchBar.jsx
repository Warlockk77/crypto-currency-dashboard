import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCrypto } from '../../features/drop-down-slices/dropDownCrypto';
import { useGetCoinsQuery } from '../../features/api/coinSlice';
import "./searchbar.css";
import styled from 'styled-components';
import {FaSearchDollar} from 'react-icons/fa';


//SEARCH COMPONENT USING STYLED-COMPONENTS LIBRARY
const Search = styled.div`
display: ${(props) => (props.isActive ? "block" : "none")};
max-height: 20vh;
z-index:99;
background-color:white;
overflow-y: scroll;
padding-left:0.5rem;
position:absolute;
top:7.87rem;
left:10.85rem;
::-webkit-scrollbar {
    display:none;
}
font-weight:500;
font-size:0.9rem;
color:#5D5D5D;

`


const SearchBar = () => {
    
    
    // STATES
    const [searchInput , setSearchInput] = useState("");


    const dispatch = useDispatch();

    

    //DATA FROM STORE
    const {data: coins} = useGetCoinsQuery();
    


    
    function handleClick(e) {
        dispatch(setCrypto(e.target.value));
        setSearchInput("");
        }
        
// SETTING SEARCH INPUT
    function handleChange(e) {
        setSearchInput(e.target.value);
    }

  return (
    <div className='search-container' >
        <FaSearchDollar size={32} className='search-icon'/>
        <input className='search-input' id="search" value={searchInput} 
        placeholder="Search"
        onChange={handleChange}/>
        <Search isActive={searchInput}>
            {
                coins&&coins.filter((coin) => coin.name.includes(searchInput)).map((coin)=><p onClick={handleClick} key={coin.id}>{coin.name}</p>)
            }
           
        </Search>

      
    </div>
  )
}

export default SearchBar
