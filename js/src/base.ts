import { IArray } from './arrays';

interface IQuote {
    author: any;
    text: string;
}

class author {
    id: number;
    name: string;
    dob: string;
    dod: string;

    constructor(id:number, name:string, dob:string, dod:string) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.dod = dod;
    }
}

var james = new author(1, 'James', '19/01/1913', '19/01/2013');
var authors: Array<author>;
authors.push(james);

class library {
    authors: IArray<author>;
    constructor(authors) {
        this.authors = authors;
    }
    getAuthorById(id): any {
        return this.authors.find(author => {
            return id === author.id;
        });
    }
}

class quote {
    constructor(authorId) {
        // this.author = getAuthorById(authorId);
    }
    text: 'a'
}