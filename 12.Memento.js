class ArticleVersion {
    constructor(articleState) {
        this.articleState = articleState;
    }
}

class VersionsCollection {
    constructor(versions = []) {
        this.versions = versions;
    }

    addVersion(version) {
        this.versions.push(version);
    }

    removeLast() {
        this.versions.pop();
        if (this.versions.length) {
            return this.versions[this.versions.length - 1].articleState;
        } else {
            return "";
        }

    }
}

class Article {
    constructor() {
        this.versionlist = new VersionsCollection();
        this.article = "";
    }

    update(text) {
        this.article = text;
        this.versionlist.addVersion(new ArticleVersion(text));
    }

    undo() {
        this.article = this.versionlist.removeLast();
    }

    print() {
        console.log(this.article);
    }

}


// mainprogram
const article = new Article();
article.update("Once up on a time.");
article.print();
article.update("Once up on a time, when there was a bird.");
article.print();
article.undo();
article.print();