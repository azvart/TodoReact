import React from 'react';
import { Checkbox, Button } from 'antd';


class Li extends React.Component{
    constructor(props){
        super(props);
        
    }




    render(){
        return(
                <div>
                    {this.props.items.map(item => (<li className='list-group-item'><Checkbox>{item.text}<Button type='primary'>Del</Button></Checkbox></li>))}
                </div>
        )
    }
}



export default Li;