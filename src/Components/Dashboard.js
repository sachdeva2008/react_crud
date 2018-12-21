import React from "react";
import Button from "./Button"; 
  
class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        let dataSet = null;
        if(this.props.dataSet){
            dataSet = this.props.dataSet.map((currRow,index)=>{
                return  <tr key={currRow.id}>
                        <td>{index+1}</td>
                        <td>{currRow.email}</td>
                        <td>{currRow.name}</td>
                        <td><Button type="button" name="edit" text="Edit" onClick={this.props.editHandler.bind(this,currRow.id)} /></td>
                        <td><Button type="button" name="delete"
                             text="Delete" onClick = {this.props.deleteRecordHandler.bind(this,currRow.id)}/></td>
                    </tr>
            });
        }
    
        return (
            
            
            <table className="table table-bordered table-dark">
                <thead>
                    <tr>
                    <th scope="col">S.no.</th>
                    <th scope="col">Email</th>
                    <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                <React.Fragment key="123">
                       {dataSet}   
                       </React.Fragment>   
                    
                </tbody>
            </table>
           
            
        );
    }
        
}

export default Dashboard;