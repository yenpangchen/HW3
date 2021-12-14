import firebase from 'firebase';

// Functions
async function getFruit() {
  const db = firebase.firestore();
  const fruitRef = db.collection('fruit').doc('YSAIPw9OIK28niEt8GiE');
  const doc = await fruitRef.get();
  console.log(doc.data());
}

// async function getAllFruits() {
//   const db = firebase.firestore();
//   const fruitsRef = db.collection('fruit');
//   const querySnapshot = await fruitsRef.get();
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, '=>', doc.data());
//   });
// }

async function addFruit() {
  const db = firebase.firestore();
  const fruitsRef = db.collection('fruit');
  const fruit = {
    name: 'banana',
    price: 18,
    onSale: false,
  };
  const fruit1 = {
    name: 'grape',
    price: 24,
    onSale: false,
  };
  fruitsRef.add(fruit);
  fruitsRef.add(fruit1);
  const querySnapshot = await fruitsRef.get();
  querySnapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
  /* 請使用 add() */
}

function deleteFruit() {
  const db = firebase.firestore();
  const fruitRef = db.collection('fruit').doc('xqmFtJ7vv1NdTjKVQMva');
  fruitRef.delete();
}

async function switchFruitOnSale() {
  const db = firebase.firestore();
  const fruitRef = db.collection('fruit').doc('2h7xsOkU0BDM7twMgsi7');
  const doc = await fruitRef.get();
  const flag = doc.data().onSale === true ? doc.data().onSale = false : doc.data().onSale = true;
  fruitRef.set({
    onSale: flag,
  }, { merge: true });
}

// async function switchFruitOnSale() {
//   const db = firebase.firestore();
//   const fruitRef = db.collection('fruit').doc('2h7xsOkU0BDM7twMgsi7');
//   const doc = await fruitRef.get();
//   fruitRef.update({
//     onSale: !doc.data().onSale,
//   });
// }

async function getAllFruits() {
  const fruitsArray = [];
  const db = firebase.firestore();
  const fruitsRef = db.collection('fruit');
  const querySnapshot = await fruitsRef.get();
  querySnapshot.forEach((doc) => {
    fruitsArray.push({ ...doc.data(), id: doc.id });
    // console.log(doc.id, '=>', doc.data());
  });
  console.log(fruitsArray);
  return fruitsArray;
}

async function deleteNotApple() {
  const db = firebase.firestore();
  const fruitsRef = db.collection('fruit');
  const querySnapshot = await fruitsRef.where('name', '!=', 'apple').get();
  querySnapshot.forEach((doc) => {
    db.collection('fruit').doc(doc.id).delete();
  });
}

export default {
  getFruit,
  getAllFruits,
  addFruit,
  deleteFruit,
  switchFruitOnSale,
  deleteNotApple,
};
