"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Library = /** @class */ (function () {
    function Library(authors) {
        this.authors = authors;
    }
    Library.prototype.getAuthorById = function (id) {
        return this.authors.find(function (author) {
            return id === author.id;
        });
    };
    return Library;
}());
exports.Library = Library;
