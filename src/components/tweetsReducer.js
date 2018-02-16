const defaultState = {
  tweets: [],
  fetching: false,
  fetched: false,
  error: null
}
const tweetsReducer = (state = defaultState, action)=>{
  switch(action.type){
    case "FETCH_TWEETS_PENDING":{
      return {...state,
        fetched: false,
        error: null,
        fetching: true
      }
    }
    case "FETCH_TWEETS_REJECTED":{
      return {...state,
        fetching: false,
        fetched: false,
        error: action.payload
      }
    }
    case "FETCH_TWEETS_FULFILLED":{
      return {...state,
        fetched: true,
        fetching: false,
        error: false,
        tweets: action.payload
      }
    }
    default:
      return state;
  }
}

export default tweetsReducer;