import React, {useEffect, useState} from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';


function Feed() {
    const posts=[]

    // to keep track of the post

    return (
        <div className="feed">
            {/* Story Reel */}
            <StoryReel/>
            {/* Message Sender */}
            <MessageSender/>
            {/* Post */}
            
            {posts.map((post) => (
            <Post
            // key={post.data.id}
            key="34543"
            // profilePic={post.data.profilePic}
            profilePic=""
            // message={post.data.message}
              message="nbjkguhv"
            // timestamp={post.data.timestamp}
            timestamp={new Date()}
            // username={post.data.username}
            username="hfgjb"
            // image={post.data.image}
            image=""
            />
        ))}
        </div>
    )
}

export default Feed
