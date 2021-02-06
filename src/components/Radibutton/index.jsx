import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtons({ props, name, onClick }) {
   const [value, setValue] = React.useState('');
   const list = React.useRef(props);

   const handleChange = (event) => {
      onClick(event.target.value);
      setValue(event.target.value);
   };

   return (
      <FormControl component="fieldset">
         <FormLabel component="legend">{name}</FormLabel>
         <RadioGroup row value={value} onChange={handleChange}>
            {list.current.map((elem) => {
               return (
                  < FormControlLabel key={elem.label} value={elem.value} control={< Radio />} label={elem.label} />
               )
            })
            }
         </RadioGroup>
      </FormControl>
   );
}