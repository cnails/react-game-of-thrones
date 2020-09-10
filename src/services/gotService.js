export default class GotService {
    constructor() {
        this._apiUrl = 'https://www.anapioficeandfire.com/api';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiUrl}${url}`);

        if (!res.ok) {
            throw new Error(`${url}, status ${res.status}`);
        }

        return await res.json();
    }

    async getAllCharacters() {
        const res = await this.getResource('/characters?page=6');
        return res.map(this._transformCharacter)
    }

    async getCharacter(id) {
        const res = await this.getResource(`/characters/${id + 50}`);
        return this._transformCharacter(res);
    }

    getAllBooks() {
        return this.getResource('/books');
    }

    getBook(id) {
        return this.getResource(`/books/${id}`);
    }

    getAllHouses() {
        return this.getResource('/houses');
    }

    getHouse(id) {
        return this.getResource(`/houses/${id}`);
    }

    _transformCharacter({name, gender, born, died, culture}) {
        return {
            name: name === '' ? 'неизвестно' : name,
            gender: gender === '' ? 'неизвестно' : gender,
            born: born === '' ? 'неизвестно' : born,
            died: died === '' ? 'неизвестно' : died,
            culture: culture === '' ? 'неизвестно' : culture,
        }
    }

    _transformHouse({name, region, words, titles, overlord, ancestralWeapons}) {
        return {name, region, words, titles, overlord, ancestralWeapons}
    }

    _transformBook({name, numberOfPages, publiser, released}) {
        return {name, numberOfPages, publiser, released};
    }

}