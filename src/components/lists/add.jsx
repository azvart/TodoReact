import React from 'react';
import Li from './li/li';

class Add extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        
        // this.add = this.add.bind(this);
        // this.text = this.text.bind(this);
    }

    // text(e){
    //     this.setState({ text: e.target.value });
    // }

    // add(){

    //     if (this.state.text.length === 0) {
    //         return;
    //       }
    //       const newItem = {
    //         text: this.state.text,
    //         id: Date.now()
    //       };
    //       this.setState(state => ({
    //         items: state.items.concat(newItem),
    //         text: ''
    //       }));
        
        
    // }



    render(){
        return(
            <div className='row'>
                <div className='col-lg-12'>
                    
                        <input type="text" className="form-control my-3" />
                        <button className='btn btn-primary my-3' >Add</button>
                    
                </div>
                <div className='col-lg-12'>
                    <ul className='list-group'>
                        <Li list = { this.props.store.add} />
                    </ul>
                </div>
            </div>
        )
    }
}


export default Add;