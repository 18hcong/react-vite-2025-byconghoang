import { useState } from "react";

const TodoNew = (props) => {
	// console.log('>>check points', props);
	const [valueInput, setValueInput] = useState("Cong Hoang");
	const { addNewTodo } = props;

	// addNewTodo("Công Hoàng");
	const handleClick = () => {
		addNewTodo(valueInput);
		setValueInput("");
	};
	const handleChange = (name) => {
		setValueInput(name);
	};
	return (
		<div className="todo-new">
			<input
				type="text"
				placeholder="Add new todo list"
				onChange={(event) => handleChange(event.target.value)}
				value={valueInput}
			/>
			<button onClick={handleClick}>Add</button>
		</div>
	);
};
export default TodoNew;

// import { useState } from "react";

// const TodoNew = (props) => {
//   const [valueInput, setValueInput] = useState("Cong Hoang");
//   const { addNewTodo } = props;

//   const handleClick = () => {
//     if (!valueInput.trim()) {
//       alert("Todo không được để trống!");
//       return;
//     }
//     addNewTodo(valueInput);
//     setValueInput(""); // Reset input sau khi thêm thành công
//   };

//   const handleChange = (event) => {
//     setValueInput(event.target.value);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       handleClick();
//     }
//   };

//   return (
//     <div className="todo-new">
//       <input
//         type="text"
//         placeholder="Add new todo list"
//         value={valueInput}
//         onChange={handleChange}
//         onKeyDown={handleKeyDown} // Bắt sự kiện nhấn Enter
//       />
//       <button onClick={handleClick}>Add</button>
//     </div>
//   );
// };

// export default TodoNew;
