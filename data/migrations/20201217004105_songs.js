exports.up = function (knex) {
	return knex.schema.createTable('songs', (table) => {
		table.increments();
		table.string('title', 128).notNullable();
		table.string('artist', 128).notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('songs');
};
