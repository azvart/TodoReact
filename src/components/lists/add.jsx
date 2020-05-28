import React from 'react';
import Li from './li/li';

class Add extends React.Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = this.props.store.add;
        this.add = this.add.bind(this);
        this.texts = this.texts.bind(this);
    }
    texts(e){
       this.setState({ text: e.target.value });
    }
    add(){
        if(this.state.text.length === 0){
            return;
        }
       const newText = {
           text: this.state.text,
           items: Date.now()
       }
       
       this.setState(state => ({
        items: state.items.concat(newText),
        text: ''
      }));

       
      
        

    }


    render(){
        return(
            <div className='row'>
                <div className='col-lg-12'>
                    
                        <input type="text" className="form-control my-3" onChange = {this.texts}/>
                        <button className='btn btn-primary my-3' onClick = {this.add} >Add</button>
                    
                </div>
                <div className='col-lg-12'>
                    <ul className='list-group'>
                        <Li list = {this.props.store.add} />
                    </ul>
                </div>
            </div>
        )
    }
}


export default Add;