import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newstate = {...state};
      // newstate[post.id] = post;
      // return newstate;

      return {...state, [action.payload.data.id]:action.payload.data};

    case FETCH_POSTS:
   //  console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}


// const posts= [
//   {id: 4, title: "Hi"}
//  ]
//
// posts
//
// const state =_.mapKeys(posts, 'id')
// state["4"]
