import React from "react";
import Card from "./Card";

const Cards = () => {
	return (
		<div className="row">
			<div className="col">
				<Card
					img="https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
					cardTitle="Music"
					cardText="Playlist of the best songs"
				/>
			</div>
			<div className="col">
				<Card
					img="https://images.unsplash.com/photo-1599967094040-370dcf383e01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=805&q=80"
					cardTitle="Music Videos"
					cardText="Top of the best videos "
				/>
			</div>
			<div className="col">
				<Card
					img="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
					cardTitle="Games"
					cardText="Best games"
				/>
			</div>
			<div className="col">
				<Card
					img="https://images.unsplash.com/photo-1586899028174-e7098604235b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
					cardTitle="Movies"
					cardText="Best movies 2021"
				/>
			</div>
		</div>
	);
};

export default Cards;
