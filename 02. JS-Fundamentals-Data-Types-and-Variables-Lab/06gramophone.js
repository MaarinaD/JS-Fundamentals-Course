function gramophone(a, b, c) {
   let bandName = String(a);
   let albumName = String(b);
   let songName = String(c);

   let time = (albumName.length * bandName.length) * songName.length / 2;
   let rotations = Math.ceil(time / 2.5);

   console.log(`The plate was rotated ${rotations} times.`);

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');

// let bandName = String(a);
// let albumName = String(b);
// let songName = String(c);

// let total = (albumName.length * bandName.length) * songName.length / 2;

// console.log(`The plate was rotated ${Math.ceil(total / 2.5)} times.`);