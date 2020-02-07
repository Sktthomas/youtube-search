import React from 'react';
import SearchBar from './SearchBar'
import Youtube from '../api/youtube'

class App extends React.Component{
    onTermSubmit = (term) => {

        Youtube.get('/search', {
            params: {
                q: term
            }
        });
    };
    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
        )
    }
}

export default App;