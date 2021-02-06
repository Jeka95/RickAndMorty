import React, { useState, useEffect } from 'react';

import Pagination from '@material-ui/lab/Pagination';

import CharactersItem from "./CharactersItem";
import RadioButtons from "../../components/Radibutton";
import "./index.scss";

const Characters = () => {

   const [characters, setCharacters] = useState([]);
   const [notfound, setNotFound] = useState(false);
   const [count, setCount] = useState(null);
   const [page, setPage] = useState(1);
   const [paginationpage, setPaginationPage] = useState(1);
   const [species, setSpisies] = useState("");
   const [status, setStatus] = useState("");
   const [gender, setGender] = useState("");


   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/?page=${paginationpage}&status=${status}&species=${species}&gender=${gender}`)
         .then((response) => {
            return response.json();
         })
         .then((data) => {
            if (data.results !== undefined) {
               setCharacters(data.results.splice(0, 10));
               setCount(data.info.count);
               setPage(1);
               setPaginationPage(1);
               setNotFound(false);
            } else {
               setCharacters([]);
               setNotFound(true);
            }
         });
   }, [gender, status, species])

   useEffect(() => {
      setPaginationPage(Math.ceil(page / 2))

   }, [page])

   useEffect(() => {
      if (page === 1) {
         fetch(`https://rickandmortyapi.com/api/character/?page=${paginationpage}&status=${status}&species=${species}&gender=${gender}`)
            .then((response) => {
               return response.json();
            })
            .then((data) => {
               if (data.results !== undefined) {
                  setCharacters(data.results.splice(0, 10));
                  setCount(data.info.count);
                  setPage(1);
                  setNotFound(false);
               } else {
                  setCharacters([]);
                  setNotFound(true);
               }
            })
      } else {
         if (page % 2 === 0) {
            fetch(`https://rickandmortyapi.com/api/character/?page=${paginationpage}&status=${status}&species=${species}&gender=${gender}`)
               .then((response) => {
                  return response.json();
               })
               .then((data) => {
                  if (data.results !== undefined) {
                     setCharacters(data.results.splice(10, 20));
                     setCount(data.info.count);
                     setNotFound(false);
                  } else {
                     setCharacters([]);
                     setNotFound(true);
                  }
               });
         } else {
            fetch(`https://rickandmortyapi.com/api/character/?page=${paginationpage}&status=${status}&species=${species}&gender=${gender}`)
               .then((response) => {
                  return response.json();
               })
               .then((data) => {
                  if (data.results !== undefined) {
                     setCharacters(data.results.splice(0, 10));
                     setCount(data.info.count);
                     setNotFound(false);
                  } else {
                     setCharacters([]);
                     setNotFound(true);
                  }
               })
         }
      }
   }, [page, paginationpage]);




   const statusOptions = [
      { value: "", label: "All" },
      { value: "alive", label: "Alive" },
      { value: "dead ", label: "Dead" },
      { value: "unknown", label: "Unknown" },

   ];
   const speciesOptions = [
      { value: "", label: "All" },
      { value: "human", label: "Human" },
      { value: "alien", label: "Alien" },
      { value: "mythological", label: "Mythological Creature" },
      { value: "humanoid", label: "Humanoid" },
      { value: "animal", label: "Animal" },
      { value: "robot", label: "Robot" },
      { value: "poopybutthole", label: "Poopybutthole" },
      { value: "planet", label: "Planet" },
   ];


   const genderOptions = [
      { value: "", label: "All" },
      { value: "female", label: "Female" },
      { value: "male", label: "Male" },
      { value: "genderless", label: "Genderless" },
      { value: "unknown", label: "Unknown" },

   ];


   return (
      <div className="characters">
         {console.log(characters)}
         <div className="characters__title">Characters</div>
         <div className="characters__radiobuttons">
            <RadioButtons props={genderOptions} name={"Gender"} onClick={setGender} />
            <RadioButtons props={speciesOptions} name={"Spesies"} onClick={setSpisies} />
            <RadioButtons props={statusOptions} name={"Status"} onClick={setStatus} />
         </div>
         {notfound
            ? <div className="characters__notfound">Not Found</div>
            :
            <div>
               <div className="characters__content">
                  {characters.map((elem) => {
                     return (
                        <CharactersItem key={elem.id} elem={elem} />
                     )
                  })}
               </div>
               <div className="pagination-wrapper">
                  {
                     <Pagination
                        page={page}
                        count={Math.ceil(count / 10)} color="primary"
                        onChange={(event, newPage) => {
                           setPage(newPage);
                        }}
                     />
                  }
               </div>
            </div>
         }
      </div>


   );
}

export default Characters;