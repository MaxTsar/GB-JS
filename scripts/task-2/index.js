'use strict'

function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function(text) {
  this.text = text;
};

class PostCls {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }

  edit(text) {
    this.text = text;
  };
}

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);

  this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = Post;

AttachedPost.prototype.makeTextHighlighted = function() {
  this.highlighted = true;
}

class AttachedPostCls extends PostCls {
  constructor(author, text, date) {
    super(author, text, date);

    this.highlighted = false;
  }

  makeTextHighlighted() {
    this.highlighted = true;
  }
}

const ap = new AttachedPost('Sam', 'some text', new Date());
const ap1 = new AttachedPostCls('Sam1', 'some text1', new Date());

ap.edit('other text');
ap.makeTextHighlighted();
console.log('>>>', ap.text);
console.log('>>>', ap.highlighted);

ap1.edit('other text');
ap1.makeTextHighlighted();
console.log('>>>', ap.text);
console.log('>>>', ap.highlighted);