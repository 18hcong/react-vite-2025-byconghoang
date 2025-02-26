import { useState } from "react";

const TodoNew = (props) => {
  // console.log('>>check points', props);
  const [valueInput, setValueInput] = useState("Cong Hoang");

  const {addNewTodo} = props;

  // addNewTodo("Công Hoàng");
  const handleClick = () => {
    
  }; 
  const handleChange = (name) => {
    setValueInput(name);
  }
  return (
    <div className="todo-new">
				<input 
        type="text" 
        placeholder="Add new todo list" 
        onChange={(event) => {handleChange(event.target.value)}}
        />
				<button 
        onClick={handleClick}
        >Add</button>
        <div>
          My text input is = {valueInput}
        </div>
			</div>
  );
}
export default TodoNew; 