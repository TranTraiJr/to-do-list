function AddTaskForm({ handleSubmit, handleInputChange }) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="newItem">Add to the Todo List</label>
      <input type="text" id="newItem" onChange={handleInputChange} />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default AddTaskForm;
