import {GET_LIST_FRIENDS} from './define'

export const getListFriend = (listFriend) => (
    {
        type: GET_LIST_FRIENDS,
        listFriend
    }
)
