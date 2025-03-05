import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

const App = () => {
	const [todoList, setTodoList] = useState([]);

	//không được để trống input
	//không được trùng tên

	// const handleDelete = (id) => {
	// 	console.log("id", id);
	// 	const updatedList = todoList.filter((todo) => todo.id !== id);
	// 	setTodoList(updatedList);
	// };

	const addNewTodo = (name) => {
		if (!name.trim()) {
			alert("Nội dung nhập không phù hợp, mời nhập lại!");
			return;
		}

		//input bị trùng thì không cho thêm
		const isDuplicate = todoList.some(
			(todo) => todo.name.toLowerCase() === name.toLowerCase()
		);
		if (isDuplicate) {
			alert("Nội dung đã tồn lại!");
			return;
		}

		const newId =
			todoList.length > 0
				? Math.max(...todoList.map((todo) => todo.id)) + 1
				: 1;
		const newTodo = {
			id: newId,
			name: name,
		};
		setTodoList([...todoList, newTodo]);
	};

	const deleteTodo = (id) => {
		const newTodo = todoList.filter(item => item.id !== id)
		setTodoList(newTodo)
	}


	//{key: value}
	return (
		<div className="todo-container">
			<div className="todo-title">Todo List</div>

			<TodoNew 
				addNewTodo={addNewTodo} 
			/>

			{
				todoList.length > 0 ? 
				<TodoData 
					todoList={todoList} 
					setTodoList={setTodoList}
					deleteTodo={deleteTodo}
				/>
			:
				<div className="todo-image">
					<img src={reactLogo} className="logo" alt="React Logo" />
				</div>
			}
			
			{/* <div className="todo-title">Todo List</div>
			}
			{/* {todoList.length > 0 && 
				<TodoData 
					todoList={todoList} 
					setTodoList={setTodoList} 
				/>
			}

			{todoList.length === 0 && 
				<div className="todo-image">
					<img src={reactLogo} className="logo" alt="React Logo" />
				</div>
			} */
			}
		</div>
	);
};

export default App;
