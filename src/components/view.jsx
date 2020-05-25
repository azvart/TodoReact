import React from 'react';
import Add from './lists/add';
import Complete from './lists/complete';
import Delete from './lists/delete';

import { Row, Col } from 'antd';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class View extends React.Component{




    render(){
        return(
            <div className='text-center my-3'>
                <BrowserRouter>
                <Row gutter ={16}>
                    <Col className="gutter-row" span={6}>
                        <Link to='/add' className='mx-2'>Add</Link>
                        <Link to='/complete' className='mx-2'>Complete</Link>
                        <Link to='/delete' className='mx-2'>Delete</Link>
                    </Col>
                </Row>
                
                    <Route path = '/add' render={()=><Add />} />
                    <Route path = '/complete' render={()=><Complete />} />
                    <Route path = '/delete' render={()=><Delete />} />

                </BrowserRouter>
            </div>
        )
    }
}



export default View;