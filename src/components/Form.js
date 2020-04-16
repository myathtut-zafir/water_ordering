import React, {Component, createRef} from "react";
import {insert} from "../actions/insertActionsFirebase";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

class Form extends Component {
    state = {
        redirectToReferrer: false
    };

    phoneNumber = createRef();
    familyMemberRef = createRef();
    nameRef = createRef();
    buildingNumber = createRef();
    houseNumber = createRef();
    street = createRef();
    ward = createRef();
    township = createRef();
    brand = createRef();
    order_amount = createRef();
    empty_water_bootle = createRef();

    insertOrder = () => {
        let data = {};
        data.name = this.nameRef.current.value;
        data.phoneNumber = this.phoneNumber.current.value;
        data.familyMember = this.familyMemberRef.current.value;
        data.buildingNumber = this.buildingNumber.current.value;
        data.houseNumber = this.houseNumber.current.value;
        data.street = this.street.current.value;
        data.ward = this.ward.current.value;
        data.township = this.township.current.value;
        data.brand = this.brand.current.value;
        data.order_amount = this.order_amount.current.value;
        data.empty_water_bootle = this.empty_water_bootle.current.value;

        this.setState({
            redirectToReferrer: true
        });

        this.props.insert(data);
    };

    render() {
        if (this.state.redirectToReferrer === true) {
            return <Redirect to="/"/>;
        } else {
            return (
                <React.Fragment>
                    <div>
                        <h1>ရေသန့်မှာယူရန်</h1>
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">နာမည်အပြည့်အစုံ</label>
                                <input type="text" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.nameRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">ဖုန်းနံပတ် </label>
                                <input type="text" className="form-control" id="phoneNumber"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.phoneNumber}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">မိသားစုအရေအတွက်</label>
                                <input type="number" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.familyMemberRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">တိုက်အမှတ် </label>
                                <input type="text" className="form-control" id="phoneNumber"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.buildingNumber}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">အိမ်နံပတ် </label>
                                <input type="text" className="form-control" id="phoneNumber"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.houseNumber}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">လမ်းနံပတ် </label>
                                <input type="text" className="form-control" id="phoneNumber"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.street}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">ရပ်ကွက် </label>
                                <input type="text" className="form-control" id="phoneNumber"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.ward}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">မြို့နယ် </label>
                                <input type="text" className="form-control" id="phoneNumber"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.township}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">မှာယူလိုသည့် ရေသန့် နာမည် </label>
                                <input type="text" className="form-control" id="brand"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.brand}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">မှာယူလိုသည့် ရေသန့် အရေအတွက် </label>
                                <input type="text" className="form-control" id="brand"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.order_amount}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">လက်ရှိ အိမ်တွင်ရှိသော ရေသန့် ဗူးအခွံ
                                    အရေအတွက် </label>
                                <input type="text" className="form-control" id="brand"
                                       aria-describedby="emailHelp" placeholder="Enter..."
                                       ref={this.empty_water_bootle}/>
                            </div>

                            <a className="btn btn-primary" onClick={this.insertOrder}>Submit</a>
                        </form>
                    </div>
                </React.Fragment>
            )
        }

    }

}

const mapStateToProps = state => ({});

export default connect(
    mapStateToProps,
    {
        insert,
    }
)(Form);

