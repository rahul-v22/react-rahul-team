import { put, takeEvery } from 'redux-saga/effects'
import { LoaderTypes } from '../action_types/loader_types'
import { DashboardTypes } from '../action_types/dashboard_types'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function* dashboardData() {
    yield put({ type: LoaderTypes.LOADER_START })

    try {
        const url = "https://reqres.in/api/users"
        // const url = `${process.env.REACT_APP_API_URL}/users`
        const res = yield axios.get(url)
        yield put({ type: DashboardTypes.USER_DATA_REQUEST_SUCCESS, data: res.data.data })
        console.log('dash_saga', res.data.data)
    }
    catch (e) {

    }
    yield put({ type: LoaderTypes.LOADER_STOP });
}
//user request by id
function* userRequest(data, callback) {
    console.log('da', data.data.id);
    yield put({ type: LoaderTypes.LOADER_START })

    try {
        const url = `https://reqres.in/api/users/${data.data.id}`
        // const url = `${process.env.REACT_APP_API_URL}/users`
        const res = yield axios.get(url)
        yield put({ type: DashboardTypes.PERSON_REQUST_SUCCESS, data: res.data.data })
        console.log('dash_saga', res.data.data)
        callback(true);
    }
    catch (e) {

    }
    yield put({ type: LoaderTypes.LOADER_STOP });
}
function* Post({ data, callback }) {
    try {
        yield put({ type: DashboardTypes.POST_SUCCESS, data: data })
        callback()
    }
    catch (e) {
    }
}

export default function* dashboardSaga() {
    yield takeEvery(DashboardTypes.USER_DATA_REQUEST, dashboardData);
    yield takeEvery(DashboardTypes.PERSON_REQUST, userRequest)
    yield takeEvery(DashboardTypes.POST_REQUEST, Post)
}