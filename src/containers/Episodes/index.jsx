import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import "./index.scss";


const Episodes = () => {

   const [episode, setEpisode] = useState([]);

   useEffect(() => {
      for (let i = 1; i <= 3; i++) {
         fetch(`https://rickandmortyapi.com/api/episode?page=${i}`)
            .then((response) => {
               return response.json();
            })
            .then((data) => {
               setEpisode((prev) => {
                  return [...prev, ...data.results]
               });
            })
      }
   }, [])

   const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Name', width: 300 },
      { field: 'air_date', headerName: 'Data', sortable: false, width: 170 },
      {
         field: 'episode',
         headerName: 'Episode',
         sortable: false,
         width: 120,
      },
   ];

   return (
      <div className="episode">
         <div className="episode__title">Episodes</div>
         <div style={{ height: "150vh", width: 670, background: "white" }}>
            <DataGrid rows={episode} columns={columns} pageSize={25} />
         </div>
      </div>

   );
}

export default Episodes;