function ListGroup() {
  let items = ["new yor", "san francisco", "tokyo", "paris"];
  items = [];

  return (
    //<> tels react to wrap in fragment
    //curly braces {} for dynamic stuff which isnt allowed in jsx
    <>
      <h1>list</h1>
      {items.length === 0 && <p>no item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
