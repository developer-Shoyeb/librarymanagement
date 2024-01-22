import React from "react";

export const Book = ({ item }) => {
	return (
		<>
			<div className="card">
				<img src={item?.cover} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{item?.title}</h5>
					<p className="card-text">{item?.description}</p>
					<div className="row">
						<div className="col-6">
							<a href="#" className="btn btn-primary">
								Reserved
							</a>
						</div>
						<div className="col-6">
							<a href="#" className="btn btn-success">
								Update Book
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
