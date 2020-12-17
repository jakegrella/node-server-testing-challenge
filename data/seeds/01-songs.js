exports.seed = function (knex) {
	return knex('songs')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('songs').insert([
				{
					title: 'stuck in the middle',
					artist: 'mike posner',
				},
				{
					title: 'dont look me over',
					artist: 'luke christopher',
				},
				{
					title: 'blu',
					artist: 'jon bellion',
				},
			]);
		});
};
