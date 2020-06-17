import React, { Component } from 'react';
import './App.css';

class Twitter extends Component {
    state = {
    twitter: []
  }

componentDidMount = () => {
  fetch('http://localhost:4000/twitterfetch')
          .then(res => res.json())
          .then(json => {

              this.setState({
                  twitter: [ { "text": json.statuses[0].text,
                                "name": json.statuses[0].user.name,
                                "screen_name": "@" + json.statuses[0].user.screen_name,
                                "image": json.statuses[0].user.profile_image_url_https},
                             { "text": json.statuses[1].text,
                              "name": json.statuses[1].user.name,
                            "screen_name": "@" + json.statuses[1].user.screen_name,
                            "image": json.statuses[1].user.profile_image_url_https},
                              { "text": json.statuses[2].text,
                              "name": json.statuses[2].user.name,
                            "screen_name": "@" + json.statuses[2].user.screen_name,
                            "image": json.statuses[2].user.profile_image_url_https}]


              })
              console.log(this.state.twitter);
          }).catch((err) => {
              console.log(err);
          });

}

    render(){



      return (
        <div>
        <div className = 'title'>
        Twitter Feed
        </div>
        <div className = "size">
        {this.state.twitter.map(twit => (



        <ul className = 'list'>
        <li className = 'items'>
        <div className = 'inlist'>
        <img src = {twit.image} className = "pic" />
        <div>
        <p>{twit.name}</p>
        <p>{twit.screen_name}</p>
        </div>
        </div>
        </li>
        </ul>


))}
</div>
</div>

      )
    }
}

export default Twitter;
