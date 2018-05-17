class Message{
  constructor(text = '', created = Date.now()){
    console.log('Constructor...');
    this.text = text;
    console.log('Created');
    this.created = created;
  }

  get created(){
    return this._created;
  }

  set created(created){
    if(!created || isNaN(created)){
      throw new Error('Invalid created');
    }
    this._created = created;
  }

  get text(){
    return this._text;
  }

  set text(text){
    console.log('set');
    console.log(text);
    if(!text){
      throw new Error('Invalid text');
    }
    this._text = 'Hello' + text;
  }

  toString(){
    return `Message ${this.text} created at: ${this.created}`;
  }
}


class ImageMessage extends Message{
  constructor(text = '', created = Date.now(), url = '', thumbnail = ''){
    super(text, created);
    this.url = url;
    this.thumbnail = thumbnail;
  }

  toString(){
    return `Photo${super.toString}` +
    `- Url: ${this.url}` +
    `- Thumbnail: ${this.thumbnail}`; 
  }

}

var text = 'Some text';
var created = Date.now();

var duckTypeMessage = {
  text: text,
  created: created
};

var quaTypeMessage = {
  text,
  created
};

console.log(duckTypeMessage);
console.log(quaTypeMessage);

var emptyMessage = new Message('UOL');
var textMessage = new Message('Yesterday message', Date.now() - 86400);
var imageMessage = new ImageMessage('Hi Image');

console.log(String(emptyMessage));
console.log(textMessage);
console.log(String(imageMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(imageMessage instanceof Message);
console.log(emptyMessage instanceof ImageMessage);
console.log(imageMessage instanceof ImageMessage);
