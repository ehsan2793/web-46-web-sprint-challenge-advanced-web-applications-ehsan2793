import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import fetchColorService from '../services/fetchColorService';

import axios from "axios"
import axiosWithAuth from '../helpers/axiosWithAuth'
const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  // console.log('====================================');
  // console.log('this is res', fetchColorService());
  // console.log('====================================');


  // console.log('this is colors', colors)

  // useEffect(() =>{
  //   axios.get(fetchColorService())
  //   .then((response) => {
  //     setColors(response.data);
  //   })
  // },[])


  const fetchColorService = () => {
    axiosWithAuth()
      .get(`/colors`)
      .then((res) => {
        // console.log(res.data);
        setColors(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchColorService();
  }, []);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    axiosWithAuth()
      .put(`/colors/${editColor.id}`, editColor)
      .then(res => fetchColorService())
      .catch(err => console.log(err))
  };

  const deleteColor = (colorToDelete) => {
    axiosWithAuth()
      .delete(`/colors/${colorToDelete.id}`)
      .then(res => fetchColorService())
      .catch(err => console.log(err))
  };

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor} />
      <Bubbles colors={colors} />
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete toggleEdit, saveEdit, deleteColor and functions
