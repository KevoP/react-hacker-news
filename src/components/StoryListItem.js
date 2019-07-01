import React, {Component} from 'react';

class StoryListItem extends Component
{
    

    render(){

        const {index, story} = this.props;

        return (<li>
                <div>
                    {index + 1}. &nbsp;
                    <a href="vote?{story.id}=&how=up&goto=news" id="up_{story.id}" className="upvote">up vote</a> &nbsp;
                    <a href="{story.url}">{story.title}</a> &nbsp;
                    <a href="from?{story.url}">(site)</a> &nbsp;
                </div>
                <div>
                    {story.score} points by <a href="user?id={story.by}">{story.by}</a>  &nbsp;| &nbsp;
                    <a href="">hide</a>  &nbsp;| &nbsp;
                    <a href="">{story.descendants} comments</a> 
                </div>
            </li>)
    }
}

export default StoryListItem;