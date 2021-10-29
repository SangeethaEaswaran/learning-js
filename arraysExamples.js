var breakfast = ["coffee", "crossaint"];
console.log('breakfast', breakfast);

var hodgepodge = [11, "paint", false , ['200', 6*8, 'ace']];
console.log('hodgepodge', hodgepodge);
console.log('hodgepodge[3]', hodgepodge[3], hodgepodge[3][0]);
console.log('hodgepodge length', hodgepodge.length);
hodgepodge[5]= 'trst';
console.log('hodgepodge',hodgepodge,  hodgepodge[hodgepodge.length-1]);
console.log(hodgepodge.concat(['345', 'great', breakfast]));
console.log(hodgepodge.concat(['345', 'great', breakfast]).pop());
console.log(hodgepodge.push('katie', 678));
console.log(hodgepodge.reverse());