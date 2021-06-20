import "./listItems.css"


function ListItems(props){
    const items = props.items;
    const currentItem = props.currentItem;
    const listItems = items.map(item =>
        {
            return <div className = "list" key = "item.key">
                <div className='text'>{item.text}
                <span>
                <button className="deleteBtn" onClick={() => {
                props.deleteItem(item.key)
                }}>Delete</button>
                
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