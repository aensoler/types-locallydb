// Example code getting from http://boutglay.com/locallydb/
////

// load locallydb
import locallydb = require('locallydb');

// load the database (folder) in './mydb', will be created if doesn't exist
var db: DB = new locallydb('./mydb');

// load the collection (file) in './mydb/monsters', will be created if doesn't exist
var collection: Collection = db.collection('monsters');

// Insert/add/push a list of elements
let r1: number[] = collection.insert([
  {name: "sphinx", mythology: "greek", eyes: 2, sex: "f", hobbies: ["riddles","sitting","being a wonder"]},
  {name: "hydra", mythology: "greek", eyes: 18, sex: "m", hobbies: ["coiling","terrorizing","growing"]},
  {name: "huldra", mythology: "norse", eyes: 2, sex: "f", hobbies: ["luring","terrorizing"]},
  {name: "cyclops", mythology: "greek", eyes: 1, sex: "m", hobbies: ["staring","terrorizing"]},
  {name: "fenrir", mythology: "norse", eyes: 2, sex: "m", hobbies: ["growing","god-killing"]},
  {name: "medusa",  mythology: "greek", eyes: 2, sex: "f", hobbies: ["coiling","staring"]}
]);

// Insert/add/push only one element
let r2: number = collection.insert({name: "HamoIzm", mythology: "amazigh", eyes: 2, sex: "m", hobbies: ["riddles","hunting"]});

// retrieve elements
let r3: Element[] = collection.where({name: "HamoIzm"});

// retrieve by cid (cid is not index in array, cid is related with addition)
let r4: Element = collection.get(3);

// retrieve elements (monsters) with >= 2 eyes (an array)
let r5: Element[] = collection.where("@eyes >= 2");

// retrieve elements with (2 eyes and from the greek mythology) or from the amazing mythology
let r6: Element[] = collection.where("(@eyes == 2 && @mythology == 'greek') || (@mythology == 'amazing')");

// retrieve elements creation date
collection.get(6).$created;

// retrieve elements last edit date
collection.get(6).$updated;

// List all elements in the collection
collection.items;

// Update an element, it will add un-exsited key and replace existed ($created and cid can't be changed)
let r7: boolean = collection.update(5, {eyes: 3, food: "waloo"});
let r8: Element = collection.get(5);

// Replace the element with the same cid and $created
let r9: boolean = collection.replace(6, {car: "Ferrari"});
let r10: Element = collection.get(6);

// Delete an item by cid
let r11: boolean = collection.remove(1);

// Save all to files
let r12 = collection.save();
