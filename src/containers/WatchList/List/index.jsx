
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import "./index.css";
const List = (props) => {
   return (
      <ol className="list__items">
         {props.items.map((item, index) =>
            <li key={index} className="list__item">
               <span>{item}</span>
               <Button
                  onClick={() => props.handleDelete(index)}
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteIcon />}
               >
                  Delete
      </Button>
            </li>
         )}
      </ol>
   );
}

export default List