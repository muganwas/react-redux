
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { usertweets } from './components/funcs';
import { userDits } from './components/funcs';
@connect((store)=>{
  return {
    users: store.users.users,
    usersFetched: store.users.fetched,
    tweets: store.tweets.tweets,
    tweetsFetched: store.tweets.fetched
  }
})
class App extends Component {
  componentWillMount(){
    this.props.dispatch(usertweets());
    this.props.dispatch(userDits());
  }
  displayTweets = (value)=>{
    return(
      <div key={ value } >
        { value }
      </div>
    )
  }
  displayUsers = (users)=>{
    let uKey = users.id;
    return(
      <div key={ uKey }>
        { users.name } &nbsp;
        { users.village } &nbsp;
        { uKey }
      </div>
    )
  }
  render(){
    let aKey = this.props.tweets;
    let uaKey = this.props.users; 
    let users = {...(uaKey.data)};
    return(
      <div>
        { Object.values(aKey).map(this.displayTweets) }
        { Object.values(users).map(this.displayUsers) }
      </div>
    )
  }
}
export default App;