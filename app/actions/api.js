
import { auth, base} from '../firebase'
import {saveUserLocal} from './coreActions'
import * as types from './actionTypes'

export const signUp = (body) => ({
    type: types.SIGN_UP,
    method: 'POST',
    path: '/user',
    body,
});

export const changePassword = (body) => ({
    type: types.CHANGE_PASSWORD,
    method: 'POST',
    path: '/user/change-password',
    body,
});

export const signIn = (body) => ({
    type: types.SIGN_IN,
    method: 'POST',
    path: '/login',
    body,
});

export const signOut = (body) => ({
    type: types.SIGN_OUT,
    method: 'DELETE',
    path: '/logout',
})

export const updateUser = (body) => ({
    type: types.UPDATE_USER,
    method: 'PUT',
    path: '/user',
    body,
})

export const forgotPassword = (body) => ({
    type: types.FORGOT_PASSWORD,
    method: 'POST',
    path: '/user/forgot-password',
    body,
});

// Acts

export const getActs = () => ({
    type: types.GET_LIST,
    method: 'GET',
    path: '/acts'
})

export const getAssignedActs = () => ({
    type: types.GET_LIST,
    method: 'GET',
    path: '/assigned_acts'
})

export const addAct = (body) => ({
    type: types.ADD_ACT,
    method: 'POST',
    path: '/acts',
    body
})

export const updateAct = (index, {id, ...body}) => ({
    type: types.UPDATE_ACT,
    method: 'PUT',
    path: `/acts/${id}`,
    body
})

export const deleteAct = (index) => ({
    type: types.DELETE_ACT,
    method: 'DELETE',
    path: `/acts/${index}`
})