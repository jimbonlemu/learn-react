import React from "react";

class Footer extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>KAKI KAKIAN</h1>
                {this.props.paragraf()}
            </div>
        );
    }
}
export default Footer;