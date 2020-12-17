const db = require('../../data/dbConfig');

const findAll = () => {
	return db('songs');
};

const add = async (song) => {
	const [id] = await db('songs').insert(song);
	return db('songs').where({ id }).first();
};

const remove = (id) => {
	return db('songs').where({ id }).delete();
};

module.exports = {
	findAll,
	add,
	remove,
};
