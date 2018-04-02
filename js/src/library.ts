import { IArray } from './array';
import { Quote } from './quote';
import { Author } from './author';

class Library {
    authors: IArray<Author>;
    quotes: IArray<Quote>;
    constructor(authors) {
        this.authors = authors;
    }
    getAuthorById(id): any {
        return this.authors.find(author => {
            return id === author.id;
        });
    }
}

export { Library };