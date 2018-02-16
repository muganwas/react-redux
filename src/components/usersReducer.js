const defaultState = {
  users: [],
  fetching: false,
  fetched: false,
  error: null
}
const usersReducer = (state = defaultState, action)=>{
    switch(action.type){
        case "FETCH_USERS_PENDING":{
          return {...state,
            fetched: false,
            error: null,
            fetching: true
          }
        }
        case "FETCH_USERS_REJECTED":{
          return {...state,
            fetching: false,
            fetched: false,
            error: action.payload
          }
        }
        case "FETCH_USERS_FULFILLED":{
          return {...state,
            fetched: true,
            fetching: false,
            error: false,
            users: action.payload
          }
        }
        default:
            return state;
    }  
}

export default usersReducer;