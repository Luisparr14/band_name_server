const { v4: uuidv4 } = require('uuid');
class Band {
    constructor(name) {
        this.id = id || uuidv4();
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
