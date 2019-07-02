import React, {Component} from 'react';

class StoryListItem extends Component
{
    

    render(){

        const {index, story} = this.props;
        const upvote_link = `vote?${story.id}=&how=up&goto=news`;
        const upvote_id = `up_${story.id}`;

        return (<li className="story-item">
                <a href={upvote_link} id={upvote_id} className="upvote">up vote</a> &nbsp;
                <a href={story.url}>{story.title}</a> &nbsp;
                <a href="from?{story.url}">(site)</a> &nbsp;
                {story.score} points by <a href="user?id={story.by}">{story.by}</a>  &nbsp;| &nbsp;
                <a href="">hide</a>  &nbsp;| &nbsp;
                <a href="">{story.descendants} comments</a> 
            </li>)
    }
}

export default StoryListItem;