import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { YOU_SEARCH_API } from '../utils/constants';
import store from '../utils/store';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

    const[searchQuery, setSearchQuery] = useState("");
    const[suggestions, setSuggestions] = useState([]);
    const[showSuggestions,  setShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {
      const timer = setTimeout(() => {
        if(searchCache[searchQuery]) {

          setSuggestions(searchCache[searchQuery]);
        }

        else {
          getSearchSuggestions()
        }
      
    }, 200);

      return () => {
        clearTimeout(timer);
      };

    }, [searchQuery]);


  const getSearchSuggestions = async () =>{
    const data = await fetch(YOU_SEARCH_API + searchQuery);
    const json= await data.json();
    console.log(json);

    setSuggestions(json[1]);

    dispatch(cacheResults({
      [searchQuery] : json[1],
    }));

  };




    const disPatch = useDispatch();
    const toggleMenuHandler = () => {
        disPatch(toggleMenu());
    };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-xl">
       <div className="flex col-span-1">
        <img 
        onClick={() => toggleMenuHandler()}
        className="h-8 cursor-pointer"
         alt="menu" src="https://tse1.mm.bing.net/th?id=OIP.ob73mXaLtmbUgANF_XWvFwHaHa&pid=Api&P=0&h=180">
        </img>

        <img className="h-8 mx-4"
         src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png">
        </img>
       </div>
       <div className="col-span-10 px-10">

       <div>
       <input className="w-1/2 border border-gray-400 p-2 rounded-l-full"
       type="text"
       value={searchQuery}
       onChange={(e) => setSearchQuery(e.target.value)}
       onFocus={() => setShowSuggestions(true)}
       onBlur={() => setShowSuggestions(false)}
       />
       <button className="border border-gray-200 p-2 rounded-r-full"
       >Search</button>
       </div>
      {showSuggestions && ( <div className='fixed bg-white py-2 px-5 w-[37rem] shadow-lg rounded-lg border border-gray-100'>
        <ul>
          {suggestions.map((s) => (
             <li key={s} className='py-2 shadow-sm hover:bg-gray-100'>
             🔍{s}
             </li>
             ))}

        </ul>
       </div>
      )}
       </div>

       <div>

       <img className="h-8 col-span-1"
        alt="user" src="https://tse2.mm.bing.net/th?id=OIP.RhSxWB9hh6m-zupBh9sTXwHaHw&pid=Api&P=0&h=180">
       </img>
       </div>
    </div>
  )
}

export default Head;
