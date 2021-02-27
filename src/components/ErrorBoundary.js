import React, {Component} from 'react';


class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state={
            isError:false
        }
    }

    componentDidCatch(error,info){
        this.setState({isError:true});
    }

    render(){
        if (this.state.isError===true){
           return <h1>Oops. Something went wrong</h1>
        } else return (
            this.props.children
        )

    }
}

export default ErrorBoundary;