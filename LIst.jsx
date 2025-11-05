function List(props) {
 

  // Uncomment any sort you want to apply:
  // Fruit.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
  // Fruit.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
  // Fruit.sort((a, b) => a.calories - b.calories); // Numerical (ascending)
  // Fruit.sort((a, b) => b.calories - a.calories); // Reverse Numerical (descending)

  //const lowCalFruit = Fruit.filter(fruit => fruit.calories < 100);
//   const HighCalFruit = Fruit.filter(fruit => fruit.calories > 100);

const itemlist = props.items;
const category = props.category;

  const listItems = itemlist.map(fruit => (
                                    <li key={fruit.id}>
                                    {fruit.name}: &nbsp; <b>{fruit.calories}</b>
                                    </li>));

  return (
    <>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
    </>
  );
}

export default List;