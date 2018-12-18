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
                return  <tr>
                        <td>{index+1}</td>
                        <td>{currRow.email}</td>
                        <td>{currRow.name}</td>
                        <td><Button type="button" name="edit" text="Edit" /></td>
                        <td><Button type="button" name="delete" text="Delete" /></td>
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
                    {dataSet}
                </tbody>
            </table>
            
        );
    }
        
}

export default Dashboard;