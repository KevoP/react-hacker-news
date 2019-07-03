import React, {Component} from 'react';

class StoryListItem extends Component
{
    

    render(){

        const {index, story} = this.props;
        const upvote_link = `vote?${story.id}=&how=up&goto=news`;
        const upvote_id = `up_${story.id}`;

        return (
            <li className="story-item">
                <div class="flex">
                    <a href={upvote_link} id={upvote_id} className="upvote">up vote</a>
                    <a href={story.url}>{story.title}</a>
                    <a href="from?{story.url}">(site)</a>
                    <p>
                        {story.score} points by <a href="user?id={story.by}">{story.by}</a>  &nbsp;| &nbsp;
                        <a href="">hide</a>&nbsp;| &nbsp; <a href="">{story.descendants} comments</a>
                    </p>
                </div>    
            </li>)
    }
}

export default StoryListItem;