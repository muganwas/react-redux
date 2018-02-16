import axios from 'axios';
export function usertweets(){
    return {
        type: "FETCH_TWEETS_FULFILLED",
        payload: {
            tweet1: "Give me a cookie",
            tweet2: "Hello there"
        }
    }
}
export function userDits() {
    return {
        type: "FETCH_USERS",
        payload: axios.get("http://rest.learncode.academy/api/muganwas/friends")
    }
}
