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
var author = /** @class */ (function () {
    function author(id, name, dob, dod) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.dod = dod;
    }
    return author;
}());
var james = new author(1, 'James', '19/01/1913', '19/01/2013');
var authors;
authors.push(james);
var library = /** @class */ (function () {
    function library(authors) {
        this.authors = authors;
    }
    library.prototype.getAuthorById = function (id) {
        return this.authors.find(function (author) {
            return id === author.id;
        });
    };
    return library;
}());
var quote = /** @class */ (function () {
    function quote(authorId) {
        // this.author = getAuthorById(authorId);
    }
    return quote;
}());
console.log('hi');
