import React, {Component} from 'react';
import Nav from './Nav';
import Footer from './Footer';
import StoryListItem from './StoryListItem';

class App extends Component {

    /**
     * Props don't exist on this before constructor
     * must call super?
     */
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }
    }

    /**
     * the component is about to mount
     * 'this' is available now
     * not used very often
     */ 
    componentWillMount(){
        console.log('will mount');
    }

   /**
    * liable to change state
    * triggers a re-render
    * used a lot
    */
    componentDidMount(){
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
            .then(res => res.json())
            .then((json) => {
                Promise.all(
                    json.slice(0,30).map( storyId => 
                        fetch('https://hacker-news.firebaseio.com/v0/item/' + storyId  + '.json?print=pretty')
                            .then(story => story.json())
                    )     
                )
                .then(stories => {
                    this.setState({
                        isLoaded: true,
                        items: stories
                    });
                })
            });
    }
     
    render = () => {
        const { isLoaded, items } = this.state;
        if(!isLoaded){
            return (<div className="loading">Loading...</div>);
        }

        return (
        <div className="App">
            <Nav />
            <div className="site_main">
                <ul>
                    {items.map( (story, index) => <StoryListItem key={index} story={story} index={index}/> )}
                </ul>
            </div>
            <a href="#">More</a>
        <Footer />
        </div>
    )}
}

export default App;
