import React from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends React.Component{
    state ={
        hasError: false,
        error: ''
    };

    componentDidCatch(error: Error) {
        this.setState({
            hasError: true,
            error: error
        });
    }

    render() {
        if(this.state.hasError){
            return <ErrorIndicator error={this.state.error}/>
        }
        return this.props.children;
    }
}
