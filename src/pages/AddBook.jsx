import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
	const [book, setBook] = useState({
		title: "",
		description: "",
		author: "",
		cover: "",
	});
	const handelChange = (e) => {
		const { name, value } = e.target;
		setBook({ ...book, [name]: value });
	};

	const submitBooks = async () => {
		try {
			const submit = await axios.post("http://localhost:3000/books", book);
			if (submit) {
				console.log("book submitted");
				setBook({
					title: "",
					description: "",
					author: "",
					cover: "",
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<div className="container mt-3">
				<h1 className="text-center">Add Books</h1>
				<div style={{ maxWidth: "400px" }} className="m-auto mt-5">
					<div className="mb-3">
						<label for="exampleInputEmail1" className="form-label">
							Book Title
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							name="title"
							value={book.title}
							onChange={handelChange}
						/>
					</div>
					<div className="mb-3">
						<label for="exampleInputPassword1" className="form-label">
							Description
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputPassword1"
							name="description"
							onChange={handelChange}
							value={book.description}
						/>
					</div>
					<div className="mb-3">
						<label for="exampleInputEmail1" className="form-label">
							Author
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							name="author"
							onChange={handelChange}
							value={book.author}
						/>
					</div>
					<div className="mb-3">
						<label for="exampleInputEmail1" className="form-label">
							Book Cover
						</label>
						<input
							type="text"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							name="cover"
							onChange={handelChange}
							value={book.cover}
						/>
					</div>

					<button
						type="submit"
						className="btn btn-primary"
						onClick={submitBooks}
					>
						Add Book
					</button>
				</div>
			</div>
		</>
	);
};

export default AddBook;
