class HelloMessage extends
React.Component{
    render(){
        return(
            <div>salut {this.props.name}</div>
        );
    }
}

ReactDom.render(
    <HelloMessage name="Henri"/>,
    document.getElementById('Hello example')
)