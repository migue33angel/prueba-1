import React from "react";
import ReactDOM from "react-dom";
import Heading from './heading';
import Row from './row';

import * as timeago from 'timeago.js';

class Head extends React.Component {
    render() {
      
        return (<thead>
            <tr>
                {this.props.headings.map((heading, i) => {

                    return <Heading key={i} heading={heading} />
                })
                }
            </tr>
        </thead>)
    }
}

class Tbody2 extends React.Component {
    render() {
        return (
            <tbody>
            {this.props.data.map((row, i) => {

                return <Row key={i} change={row} />

            })

            }</tbody>

        )
    }
}

class App extends React.Component {
constructor ()
{

    super();
    this.state={

        data:[]
    };
}


/*PETICION ASINCRONA POR TIEMPO DE CARGA DE OTRO SITIO WEB */ 
     componentDidMount()
    {
       setInterval( async() => {
        const res =await  fetch('http://openlibrary.org/recentchanges.json?limit=10');
        const data2 = await res.json();
       const formatData = this.formatData(data2);
        console.log (formatData);
        this.setState({data:formatData})
       }, 1000);
    }
    
    formatData(data){
        return data.map((data,i )=>{
        return {
            'when':  timeago.format(data.timestamp),
            'who':data.author.key,
            description: data.comment
        }
           


        })


    }
    render() {
        console.log(this.props.title);
        console.log(this.props.headings);
        return (
            <div className="container p-4">
                <h1>{this.props.title}</h1>
                <table className="table table-bordered">

                    <Head headings = {this.props.headings} />

                    <Tbody2 data={this.state.data}  />
                </table>
            </div>

        )
    }
}
export default App;