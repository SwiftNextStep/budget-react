import { call, fork, put, take } from 'redux-saga/effects';
import entriesTypes from '../actions/entries.actions';
import axios from 'axios';
import {
  populateEntries,
  populateEntryDetails,
} from '../actions/entries.actions';

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log('I need to get the entries now');
  const { data } = yield call(axios, 'http://localhost:3001/entries');
  yield put(populateEntries(data));
}

export function* getEntryDetails(id) {
  const { data } = yield call(axios, `http://localhost:3001/values/${id}`);
  console.log(data);
  yield put(populateEntryDetails(id, data));
}
export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    yield fork(getEntryDetails, entry.id);
  }
}
