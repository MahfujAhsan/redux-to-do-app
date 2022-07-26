import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addBook } from "./BooksSclice";
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4} from "uuid";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    navigate("/show-books", {replace: true})
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="title">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBooks;
