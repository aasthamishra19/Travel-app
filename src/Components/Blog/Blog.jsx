import React from 'react';
import './blog.scss';

import aa from "../../aa.jpg";
import de from "../../de.jpg";
import tr from "../../tr.jpg";
import cc from "../../cc.jpg";

const blogPosts = [
    {
        id: 1,
        title: 'Exploring the Beauty of Nature',
        excerpt: 'Discover the serene beauty of nature with our guide to the most breathtaking landscapes.',
        image: aa,
        link: '#'
    },
    {
        id: 2,
        title: 'Top 10 Travel Destinations',
        excerpt: 'From the bustling streets of Tokyo to the tranquil beaches of Bali, find your next adventure.',
        image: de,
        link: '#'
    },
    {
        id: 3,
        title: 'How to Travel on a Budget',
        excerpt: 'Learn tips and tricks for traveling without breaking the bank. Enjoy your journey while saving money.',
        image: tr,
        link: '#'
    },
    {
        id: 4,
        title: 'Cultural Experiences Around the World',
        excerpt: 'Immerse yourself in diverse cultures and traditions through unique travel experiences.',
        image: cc,
        link: '#'
    }
];

const Blog = () => {
    return (
        <section id="blog" className="blog section container">
            <div className="secContainer">
                <div className="secHeader">
                    <h2 className="secTitle">Our Blog</h2>
                    <p>Read our latest articles and insights on travel, culture, and more.</p>
                </div>

                <div className="blogContent">
                    {blogPosts.map(post => (
                        <div className="blogPost" key={post.id}>
                            <div className="postImage">
                                <img src={post.image} alt={post.title} />
                            </div>
                            <div className="postContent">
                                <h3 className="postTitle">{post.title}</h3>
                                <p className="postExcerpt">{post.excerpt}</p>
                                <a href={post.link} className="readMore">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
