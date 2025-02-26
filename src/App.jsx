
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./components/todo/todo.css";
import TodoData from "./components/todo/TodoData";
import TodoNew from "./components/todo/TodoNew";

const App = () => {
	
	const [todoList, setTodoList] = useState([
		{id:1, name: "Learning React"},
		{id:2, name: "Watching Youtube"}
	])
		
	

	const conghoang = "Công Hoàng Fan MU";
	const age = 24;
	const data = {
		address: "Ha Noi",
		phone: "0123456789",
		country: "Viet Nam",
	};

	//không được để trống input
	//không được trùng tên
	const addNewTodo = (name) => {
		if (!name.trim()) {
			alert("Nội dung nhập không phù hợp, mời nhập lại!");
			return;
	}

	//input bị trùng thì không cho thêm
	const isDuplicate = todoList.some(todo => todo.name.toLowerCase() === name.toLowerCase());
    if (isDuplicate) {
        alert("Nội dung đã tồn lại!");
        return;
    }

    const newId = todoList.length > 0 ? Math.max(...todoList.map(todo => todo.id)) + 1 : 1;
    const newTodo = {
        id: newId,
        name: name
    };
    setTodoList([...todoList, newTodo]);
};
	//{key: value}
	return (
		<div className="todo-container">
			<div className="todo-title">Todo List</div>
			<TodoNew 
				addNewTodo={addNewTodo}
			/>
			<TodoData 
				name={conghoang} 
				age={age} 
				data={data}
				todoList={todoList}
				setTodoList={setTodoList}
			/>
			<div className="todo-image">
				<img src={reactLogo} className="logo" alt="React Logo" />
			</div>
		</div>
	);
};

export default App;
