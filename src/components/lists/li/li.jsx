import React from 'react';


class Li extends React.Component{
    constructor(props){
        super(props);
        
    }




    render(){
        return(
                <div>
                    {this.props.items.map(item => (<li className='list-group-item'>{item.text}</li>))}
                </div>
        )
    }
}



export default Li;