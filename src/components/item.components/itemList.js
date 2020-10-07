import React, {Component} from "react";
import axios from 'axios';
import {Link, Router} from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";

const Item = props => (

    <Card className={"classes.root"}>
        <CardActionArea >
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    <p>{props.item.description}</p>
                    <p> Size : {props.item.size}</p>
                    <p> Price : {props.item.price}</p>
                    <p> Category : {props.item.category}</p>
                </Typography>
                <Link to={"/edit/" +props.item._id}><i className={"fa fa-edit"}/> EDIT</Link> | <a href={"#"} onClick={() => {props.deleteItem(props.item._id)}} style={{color : "red"}}><i className={"fa fa-trash"}/> DEL</a>
            </CardContent>
        </CardActionArea>
    </Card>

);

class ItemList extends Component{

    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);

        this.state = {items : []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/items/')
            .then(response => {
                this.setState({items : response.data})
            })
            .catch(error => {
                console.log(error);
            })

    }

    deleteItem(id){
        axios.delete('http://localhost:5000/items/' +id)
            .then(res => console.log(res.data))
        this.setState({
            items: this.state.items.filter(el => el._id !== id)
        })
    }

    itemList(){
        return this.state.items.map(currentitem => {
            return <Item item={currentitem} deleteItem={this.deleteItem}  key={currentitem._id}/>;
        })
    }

    render() {
        return (
            <Container maxWidth={"lg"} className={"list container"}>
            <h3>Items In Database</h3>
        <div className={"row"}>
            {this.itemList()}
        </div>
        </Container>
        );
    }
}

export default ItemList;
