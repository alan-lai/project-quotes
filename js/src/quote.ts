interface IQuote {
    authorId: number;
    text: string;
}

class Quote implements IQuote {
    authorId: 1;
    text: 'a';
    
    constructor(authorId) {
        // this.author = getAuthorById(authorId);
    }
}

export { Quote };