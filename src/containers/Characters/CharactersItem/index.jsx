import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import "./index.scss";

const useStyles = makeStyles((theme) => ({
   modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   paper: {
      backgroundColor: theme.palette.background.paper,
      minWidth: "45%",
      border: '2px solid #000',
      borderRadius: "10px",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
   },
}));

const CharacterItem = (props) => {
   const classes = useStyles();
   const [open, setOpen] = React.useState(false);

   const handleOpen = () => {
      setOpen(true);
   };

   const handleClose = () => {
      setOpen(false);
   };

   return (
      <div className="characters__item">
         <img className="characters__img" onClick={handleOpen} src={props.elem.image} alt="" />
         <span className="characters__name">{props.elem.name}</span>
         <div className="characters__modal">
            <Modal
               className={classes.modal}
               open={open}
               onClose={handleClose}
               closeAfterTransition
               BackdropComponent={Backdrop}
               BackdropProps={{
                  timeout: 500,
               }}
            >
               <Fade in={open}>
                  <div className={classes.paper} >
                     <div className="modal">
                        <div className="modal__header">
                           <div className="modal__close">
                              <Button onClick={handleClose} color="secondary">X</Button>
                           </div>
                           <div className="modal__info">
                              <h2 className="modal__title" >{props.elem.name}</h2>
                              <img className="modal__img" src={props.elem.image} alt="" />
                           </div>

                        </div>
                        <div className="modal__content">
                           <div className="modal__subtitle">Info</div>
                           <div className="modal__gender">Gender: {props.elem.gender}</div>
                           <div className="modal__origin">From : {props.elem.origin.name}</div>
                           <div className="modal__status">Status:{props.elem.status}</div>
                           <div className="modal__spesies">Spesies:{props.elem.species}</div>
                           <div className="modal__location">Location:{props.elem.location.name}</div>
                        </div>
                     </div>
                  </div>
               </Fade>
            </Modal>
         </div>
      </div>
   );
}

export default CharacterItem;