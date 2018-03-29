if (!Array.prototype.find) {
    Array.prototype.find = function (predicate) {
        if (this == null) {
            throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
            throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
            value = list[i];
            if (predicate.call(thisArg, value, i, list)) {
                return value;
            }
        }
        return undefined;
    };
}

interface quoteInterface {
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

interface Array<T> {
    find(predicate: (search: T) => boolean): T;
}

var james = new author(1, 'James', '19/01/1913', '19/01/2013');
var authors: Array<author>;
authors.push(james);

class library {
    authors: Array<author>;
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

console.log('hi')