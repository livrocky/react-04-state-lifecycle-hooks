function ListElement(props) {
  return (
    <div>
      {props.title && <h3>{props.title}</h3>}
      {props.text && <p>{props.text}</p>}
      {props.showButton && <button>click</button>}
    </div>
  );
}

function List() {
  return (
    <div>
      <h2>List</h2>
      <div className='grid'>
        <ListElement title='Good day' text='React is cool' showButton />
        <ListElement title='Good day' showButton />
        <ListElement showButton />
        <ListElement title='Good day' />
      </div>
    </div>
  );
}

export default List;
