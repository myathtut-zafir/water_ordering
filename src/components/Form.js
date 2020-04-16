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
    buildingNumberRef = createRef();
    houseNumberRef = createRef();
    streetRef = createRef();
    wardRef = createRef();
    townshipRef = createRef();
    brandRef = createRef();
    order_amountRef = createRef();
    empty_water_bootleRef = createRef();

    insertOrder = () => {
        let data = {};
        data.name = this.nameRef.current.value;
        data.phoneNumber = this.phoneNumber.current.value;
        data.familyMember = this.familyMemberRef.current.value;
        data.buildingNumber = this.buildingNumberRef.current.value;
        data.houseNumber = this.houseNumberRef.current.value;
        data.street = this.streetRef.current.value;
        data.ward = this.wardRef.current.value;
        data.township = this.townshipRef.current.value;
        data.brand = this.brandRef.current.value;
        data.order_amount = this.order_amountRef.current.value;
        data.empty_water_bootle = this.empty_water_bootleRef.current.value;

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
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.buildingNumberRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">အိမ်နံပတ် </label>
                                <input type="text" className="form-control" id="phoneNumber"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.houseNumberRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">လမ်းနံပတ် </label>
                                <input type="text" className="form-control" id="phoneNumber"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.streetRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">ရပ်ကွက် </label>
                                <input type="text" className="form-control" id="phoneNumber"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.wardRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">မြို့နယ် </label>
                                <input type="text" className="form-control" id="phoneNumber"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.townshipRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">မှာယူလိုသည့် ရေသန့် နာမည် </label>
                                <input type="text" className="form-control" id="brand"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.brandRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">မှာယူလိုသည့် ရေသန့် အရေအတွက် </label>
                                <input type="text" className="form-control" id="brand"
                                       aria-describedby="emailHelp" placeholder="Enter..." ref={this.order_amountRef}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">လက်ရှိ အိမ်တွင်ရှိသော ရေသန့် ဗူးအခွံ
                                    အရေအတွက် </label>
                                <input type="text" className="form-control" id="brand"
                                       aria-describedby="emailHelp" placeholder="Enter..."
                                       ref={this.empty_water_bootleRef}/>
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

