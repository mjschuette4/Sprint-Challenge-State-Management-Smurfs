import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { smurfAdd } from "../actions/actions";
import { Button, Input, Form } from 'reactstrap';

const Card = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        name: "",
        age: "",
        height: "",
        id: Date.now()
    });

    const handleChanges =e  => {
        setData({ ...data, [e.target.name]: e.target.value })
    };

    return (
        <Form className='Card'
				onSubmit={e => {
					e.preventDefault();
					dispatch(smurfAdd(data));
					setData({ name: "", age: "", height: "", id: Date.now() });
				}}>
				<Input type="text" name="name" placeholder="Smurf Name" onChange={handleChanges}  />
				<br />
				<Input type="text" name="age" placeholder="Smurf Age" onChange={handleChanges} />
				<br />
				<Input type="text" name="height" placeholder="Smurf Height" onChange={handleChanges} />
				<br />
				<Button color='info'>Add Smurf</Button>
			</Form>
    );
};

export default Card;