import React from "react";
import Datalist from "../Components/Dashboard";
import {dataList} from '../Actions/DashboardAction';
import {connect} from 'react-redux';
import Button from "../Components/Button";
import Modal from '../Components/Modal/Modal';

class Dashboard extends React.Component{

	componentDidMount(){
		this.props.dispatch(dataList());
	}

    render(){
			
        return(
			<div className="col-xs-12 col-lg-12">
			    <h1>Total Entries</h1>
				<Modal />
				<Button type="button" className="btn btn-primary" name="addNew" text="Add New" />
				 <Datalist dataSet = {this.props.dataset}/>
			</div>
		);
	}
}

function mapStateToProps(state){
    return {
        dataset : state.dataset.dataset
    };
}

export default connect(mapStateToProps,null)(Dashboard);