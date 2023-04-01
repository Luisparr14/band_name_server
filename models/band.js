class Band {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.votes = 0;
    }

    vote() {
        this.votes++;
    }

    get votes() {
        return this.votes;
    }

    get name() {
        return this.name;
    }

    get id() {
        return this.id;
    }

    set votes(votes) {
        this.votes = votes;
    }

    set name(name) {
        this.name = name;
    }
}

module.exports = Band;
