const db = require('../../data/dbConfig');
const Song = require('./songs-model');

describe('songs model', () => {
	describe('findAll method', () => {
		it('returns empty array', async () => {
			const songs = await Song.findAll();
			expect(songs).toHaveLength(0);
		});
		it('returns all songs', async () => {
			await db('songs').insert({ title: 'take care', artist: 'drake' });
			await db('songs').insert({ title: 'cool again', artist: 'shoffy' });
			let songs = await Song.findAll();
			expect(songs).toHaveLength(2);
		});
	});

	describe('add method', () => {
		it('can add a song', async () => {
			await Song.add({ title: 'two 10s', artist: 'quinn xcii' });
			const songs = await Song.findAll();
			expect(songs).toHaveLength(1);
		});
		it('returns added song', async () => {
			const newSong = await Song.add({ title: 'gorgeous', artist: 'mansionz' });
			expect(newSong).toMatchObject({
				id: 1,
				title: 'gorgeous',
				artist: 'mansionz',
			});
		});
	});

	describe('remove method', () => {
		it('can remove song', async () => {
			await db('songs').insert({ title: 'santa monica', artist: 'aries' });
			await Song.remove(1);
			expect('songs').toHaveLength(0);
		});
		it('returns removed song', async () => {
			await db('songs').insert({ title: '2 birds', artist: 'mike.' });
			const removedSong = await Song.remove(1);
			expect(removedSong).toMatchObject({
				id: 1,
				title: '2 birds',
				artist: 'mike.',
			});
		});
	});
});
