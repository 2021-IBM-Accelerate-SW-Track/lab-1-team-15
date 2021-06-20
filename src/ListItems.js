import './listItems.css';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
        {
            return <div className = "list" key = {item.key}>
                <div className='text'>
                    <input type="text"
                    id={item.text}
                    value = {item.text}
                    onChange ={
                        (e) =>{
                            props.setUpdate(e.target.value, item.key)
                        }
                    }
                    />
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