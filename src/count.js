// import React from 'react'

// const Count=()=>{
//     console.log(this.props)
//     return <h1> hello react</h1>

// }
import React, { Component } from 'react'

 class count extends Component {
     constructor(props){
         super(props)
         this.state={
             count:0
         }
     }
     clickHandler=()=>{
         this.setState({count:this.state.count+1})
     }

    render() {
        // const{name,country}=this.props
        const{count} = this.state
    
        return (
            <div>
                <h1> Counts  : {count}</h1>
                <button onClick={this.clickHandler}>click</button>
            </div>
        )
    }
}

export default count



// export default Count
