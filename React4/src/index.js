import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
// import CommentDetail from './CommentDetail';
import People from './People';


import NewApproval from './NewApproval';

const peoples = [
    {author:"Ram", time:"Yesterday was sunday", text:"Today is a good day", image:"sho.jpg"},
    {author:"Hello", time:"Today at 10 Am", text:"Today is a Sunny day",image:"sho.jpg"},
    {author:"Alex" , time:"Today at 10 Am", text:"Lets Explore",image:"sho.jpg"},
    {author:"john" , time:"Today at 10 Am", text:"I love Travelling",image:"sho.jpg"}
]

const App = () => {
    return (
        <div className="ui container comments">
            <NewApproval>
            {peoples.map((people) => <People name={people.author} time={people.time} text={people.text} images={people.image}/>)}
            </NewApproval>
            </div>
    );
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);