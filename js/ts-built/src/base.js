"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./helpers");
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
