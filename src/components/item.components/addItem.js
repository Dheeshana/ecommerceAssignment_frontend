import React, {Component} from "react";
import axios from "axios";

class AddItem extends Component{
    constructor(props) {
        super(props);

        this.onNameChange = this.onNameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onSizeChange = this.onSizeChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name : '',
            description: '',
            price: '',
            size: '',
            categories: [],
            category: ''
        }


    }

    componentDidMount() {
        axios.get('http://localhost:5000/category/')
            .then(response => {
                if(response.data.length > 0 ){
                    this.setState({
                        categories : response.data.map(categories => categories.title),
                        title : response.data[0].title

                    })
                }
            })
    }

    onNameChange(e){
        this.setState({
            name : e.target.value
        });
    }

    onDescriptionChange(e){
        this.setState({
            description: e.target.value
        });
    }

    onPriceChange(e){
        this.setState({
            price : e.target.value
        });
    }

    onSizeChange(e){
        this.setState({
            size: e.target.value
        });
    }

    onCategoryChange(e){
        this.setState({
            category : e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();

        const Item = {
            name : this.state.name,
            description: this.state.description,
            price: this.state.price,
            size: this.state.size,
            category: this.state.category

        };

        axios.post('http://localhost:5000/items/add', Item)
            .then(res => console.log(res.data));


        window.location = '/';
    }

    render() {
        return(
            <div className="container">
                <h4>Item Details</h4>
                <br/>
                    <form className="container" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name :</label>
                            <input id="name" type="text" placeholder={"Item Name"} className="form-control" onChange={this.onNameChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description :</label>
                            <input id="description" type="text" className="form-control" placeholder={"Description"} onChange={this.onDescriptionChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="price"> Price :</label>
                            <input required="true" className="form-control" placeholder={"Price"} id="price" type="number" onChange={this.onPriceChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="size"> Size :</label>
                            <div className={"col-sm-10"}>
                                <select required={"true"} className={"form-control"} onChange={this.onSizeChange}>
                                    <option className={"dropdown-item"} >Select a Size</option>
                                    <option className={"dropdown-item"} >Small</option>
                                    <option className={"dropdown-item"} >Medium</option>
                                    <option className={"dropdown-item"} >Large</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="category"> Category :</label>
                            <select required={true} className={"form-control"} onChange={this.onCategoryChange}>
                                {
                                    this.state.categories.map(function (category) {
                                        return <option key={category} value={category} > {category}</option>;

                                    })
                                }
                            </select>
                        </div>

                        <button className="btn btn-success">Add Item</button>

                    </form>
            </div>

    );
    }
}

export default AddItem;
