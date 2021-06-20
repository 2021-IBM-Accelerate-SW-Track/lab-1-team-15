import "./listItems.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItems(props){
    const items = props.items;
    const currentItem = props.currentItem;
    const listItems = items.map(item =>
        {
            return <div className = "list" key = "item.key">
                <div className='text'>{item.text}
                <span>
                <FontAwesomeIcon className="trash" onClick={() => {
                props.deleteItem(item.key)
                }} icon="trash" />
                </span> 
                </div> 
                <input type ='checkbox'/> 
               
            </div>
        })
    return(
        <div>{listItems}</div>
    )
}
export default ListItems; 