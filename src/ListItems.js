import './listItems.css';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className = "list" key = "item.key">
                <div className='text'>{item.text}</div> 
                <input type ='checkbox'/>  
            </div>
        })
    return(
        <div>{listItems}</div>
    )
}
export default ListItems; 