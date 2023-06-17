import { ref, set, get, remove } from 'firebase/database';
import { db } from './config.js';

function getData(path) {
    const dbRef = ref(db, path);
    return get(dbRef).then(snapshot => snapshot.val());
}

function putData(path, id, data) {
    const dbRef = ref(db, path + '/' + id);
    return set(dbRef, data);
}

function removeNode(path) {
    const dbRef = ref(db, path);
    return remove(dbRef);
}

export { getData, putData, removeNode }