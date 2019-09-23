/** You can now destructure an object, using these ways above **/
const pokemon = {
	name: "Squirtle", 
	type: "water"

};

//The most simple way to do it
const extractProperty = "name"; 
const {[extractProperty]:value } = pokemon;
console.log(value);

//Lets then create a function to destructure it automatically
function dynamicDestructure(object, property) {
	const {[property]:value} = object;
	return value;

}
console.log(dynamicDestructure(pokemon, 'name'));


//Finally, destructuring an object with map function 
function dynamicDestructureMany(object, props) {
	return props.map(property => {
		const {[property]: value} = object;
		return value;
	});

}

console.log(dynamicDestructureMany(pokemon, ['name', 'type']));
