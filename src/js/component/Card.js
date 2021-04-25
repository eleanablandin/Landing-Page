import React from "react";
import PropTypes from "prop-types";

const Card = ({ img, cardTitle, cardText }) => {
	return (
		<div className="card">
			<img className=" card-img-top" src={img} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{cardTitle}</h5>
				<p className="card-text">{cardText}</p>
				<a
					href="#"
					className="btn btn-primary d-flex justify-content-center">
					{"Find Out More!"}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	img: PropTypes.string,
	cardTitle: PropTypes.string,
	cardText: PropTypes.string
};

export default Card;
