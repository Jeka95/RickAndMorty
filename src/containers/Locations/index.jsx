import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import "./index.scss";

const Episodes = () => {

   const [location, setLocation] = useState([]);

   useEffect(() => {
      for (let i = 1; i <= 6; i++) {
         fetch(`https://rickandmortyapi.com/api/location?page=${i}`)
            .then((response) => {
               return response.json();
            })
            .then((data) => {
               setLocation((prev) => {
                  return [...prev, ...data.results]
               });
            })
      }
   }, [])

   const columns = [
      { field: 'id', headerName: 'ID', sortable: false, width: 70 },
      { field: 'name', headerName: 'Name', width: 300 },
      { field: 'type', headerName: 'Type', width: 170 },
      {
         field: 'dimension',
         headerName: 'Dimension',
         width: 200,
      },
   ];

   return (
      <div className="locations">
         <div className="locations__title">Location</div>
         <div style={{ height: "150vh", width: 750, background: "white" }}>
            <DataGrid rows={location} columns={columns} pageSize={25} />
         </div>
      </div>

   );
}

export default Episodes;