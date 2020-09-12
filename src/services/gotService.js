export default class GotService {
    constructor() {
        this._apiUrl = 'https://www.anapioficeandfire.com/api';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiUrl}${url}`);

        if (!res.ok) {
            throw new Error(`${url}, status ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource('/characters?page=6');
        return res.map(this._transformCharacter)
    }

    getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id + 50}`);
        return this._transformCharacter(res);
    }

    getAllBooks = async () => {
        return await this.getResource('/books');
    }

    getBook = async (id) => {
        return await this.getResource(`/books/${id}`);
    }

    getAllHouses = async () => {
        return await this.getResource('/houses');
    }

    getHouse = async (id) => {
        return await this.getResource(`/houses/${id}`);
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