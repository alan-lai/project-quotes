import { IArray } from './array';
import { Author } from './author';
import { Quote } from './quote';
import { Library } from './library';

var james = new Author(1, 'James', '19/01/1913', '19/01/2013');
var authors: Array<Author>;
authors.push(james);