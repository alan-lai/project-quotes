class Author {
    id: number;
    name: string;
    dob: string;
    dod: string;

    constructor(id: number, name: string, dob: string, dod: string) {
        this.id = id;
        this.name = name;
        this.dob = dob;
        this.dod = dod;
    }
}

export {Author};