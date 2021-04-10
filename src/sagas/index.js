//import * as testSaga from './testSaga';
import * as entriesSaga from './entriesSaga';
import * as entriesSagaDeletion from './entriesSagaDeletion';
import * as entriesSagaAdd from './entriesSagaAdd';
export function initSagas(sagaMiddleware) {
  //Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSagaDeletion).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
  Object.values(entriesSagaAdd).forEach(
    sagaMiddleware.run.bind(sagaMiddleware)
  );
}
