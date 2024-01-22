import React, { useEffect, useState } from "react";
import { Book } from "./Book";
import axios from "axios";
const BooksContainer = () => {
	const [books, setBooks] = useState(null);
	const fetchBooks = async () => {
		const getBooks = await axios.get("http://localhost:3000/books");
		setBooks(getBooks.data);
		console.log(getBooks);
	};
	useEffect(() => {
		fetchBooks();
	}, []);
	return (
		<>
			<div className="container mt-3">
				<h1 className="text-center mb-3">Books List</h1>
				<div className="row">
					{books?.map((item, index) => (
						<>
							<div className="col-md-3" key={index}>
								<Book item={item} />
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
};

export default BooksContainer;
