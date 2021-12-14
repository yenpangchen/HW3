import firebase from 'firebase';

function toDateString(time) {
  const date = new Date(time.seconds * 1000);
  const dateString = `${date.getFullYear().toString()}/${
    (date.getMonth() + 1).toString().padStart(2, '0')}/${
    date.getDate().toString().padStart(2, '0')}  ${
    date.getHours().toString().padStart(2, '0')}:${
    date.getMinutes().toString().padStart(2, '0')}:${
    date.getSeconds().toString().padStart(2, '0')}`;

  return dateString;
}

async function getLastestTime() {
  const db = firebase.firestore();
  const timeRef = db.collection('time');
  const querySnapshot = await timeRef.orderBy('time', 'desc').limit(1).get();
  const lastestTime = [];
  if (querySnapshot.empty) {
    // console.log('Time queue is empty');
    lastestTime.push({ time: 'Time queue is empty' });
    querySnapshot.forEach((doc) => lastestTime.push(toDateString(doc.data().time)));
  } else {
    querySnapshot.forEach((doc) => {
      // console.log(toDateString(doc.data().time));
      lastestTime.push({ id: doc.id, time: toDateString(doc.data().time) });
    });
  }
  return lastestTime;
}

async function getAllTimes() {
  const db = firebase.firestore();
  const timeRef = db.collection('time');
  const querySnapshot = await timeRef.orderBy('time', 'desc').get();
  const times = [];
  // console.log('-----------');
  if (querySnapshot.empty) {
    // console.log('Time queue is empty');
    times.push({ time: 'Time queue is empty' });
  } else {
    querySnapshot.forEach((doc) => {
      // console.log(toDateString(doc.data().time));
      times.push({ id: doc.id, time: toDateString(doc.data().time) });
    });
  }
  return times;
}

function addCurrentTime() {
  const db = firebase.firestore();
  const timeRef = db.collection('time');
  const currentTime = { time: new Date() };
  timeRef.add(currentTime);
  return currentTime;
}

async function deleteEarliestTime() {
  const db = firebase.firestore();
  const timeRef = db.collection('time');
  let isEmpty = false;
  const querySnapshot = await timeRef.orderBy('time').limit(1).get();
  if (querySnapshot.empty) {
    // console.log('Time queue is empty');
    isEmpty = true;
  } else {
    // console.log(('---------'));
    querySnapshot.forEach((doc) => doc.ref.delete());
  }
  return isEmpty;
}

export default {
  getLastestTime,
  getAllTimes,
  addCurrentTime,
  deleteEarliestTime,
  toDateString,
};
