import "./style.css";
const MyComponent = () => {
	//  const cong = "cong 1"; //string
	// const cong = 25; //number
	// const cong = "true"; //boolean
	// const cong = undefined; //undefined
	// const cong = null; //null
	const cong = [1,2,3]; //array
	// const cong = {
	// 	name: "Cong Hoang",
	// 	age: 24,
	// };

	return (
		<>
			<div>{JSON.stringify(cong)} & hoidanit update</div>
			<div>{console.log("Cong Hoang Pham")}</div>
			<p className="myfirst" style={{ borderRadius: "10px" }}>
				This is my first component.
			</p>
		</>
	);
};

export default MyComponent;
