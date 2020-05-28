import React from 'react';
import { Checkbox, Button } from 'antd';

import {
    CloseCircleOutlined
  } from '@ant-design/icons';

class Li extends React.Component{
    
    constructor(props){
        super(props);
        this.change = this.change.bind(this);
        this.del = this.del.bind(this);
       
    }

    change(){
        let e = window.confirm('Do you want to Complete this Task?');
        if(e === true){
            alert('True');
        }
        else{
            
            alert('False');
        }
    }

    del(){
        let d = window.confirm('Do you want delete this Task?');

        if(d === true){
            alert('True');
        }else{
            alert('False');
        }
    }




    render(){
        return(
                <div>
                    {/* { this.props.list.items.map(item => (
                        <li className='list-group-item'><Checkbox onClick={this.change}>{item.text}<Button type='primary align-middle mx-2' size='small' shape='circle'icon={<CloseCircleOutlined style={{fontSize:'18px',display:'flex',justifyContent:'center'}} />} onClick={this.del}></Button></Checkbox></li>
                    ))} */}
                </div>
        )
    }
}



export default Li;


