import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TablePagination from "../../Pagination/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faEye,
  faEyeSlash,
  faXmark,
  faCalendar,
  faPaperclip,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import "./TenantPage.css";
import "./OrderPage.css";
import "./CustomerPage.css";
import "./ProfilePage.css";
import logo from "../../icons/Logo.png";
import recommended from "../../icons/Recommend.png";
import NumberFormat from "react-number-format";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { connect } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import searchicon from "../../icons/Search.svg";
import { useHistory } from "react-router-dom";
import { BlockPicker } from "./colorpalette/index";
import DatePicker from "./datepicker/components/date_picker/date_picker";
import inputimage from "../../icons/Edit Profile Pict.png";
import { useNeonCheckboxStyles } from "./checkbox/index";
import { useMinimalSelectStyles } from "./select/index";
import { useOutlineSelectStyles } from "./select1/index";
import { useTimeSelectStyles } from "./select2/index";
import { useOutlineSelect2Styles } from "./select3/index";




function TenantPage({ tenant }) {
  const [page, setPage] = useState(0);
  const [orderpage, setOrderPage] = useState(0);
  const [customerpage, setCustomerPage] = useState(0);
  const rowsPerPage = 6;
  const rowsPerPage2 = 7;

  let history = useHistory();

  function routeChange() {
    history.push("/tenantdetails");
  }

  const [formValues, setFormValues] = useState("");
  const [tenantopen, settenantopen] = useState(false);
  const handletenantopen = () => settenantopen(true, console.log("clicked"));
  const handletenantclose = () => settenantopen(false);

  const [orderopen, setOrderopen] = useState(false);
  const handleOrderopen = () => setOrderopen(true, console.log("clicked"));
  const handleOrderclose = () => setOrderopen(false);

  const [restaurantname, setRestaurantname] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [customername, setCustomerName] = useState("");
  const [customerphone, setCustomerPhone] = useState("");
  const [instruction, setInstruction] = useState("");
  const [table, setTable] = useState("");
  const [orderitems, setOrderitems] = useState([]);
  const [itemtotal, setItemtotal] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [service, setService] = useState("");
  const [tax, setTax] = useState("");
  const [index, setIndex] = useState(1);
  const [orderindex, setOrderIndex] = useState(1);
  const [customerindex, setCustomerIndex] = useState(1);

  const OrderData = [
    {
      id: 1,
      order_ID: "ODR - 1629840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 220000,
      status: 1,
      orderplaced: 30,
      accepted: 1,
      customername: "Chris",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
        {
          id: 3,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 4,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 4,
    },
    {
      id: 2,
      order_ID: "ODR - 1629840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 3,
      orderplaced: 30,
      accepted: 4,
      customername: "John",
      customerphone: "0899872679",
      instruction: "no sambal",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 3,
      order_ID: "ODR - 1629840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 2,
      orderplaced: 30,
      accepted: 2,
      customername: "Angel",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 4,
      order_ID: "ODR - 1629840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 1,
      orderplaced: 30,
      accepted: 1,
      customername: "Jesslyn",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 5,
      order_ID: "ODR - 1629840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 2,
      orderplaced: 30,
      accepted: 2,
      customername: "Lina",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 6,
      order_ID: "ODR - 1629840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 4,
      orderplaced: 30,
      accepted: 3,
      customername: "Ivan",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 7,
      order_ID: "ODR - 1629840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 5,
      orderplaced: 30,
      accepted: 4,
      customername: "Farah",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 8,
      order_ID: "ODR - 1629840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 1,
      orderplaced: 30,
      accepted: 1,
      customername: "Pia",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 9,
      order_ID: "ODR - 1629840586",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 1,
      orderplaced: 30,
      accepted: 1,
      customername: "Chris",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 10,
      order_ID: "ODR - 1629840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 4,
      orderplaced: 30,
      accepted: 3,
      customername: "Chris",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 11,
      order_ID: "ODR - 1629841588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 3,
      orderplaced: 30,
      accepted: 4,
      customername: "Chris",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 12,
      order_ID: "ODR - 1619840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 2,
      orderplaced: 30,
      accepted: 2,
      customername: "Chris",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 13,
      order_ID: "ODR - 1629840558",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 1,
      orderplaced: 30,
      accepted: 1,
      customername: "Chris",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 14,
      order_ID: "ODR - 1629840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 3,
      orderplaced: 30,
      accepted: 4,
      customername: "Chris",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 15,
      order_ID: "ODR - 1629840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 2,
      orderplaced: 30,
      accepted: 2,
      customername: "Chris",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
    {
      id: 16,
      order_ID: "ODR - 1629840588",
      time: "59 minutes ago",
      table_ID: 12,
      totalprice: 110000,
      status: 1,
      orderplaced: 30,
      accepted: 1,
      customername: "Chris",
      customerphone: "0899872679",
      instruction: "no onions",
      menu: [
        {
          id: 1,
          name: "Gurame Asam Manis",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 10,
          description: "Lalala",
          recommended: true,
        },
        {
          id: 2,
          name: "Gurame Asam Pedas",
          uri: "../../icons/Gurame Asam Manis.png",
          price: 65000,
          quantity: 20,
          description: "Lalalalalalalala",
          recommended: false,
        },
      ],
      totalitems: 2,
    },
  ];

  const CustomerData = [
    {
      id: 1,
      customername: "Chris",
      customerphone: "089998983929",
      lastorder: "28 October 2021, 10:21 AM",
      status: 1,
    },
    {
      id: 2,
      customername: "Chris",
      customerphone: "089998983929",
      lastorder: "28 October 2021, 10:21 AM",
      status: 1,
    },
    {
      id: 3,
      customername: "Chris",
      customerphone: "089998983929",
      lastorder: "28 October 2021, 10:21 AM",
      status: 2,
    },
    {
      id: 4,
      customername: "Chris",
      customerphone: "089998983929",
      lastorder: "28 October 2021, 10:21 AM",
      status: 2,
    },
    {
      id: 5,
      customername: "Chris",
      customerphone: "089998983929",
      lastorder: "28 October 2021, 10:21 AM",
      status: 2,
    },
    {
      id: 6,
      customername: "Chris",
      customerphone: "089998983929",
      lastorder: "28 October 2021, 10:21 AM",
      status: 2,
    },
    {
      id: 7,
      customername: "Chris",
      customerphone: "089998983929",
      lastorder: "28 October 2021, 10:21 AM",
      status: 2,
    },
    {
      id: 8,
      customername: "Chris",
      customerphone: "089998983929",
      lastorder: "28 October 2021, 10:21 AM",
      status: 2,
    },
    {
      id: 9,
      customername: "Chris",
      customerphone: "089998983929",
      lastorder: "28 October 2021, 10:21 AM",
      status: 2,
    },
    {
      id: 10,
      customername: "Chris",
      customerphone: "089998983929",
      lastorder: "28 October 2021, 10:21 AM",
      status: 2,
    },
  ];

  function handlePassinginfo(
    status,
    customername,
    customerphone,
    instruction,
    table,
    orderitems,
    itemtotal,
    subtotal,
    service,
    tax
  ) {
    //setRestaurantname(restaurant)
    //setTime(time)
    //setDate(date)
    setStatus(status);
    setCustomerName(customername);
    setCustomerPhone(customerphone);
    setInstruction(instruction);
    setTable(table);
    setOrderitems(orderitems);
    setItemtotal(itemtotal);
    setSubtotal(subtotal);
    setService(service);
    setTax(tax);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(formValues));
  }

  function handleChange(e) {
    setFormValues({ value: e.target.value });
  }

  const TenantData = [
    {
      id: 1,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong galalallalalalalalallala",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 2,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 3,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 2,
    },
    {
      id: 4,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 5,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 2,
    },
    {
      id: 6,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 7,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 8,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 9,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 2,
    },
    {
      id: 10,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 2,
    },
    {
      id: 11,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 1,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 2,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 2,
    },
    {
      id: 3,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 4,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 5,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 6,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 7,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 8,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 9,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 10,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 11,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 1,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 2,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 3,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 4,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 5,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 6,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 7,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 8,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 9,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 10,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
    {
      id: 11,
      name: "Telaga Seafood",
      address: "Jl. Raya Serpong",
      profileimage: "../../icons/Gurame Asam Manis.png",
      status: 1,
    },
  ];

  function TablePaginationActions(props) {
    const { count, page, onPageChange } = props;

    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
      setIndex(index - 6);
    };

    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);

      setIndex(index + 6);
    };
    console.log("index", index);
    return (
      <div className="tablecontainerbutton">
        <button
          onClick={handleBackButtonClick}
          disabled={page === 0}
          className={page === 0 ? "leftdisabledbutton" : "leftdisplaybutton"}
        >
          {" "}
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={page === 0 ? { color: "#BEBEBE" } : { color: "#949494" }}
          />
        </button>

        <button
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / 6) - 1}
          className={
            page >= Math.ceil(count / 6) - 1
              ? "rightdisabledbutton"
              : "rightdisplaybutton"
          }
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            style={
              page >= Math.ceil(count / 6) - 1
                ? { color: "#BEBEBE" }
                : { color: "#949494" }
            }
          />
        </button>
      </div>
    );
  }

  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

  function TablePaginationActionsorder(props) {
    const { count, page, onPageChange } = props;

    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
      setOrderIndex(orderindex - 7);
    };

    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
      setOrderIndex(orderindex + 7);
    };

    console.log("orderindex", orderindex);
    return (
      <div className="tablecontainerbutton">
        <button
          onClick={handleBackButtonClick}
          disabled={page === 0}
          className={page === 0 ? "leftdisabledbutton" : "leftdisplaybutton"}
        >
          {" "}
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={page === 0 ? { color: "#BEBEBE" } : { color: "#949494" }}
          />
        </button>

        <button
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / 7) - 1}
          className={
            page >= Math.ceil(count / 7) - 1
              ? "rightdisabledbutton"
              : "rightdisplaybutton"
          }
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            style={
              page >= Math.ceil(count / 7) - 1
                ? { color: "#BEBEBE" }
                : { color: "#949494" }
            }
          />
        </button>
      </div>
    );
  }

  TablePaginationActionsorder.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage2: PropTypes.number.isRequired,
  };

  function TablePaginationActionscustomer(props) {
    const { count, page, onPageChange } = props;

    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
      setCustomerIndex(customerindex - 7);
    };

    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
      setCustomerIndex(customerindex + 7);
    };
    console.log("customerindex", customerindex);
    return (
      <div className="tablecontainerbutton">
        <button
          onClick={handleBackButtonClick}
          disabled={page === 0}
          className={page === 0 ? "leftdisabledbutton" : "leftdisplaybutton"}
        >
          {" "}
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={page === 0 ? { color: "#BEBEBE" } : { color: "#949494" }}
          />
        </button>

        <button
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / 7) - 1}
          className={
            page >= Math.ceil(count / 7) - 1
              ? "rightdisabledbutton"
              : "rightdisplaybutton"
          }
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            style={
              page >= Math.ceil(count / 7) - 1
                ? { color: "#BEBEBE" }
                : { color: "#949494" }
            }
          />
        </button>
      </div>
    );
  }

  TablePaginationActionscustomer.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage2: PropTypes.number.isRequired,
  };

  //Pagination changes
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleOrderChangePage = (event, newOrderPage) => {
    setOrderPage(newOrderPage);
  };
  const handleCustomerChangePage = (event, newCustomerPage) => {
    setCustomerPage(newCustomerPage);
  };


  //handle color changes
  const [color, setColor] = useState("#424242");
  function handleChange(color) {
    setColor({ color: color.hex });
  }

  //const [TenantData, setTenantData] = useState([]);

  //use this
  // useEffect(() =>
  //     {
  //         let url = "http://localhost:5000/tenant/user";
  //         fetch(url, {
  //             method:'GET',
  //             headers:{
  //                 'Accept' : 'application/json',
  //                 'content-TYpe' : 'application/json'
  //             }
  //         }) .then(res => res.json())
  //         .then((data)=> {

  //           setTenantData(data)
  //         }

  //         ).catch(err => console.log(err))
  //       },[])

  console.log(TenantData);

  //handle select drop down
  const minimalSelectClasses = useMinimalSelectStyles();

  const menuProps = {
    classes: {
      paper: minimalSelectClasses.paper,
      list: minimalSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const iconComponent = (props) => {
    return (
      <ExpandMoreRoundedIcon
        className={props.className + " " + minimalSelectClasses.icon}
      />
    );
  };

  // search and filter
  const [search, setSearch] = useState();
  const handlesearchinput = (e) => {
    setSearch(e.target.value);
  };
  console.log("search", search);

  const [filter, setFilter] = useState(0);
  const handlefilterchange = (e) => {
    setFilter(e.target.value);
  };

  console.log("filter", filter);

  const [view, setView] = useState(false);
  function handleview() {
    if (view) {
      setView(false);
      view = !view;
    } else {
      setView(true);
    }
  }

  const [profileedit, setProfileEdit] = useState(false);
  function handleprofileedit() {
    setProfileEdit(true);
  }
  function handleprofileeditclose() {
    setProfileEdit(false);
  }
  function handlesaveprofile(){
    //save to database

    //close the modal
    handleprofileeditclose()
  }

  const [show, setShow] = useState(false);
  function handleshowpass() {
    if (show) {
      setShow(false);
      show = !show;
    } else {
      setShow(true);
    }
  }

  const [innerview, setInnerView] = useState(true);
  function handleinnerview() {
    if (innerview) {
      setInnerView(false);
      innerview = !innerview;
    } else {
      setInnerView(true);
    }
  }

  //handle opening hours
  const [openhouredit, setOpenHourEdit] = useState(false);
  const handleOpenHourEditOpen = () => setOpenHourEdit(true);
  const handleOpenHourEditClose = () => setOpenHourEdit(false);

  //button
  const buttondata = [
    {
      id: 0,
      name: "M",
      isSelected: false,
    },
    {
      id: 1,
      name: "T",
      isSelected: false,
    },
    {
      id: 2,
      name: "W",
      isSelected: false,
    },
    {
      id: 3,
      name: "T",
      isSelected: false,
    },
    {
      id: 4,
      name: "F",
      isSelected: false,
    },
    {
      id: 5,
      name: "S",
      isSelected: false,
    },
    {
      id: 6,
      name: "S",
      isSelected: false,
    },
  ];

  const [buttonclicked, setButtonClicked] = useState(buttondata);
  function handledaysbuttonclick(selecteditem) {
    const buttonToSelect = buttonclicked.map((item, index) => {
      if (selecteditem === index) item.isSelected = !item.isSelected;
      return item;
    }, []);

    setButtonClicked(buttonToSelect);
    console.log("button array", buttonclicked);
  }

  function renderButton(item, index) {
    const isSelected = buttonclicked[index].isSelected;

    return (
      <button
        type="button"
        className={isSelected ? "daysbutton" : "daysbuttonoff"}
        onClick={() => handledaysbuttonclick(index)}
      >
        {item.name}
      </button>
    );
  }

  //checkbox
  const checkdata = [
    {
      id: 0,
      name: "Open 24 Hours",
      isChecked: false,
    },
    {
      id: 1,
      name: "Closed",
      isChecked: false,
    },
  ];

  const neonStyles = useNeonCheckboxStyles();
  const [checked, setChecked] = useState(checkdata);
  const [checkbox, setCheckBox] = useState(false);
  function handlechecked(checkeditem) {
    const checkToSelect = checked.map((item, index) => {
      if (checkeditem === index) item.isChecked = !item.isChecked;
      return item;
    }, []);

    setChecked(checkToSelect);

    if (checkbox) {
      setCheckBox(false);
      checkbox = !checkbox;
    } else {
      setCheckBox(true);
    }
    console.log("check array", checked);
  }

  function renderCheck(item, index) {
    const isChecked = checked[index].isChecked;

    return (
      <FormControlLabel
        control={
          <Checkbox
            disableRipple
            checked={isChecked}
            onChange={() => handlechecked(index)}
            classes={neonStyles}
            checkedIcon={<span />}
            icon={<span />}
          />
        }
        label={item.name}
      />
    );
  }

  //time inputs
  const [opentimeh, setOpenTimeH] = useState();

  function handleopentimeh(e) {
    setOpenTimeH(e.target.value);
  }
  console.log("timeh", opentimeh);

  const [opentimem, setOpenTimeM] = useState();

  function handleopentimem(e) {
    setOpenTimeM(e.target.value);
  }

  const [closetimeh, setCloseTimeH] = useState();

  function handleclosetimeh(e) {
    setCloseTimeH(e.target.value);
  }

  const [closetimem, setCloseTimeM] = useState();

  function handleclosetimem(e) {
    setCloseTimeM(e.target.value);
  }

  function handlesavehour() {
    handleOpenHourEditClose();
    console.log(
      "time is",
      opentimeh,
      ":",
      opentimem,
      "and ",
      closetimeh,
      ":",
      closetimem
    );
    setOpenTimeH();
    setOpenTimeM();
    setCloseTimeH();
    setCloseTimeM();
  }

  //select inputs
  const [opentimeselect, setOpenTimeSelect] = useState();
  function handleopentimeselect(e) {
    setOpenTimeSelect(e.target.value);
  }

  const [closetimeselect, setCloseTimeSelect] = useState();
  function handleclosetimeselect(e) {
    setCloseTimeSelect(e.target.value);
  }
  const timeSelectClasses = useTimeSelectStyles();
  const outlineSelect2Classes = useOutlineSelect2Styles();

  // moves the menu below the select input
  const timemenuProps = {
    classes: {
      paper: timeSelectClasses.paper,
      list: timeSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const AMPMmenuProps = {
    classes: {
      paper: outlineSelect2Classes.paper,
      list: outlineSelect2Classes.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const timeiconComponent = (props) => {
    return (
      <ExpandMoreRoundedIcon
        className={props.className + " " + timeSelectClasses.icon}
      />
    );
  };

  const AMPMiconComponent = (props) => {
    return (
      <ExpandMoreRoundedIcon
        className={
          checkbox
            ? props.className + " " + outlineSelect2Classes.icondisabled
            : props.className + " " + outlineSelect2Classes.icon
        }
      />
    );
  };

  //handle contracts
  const [contract, setContract] = useState(false);

  const [addcontract, setAddContract] = useState(false);
  const handleaddcontractopen = () => {
    setAddContract(true);
  };
  const handleaddcontractclose = () => setAddContract(false);

  function handleremovecontract() {
    //delete contract

    //show add button
    setContract(false);
  }

  function handleaddcontractsave() {
    //save contract
    //set contract to show the details
    setContract(true);

    //close modal
    handleaddcontractclose();
  }

  const [startvalue, setstartValue] = useState();
  const [contractval, setContractVal] = useState();
  const [contractfile, setContractFile] = useState();

  //handle select contract
  const outlineSelectClasses = useOutlineSelectStyles();
  const outlinemenuProps = {
    classes: {
      paper: outlineSelectClasses.paper,
      list: outlineSelectClasses.list,
    },
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };
  const outlineiconComponent = (props) => {
    return (
      <ExpandMoreRoundedIcon
        className={props.className + " " + outlineSelectClasses.icon}
      />
    );
  };

  //handle save profile image
  const [profileimage, setPofileimage] = useState(tenant.profileimage);

  function imageHandler(e) {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPofileimage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  console.log("Search is", search)


  //The code start

  return (
    <div className="tenantcontainer">
      <div className={view ? "hide" : "tenanttable"}>
        <div className="tenantheader">
          <div className="tenantleft">Total tenant (41)</div>
          <div className="tenantcenter">
            <img src={searchicon} className="searchicon" />
            <input
              type="text"
              value={search}
              className="searchinput"
              placeholder="Search"
              onChange={handlesearchinput}
            />
            <button
              className={search == null || search == "" ? "hide" : "searchclosebutton"}
              onClick={() => setSearch(() => "")}
            >
              {" "}
              <FontAwesomeIcon icon={faXmark} className="closeicon" />
            </button>
          </div>
          <div className="tenantright">
            <Select
              disableUnderline
              classes={{ root: minimalSelectClasses.select }}
              IconComponent={iconComponent}
              value={filter}
              onChange={handlefilterchange}
              renderValue={(selected) => {
                if (selected === 0) {
                  return <p className="placeholder">Filter by</p>;
                }
                return selected;
              }}
              MenuProps={menuProps}
            >
              <MenuItem key={1} value="Alphabetically">
                Alphabetically
              </MenuItem>
              <MenuItem key={2} value="Location">
                Location
              </MenuItem>
              <MenuItem key={3} value="Status">
                Status
              </MenuItem>
            </Select>
            <button
              className={filter === 0 ? "hide" : "unhide"}
              onClick={() => setFilter(0)}
            >
              Clear
            </button>
          </div>
        </div>

        <div className="tenantheadertitlegrid">
          <div className="tenantheadertitle">No.</div>
          <div className="tenantheadertitle">Tenant Name</div>
          <div className="tenantheadertitle">Location</div>
          <div className="tenantheadertitle">Status</div>
        </div>

        <div className="tenantrendercontainer">
          {(rowsPerPage > 0
            ? TenantData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : TenantData
          ).map((post, i) => (
            <div className="tenantrendergrid">
              <div className="tenanttext">{i + index}</div>
              <div className="tenantprofilecontainer">
                <img
                  src={require("../../icons/Gurame Asam Manis.png")}
                  className="tenantprofile"
                />
                {post.name}
              </div>
              <div className="tenantaddresscontainer">
                <div className="clusteraddress">Greenwich Park Cluster</div>

                <div className="address">{post.address}</div>
              </div>

              <div className="status">
                {" "}
                {post.status === 1 ? (
                  <div className="openstatus">Open</div>
                ) : post.status === 2 ? (
                  <div className="closedstatus">Closed</div>
                ) : null}
              </div>
              <div className="viewdetails">
                <button className="viewbutton" onClick={() => handleview()}>
                  View Details
                </button>
              </div>
            </div>
          ))}

          <div className="tenantfooter">
            <TablePagination
              colSpan={3}
              count={TenantData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              ActionsComponent={TablePaginationActions}
            />
          </div>
        </div>
      </div>

      <div className={view ? "viewdetailscontainer" : "hide"}>
        <div className="sidepanel">
          <div className="profilecontainer">
            <img src={logo} className="profileimage" />
            <div className="profilename">Telaga Seafood</div>

            <button
              className={
                profileedit ? "profileeditbuttonactive" : "profileeditbutton"
              }
              onClick={() => handleprofileedit()}
            >
              Edit Profile
            </button>
          </div>

          <div className="profiledetailcontainer">
            <div className="profiledetails">
              <div className="profiletext">Profile Color :</div>
              <div className="profilecolor" style={{ background: "#424242" }}>
                &nbsp;
              </div>
            </div>
            <div className="profiledetails">
              <div className="profiletext">Password : </div>

              <input
                type={show ? "text" : "password"}
                value="IvanNP20"
                disabled="true"
                className="profilepassword"
              />
              <FontAwesomeIcon
                icon={show ? faEye : faEyeSlash}
                onClick={() => handleshowpass()}
                className={show ? "passwordshowicon" : "passwordicon"}
              />
            </div>
            <div className="profiledetails">
              <div className="profiletext">Contact Person :</div>
              <div className="profiletext2">089638303065</div>
            </div>
            <div className="profileaddress">
              <div className="profiletext">Address</div>
              <div className="profiletext3">
                Jl. Raya Serpong Kav. Komersial No. 6, Bumi Serpong Damai,
                Jelupang, Lengkong Karya, Kec. Serpong Utara, Kota Tangerang
                Selatan, Banten.
              </div>
            </div>
            <div className="profileopenhour">
              <div className="profiletext">Open Hour</div>
              <div className="openhourcontainer">
                <div className="openhourdetails2">
                  <div className="profiletext3">Monday</div>
                  <div className="profiletext3">Tuesday</div>
                  <div className="profiletext3">Wednesday</div>
                  <div className="profiletext3">Thursday</div>
                  <div className="profiletext3">Friday</div>
                  <div className="profiletext3">Saturday</div>
                  <div className="profiletext3">Sunday</div>
                </div>
                <div className="openhourdetails2">
                  <div className="profiletext3">8 AM-21 PM</div>
                  <div className="profiletext3">8 AM-21 PM</div>
                  <div className="profiletext3">8 AM-21 PM</div>
                  <div className="profiletext3">8 AM-21 PM</div>
                  <div className="profiletext3">8 AM-21 PM</div>
                  <div className="profiletext3">8 AM-21 PM</div>
                  <div className="profiletext3">closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="maincontainer">
          <div className="ordercontainer">
            <div className="backheader">
              <button className="backheaderbutton" onClick={profileedit? (handleprofileeditclose): () => handleview()}>
                <FontAwesomeIcon icon={faAngleLeft} className="backicon" />
                Back
              </button>

              <div className={profileedit ? "editprofileheader" : "hide"}>
                Edit Profile
              </div>
            </div>

            <div className={profileedit ? "hide" : "ordertable"}>
              <div className="orderheader">
                <div className="orderleft">
                  <div
                    className={
                      innerview ? "Orderbuttoncontainer" : "not-orderbutton"
                    }
                  >
                    <button
                      className={innerview ? "orders" : "notorders"}
                      onClick={() => handleinnerview()}
                    >
                      Orders
                    </button>
                  </div>
                  <div
                    className={
                      innerview
                        ? "not-customerbutton"
                        : "Customerbuttoncontainer"
                    }
                  >
                    <button
                      className={innerview ? "notcustomer" : "customer"}
                      onClick={() => handleinnerview()}
                    >
                      Customer
                    </button>
                  </div>
                </div>
                <div className="orderright">
                  <button className="downloadbutton">Download as PDF</button>
                </div>
              </div>
              <div className={innerview ? "orderheadertitlegrid" : "trial2"}>
                <div className="orderheadertitle">NO</div>
                <div className="orderheadertitle">ORDER ID</div>
                <div className="orderheadertitle">TOTAL</div>
                <div className="orderheadertitle">STATUS</div>
                <div className="orderheadertitle">ORDER PLACED AT</div>
                <div className="orderheadertitle">TABLE NO</div>
                <div className="orderheadertitle">ACCEPT/REJECT</div>
                <div className="orderheadertitle">VIEW ORDER</div>
              </div>

              <div className={innerview ? "trial1" : "customerheadertitlegrid"}>
                <div className="customerheadertitle">NO</div>
                <div className="customerheadertitle">NAME</div>
                <div className="customerheadertitle">PHONE NUMBER</div>
                <div className="customerheadertitle">LAST ORDER</div>
                <div className="customerheadertitle">STATUS</div>
              </div>

              <div className={innerview ? "orderrendercontainer" : "trial"}>
                <Modal open={orderopen}>
                  <Box className="ordermodalbox">
                    <div className="modalclose">
                      <button
                        className="modalclosebutton"
                        onClick={handleOrderclose}
                      >
                        <FontAwesomeIcon
                          className="closebuttonicon"
                          icon={faCircleXmark}
                        />
                      </button>
                    </div>

                    <div className="innermodalbox">
                      <div className="ordermodaltitle">{tenant.name}</div>
                      <div className="ordermodalsubtitle">
                        <div className="ordermodaldate">
                          <div className="ordertime">
                            <FontAwesomeIcon
                              className="timeicon"
                              icon={faCalendar}
                            />
                            11:23:39 am <span className="space">/</span>{" "}
                            <span className="orderdate">Aug 25 2021</span>
                          </div>
                        </div>

                        <div className="ordermodalstatus">
                          <div className="statustext">STATUS</div>
                          <div className="statuscoloredtext">
                            {status == 1 ? (
                              <div className="orderplaced">ORDER PLACED</div>
                            ) : status == 2 ? (
                              <div className="ready">READY TO SERVE</div>
                            ) : status == 3 ? (
                              <div className="rejected">REJECTED</div>
                            ) : status == 4 ? (
                              <div className="payment">PAYMENT</div>
                            ) : status == 5 ? (
                              <div className="complete">COMPLETE</div>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="ordermodalitems">
                        <div className="ordermodalform">
                          <form onSubmit={handleSubmit}>
                            <div className="ordermodalinputlabel">
                              Name <span style={{ color: "#E52C32" }}>*</span>
                            </div>
                            <input
                              type="text"
                              value={customername}
                              className="ordermodalinputfile"
                              onChange={handleChange}
                            />
                            <div className="ordermodalinputlabel">
                              Phone Number
                              <span style={{ color: "#E52C32" }}>*</span>
                            </div>
                            <input
                              type="text"
                              value={customerphone}
                              className="ordermodalinputfile"
                              onChange={handleChange}
                            />
                            <div className="ordermodalinputlabel">
                              Special Instructions
                            </div>
                            <input
                              type="text"
                              value={instruction}
                              className="ordermodalinputfile"
                              onChange={handleChange}
                            />
                            <div className="ordermodalinputlabel">Table</div>
                            <input
                              type="text"
                              value={table}
                              className="ordermodalinputfile"
                              onChange={handleChange}
                            />
                          </form>
                        </div>

                        <div className="ordermenuitemcontainer">
                          <div className="ordermenutitle">Order Items</div>
                          <div className="ordermenuitem">
                            {orderitems.map((post, index) => (
                              <div className="ordermenucontainer">
                                <div className="ordermenuimagecontainer">
                                  <img src={post.uri} className="menuimage" />
                                </div>
                                <div className="orderdetailsmenutext">
                                  <div className="orderdetailsmenutitle">
                                    {post.name}
                                  </div>
                                  <div className="recommended">
                                    {post.recommended === true ? (
                                      <img src={recommended} />
                                    ) : null}
                                  </div>
                                  <div className="orderdetailmenuprice">
                                    <NumberFormat
                                      value={post.price}
                                      prefix="RP. "
                                      decimalSeparator="."
                                      thousandSeparator=","
                                      displayType="text"
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="ordertotalsummary">
                            <div className="ordertotalitems">
                              <div className="lefttext">Items:</div>
                              <div className="righttext">{itemtotal}</div>
                            </div>

                            <div className="ordertotalitems">
                              <div className="lefttext">Subtotal:</div>
                              <div className="righttext">
                                <NumberFormat
                                  value={subtotal}
                                  prefix="RP. "
                                  decimalSeparator="."
                                  thousandSeparator=","
                                  displayType="text"
                                />
                              </div>
                            </div>

                            <div className="ordertotalitems">
                              <div className="lefttext">Service Charge:</div>
                              <div className="righttext">
                                <NumberFormat
                                  value={2000}
                                  prefix="RP. "
                                  decimalSeparator="."
                                  thousandSeparator=","
                                  displayType="text"
                                />
                              </div>
                            </div>

                            <div className="ordertotalitems-n">
                              <div className="lefttext">Tax(%):</div>
                              <div className="righttext">
                                <NumberFormat
                                  value={1000}
                                  prefix="RP. "
                                  decimalSeparator="."
                                  thousandSeparator=","
                                  displayType="text"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Box>
                </Modal>

                {(rowsPerPage2 > 0
                  ? OrderData.slice(
                      orderpage * rowsPerPage2,
                      orderpage * rowsPerPage2 + rowsPerPage2
                    )
                  : OrderData
                ).map((post, i) => (
                  <div className={i != 7 ? "bordered" : "noborder"}>
                    <div className="orderrendergrid">
                      <div className="ordertext">{i + orderindex}</div>
                      <div className="ordertext">{post.order_ID}</div>
                      <div className="ordertext">
                        {" "}
                        <NumberFormat
                          value={post.totalprice}
                          prefix="RP. "
                          decimalSeparator="."
                          thousandSeparator=","
                          displayType="text"
                        />
                      </div>
                      <div className="status">
                        {" "}
                        {post.status == 1 ? (
                          <div className="orderplaced">ORDER PLACED</div>
                        ) : post.status == 2 ? (
                          <div className="ready">READY TO SERVE</div>
                        ) : post.status == 3 ? (
                          <div className="rejected">REJECTED</div>
                        ) : post.status == 4 ? (
                          <div className="payment">PAYMENT</div>
                        ) : post.status == 5 ? (
                          <div className="complete">COMPLETE</div>
                        ) : null}
                      </div>
                      <div className="ordertext">
                        {post.orderplaced} minutes ago
                      </div>
                      <div className="ordertablesnumber">{post.table_ID}</div>
                      <div className="acceptreject">
                        {post.accepted == 1 ? (
                          <div className="proceed">PROCEED</div>
                        ) : post.accepted == 2 ? (
                          <div className="serve">SERVE</div>
                        ) : post.accepted == 3 ? (
                          <div className="serve">COMPLETE</div>
                        ) : post.accepted == 4 ? (
                          post.status == 3 ? (
                            <div className="completedR">COMPLETED</div>
                          ) : (
                            <div className="completed">COMPLETED</div>
                          )
                        ) : null}
                      </div>
                      <div className="vieworder">
                        <button
                          className="vieworderbutton"
                          onClick={() => {
                            handleOrderopen();
                            handlePassinginfo(
                              post.status,
                              post.customername,
                              post.customerphone,

                              post.instruction,
                              post.table_ID,
                              post.menu,
                              post.totalitems,
                              post.totalprice,
                              post.servicecharge,
                              post.tax
                            );
                          }}
                        >
                          View Order
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className={innerview ? "trial" : "customerrendercontainer"}>
                {(rowsPerPage > 0
                  ? CustomerData.slice(
                      customerpage * rowsPerPage2,
                      customerpage * rowsPerPage2 + rowsPerPage2
                    )
                  : CustomerData
                ).map((post, i) => (
                  <div className={i != 6 ? "bordered" : "noborder"}>
                    <div className="customerrendergrid">
                      <div className="customertext">{i + customerindex}</div>
                      <div className="customertext">{post.customername}</div>
                      <div className="customertext">{post.customerphone}</div>
                      <div className="customertext">{post.lastorder}</div>
                      <div className="status">
                        {" "}
                        {post.status == 1 ? (
                          <div className="atrestaurant">At restaurant</div>
                        ) : post.status == 2 ? (
                          <div className="notinrestaurant">Not in here</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="footer">
                <TablePagination
                  colSpan={3}
                  count={innerview ? OrderData.length : CustomerData.length}
                  rowsPerPage={rowsPerPage2}
                  page={innerview? orderpage : customerpage}
                  onPageChange={innerview? handleOrderChangePage : handleCustomerChangePage}
                  ActionsComponent={innerview ? TablePaginationActionsorder : TablePaginationActionscustomer}
                />
              </div>
            </div>

            <div className={profileedit ? "editprofilesettings" : "hide"}>
              <Modal open={openhouredit}>
                <Box className="openhourbox">
                  <div className="openhourinnerbox">
                    <div className="openhourmodaltitle">Select Days & Time</div>

                    <form>
                      <div className="openhourinnermodalbox">
                        <div className="days">
                          {buttondata.map((item, index) =>
                            renderButton(item, index)
                          )}
                        </div>

                        <div className="checkbox">
                          {checkdata.map((item, index) =>
                            renderCheck(item, index)
                          )}
                        </div>
                        <div className="time">
                          <div className="opentime">
                            <div
                              className={
                                checkbox ? "timelabel" : "timelabelactive"
                              }
                            >
                              Open Time
                            </div>
                            <div className="timeinputcontainer">
                              <div className="timeinputs">
                                <Select
                                  defaultValue=""
                                  disableUnderline
                                  disabled={checkbox ? true : false}
                                  classes={
                                    checkbox
                                      ? {
                                          root: timeSelectClasses.selectdisabled,
                                        }
                                      : { root: timeSelectClasses.select }
                                  }
                                  MenuProps={timemenuProps}
                                  IconComponent={timeiconComponent}
                                  value={opentimeh}
                                  onChange={(value) => handleopentimeh(value)}
                                >
                                  <MenuItem value="01">01</MenuItem>
                                  <MenuItem value="02">02</MenuItem>
                                  <MenuItem value="03">03</MenuItem>
                                  <MenuItem value="04">04</MenuItem>
                                  <MenuItem value="05">05</MenuItem>
                                  <MenuItem value="06">06</MenuItem>
                                  <MenuItem value="07">07</MenuItem>
                                  <MenuItem value="08">08</MenuItem>
                                  <MenuItem value="09">09</MenuItem>
                                  <MenuItem value="10">10</MenuItem>
                                  <MenuItem value="11">11</MenuItem>
                                  <MenuItem value="12">12</MenuItem>
                                </Select>

                                <div
                                  className={
                                    checkbox ? "semicolon" : "semicolonactive"
                                  }
                                >
                                  :
                                </div>
                                <Select
                                  defaultValue=""
                                  disableUnderline
                                  disabled={checkbox ? true : false}
                                  classes={
                                    checkbox
                                      ? {
                                          root: timeSelectClasses.selectdisabled,
                                        }
                                      : { root: timeSelectClasses.select }
                                  }
                                  MenuProps={timemenuProps}
                                  IconComponent={timeiconComponent}
                                  value={opentimem}
                                  onChange={(value) => handleopentimem(value)}
                                >
                                  <MenuItem value="00">00</MenuItem>
                                  <MenuItem value="01">01</MenuItem>
                                  <MenuItem value="02">02</MenuItem>
                                  <MenuItem value="03">03</MenuItem>
                                  <MenuItem value="04">04</MenuItem>
                                  <MenuItem value="05">05</MenuItem>
                                  <MenuItem value="06">06</MenuItem>
                                  <MenuItem value="07">07</MenuItem>
                                  <MenuItem value="08">08</MenuItem>
                                  <MenuItem value="09">09</MenuItem>
                                  <MenuItem value="10">10</MenuItem>
                                  <MenuItem value="11">11</MenuItem>
                                  <MenuItem value="12">12</MenuItem>

                                  <MenuItem value="13">13</MenuItem>
                                  <MenuItem value="14">14</MenuItem>
                                  <MenuItem value="15">15</MenuItem>
                                  <MenuItem value="16">16</MenuItem>
                                  <MenuItem value="17">17</MenuItem>
                                  <MenuItem value="18">18</MenuItem>
                                  <MenuItem value="19">19</MenuItem>
                                  <MenuItem value="20">20</MenuItem>
                                  <MenuItem value="21">21</MenuItem>
                                  <MenuItem value="22">22</MenuItem>
                                  <MenuItem value="23">23</MenuItem>
                                  <MenuItem value="24">24</MenuItem>

                                  <MenuItem value="25">25</MenuItem>
                                  <MenuItem value="26">26</MenuItem>
                                  <MenuItem value="27">27</MenuItem>
                                  <MenuItem value="28">28</MenuItem>
                                  <MenuItem value="29">29</MenuItem>
                                  <MenuItem value="30">30</MenuItem>
                                  <MenuItem value="31">31</MenuItem>
                                  <MenuItem value="32">32</MenuItem>
                                  <MenuItem value="33">33</MenuItem>
                                  <MenuItem value="34">34</MenuItem>
                                  <MenuItem value="35">35</MenuItem>
                                  <MenuItem value="36">36</MenuItem>

                                  <MenuItem value="37">37</MenuItem>
                                  <MenuItem value="38">38</MenuItem>
                                  <MenuItem value="39">39</MenuItem>
                                  <MenuItem value="40">40</MenuItem>
                                  <MenuItem value="41">41</MenuItem>
                                  <MenuItem value="42">42</MenuItem>
                                  <MenuItem value="43">43</MenuItem>
                                  <MenuItem value="44">44</MenuItem>
                                  <MenuItem value="45">45</MenuItem>
                                  <MenuItem value="46">46</MenuItem>
                                  <MenuItem value="47">47</MenuItem>
                                  <MenuItem value="48">48</MenuItem>

                                  <MenuItem value="49">49</MenuItem>
                                  <MenuItem value="50">50</MenuItem>
                                  <MenuItem value="51">51</MenuItem>
                                  <MenuItem value="52">52</MenuItem>
                                  <MenuItem value="53">53</MenuItem>
                                  <MenuItem value="54">54</MenuItem>
                                  <MenuItem value="55">55</MenuItem>
                                  <MenuItem value="56">56</MenuItem>
                                  <MenuItem value="57">57</MenuItem>
                                  <MenuItem value="58">58</MenuItem>
                                  <MenuItem value="59">59</MenuItem>
                                </Select>
                              </div>
                              <div className="timeselector">
                                <Select
                                  defaultValue=""
                                  disableUnderline
                                  disabled={checkbox ? true : false}
                                  classes={
                                    checkbox
                                      ? {
                                          root: outlineSelect2Classes.selectdisabled,
                                        }
                                      : { root: outlineSelect2Classes.select }
                                  }
                                  MenuProps={AMPMmenuProps}
                                  IconComponent={AMPMiconComponent}
                                  value={opentimeselect}
                                  onChange={handleopentimeselect}
                                >
                                  <MenuItem value={0}>AM</MenuItem>
                                  <MenuItem value={1}>PM</MenuItem>
                                </Select>
                              </div>
                            </div>
                          </div>
                          <div className="closetime">
                            <div
                              className={
                                checkbox ? "timelabel" : "timelabelactive"
                              }
                            >
                              Closed Time
                            </div>
                            <div className="timeinputcontainer">
                              <div className="timeinputs">
                                <Select
                                  defaultValue=""
                                  disableUnderline
                                  disabled={checkbox ? true : false}
                                  classes={
                                    checkbox
                                      ? {
                                          root: timeSelectClasses.selectdisabled,
                                        }
                                      : { root: timeSelectClasses.select }
                                  }
                                  MenuProps={timemenuProps}
                                  IconComponent={timeiconComponent}
                                  value={closetimeh}
                                  onChange={(value) => handleclosetimeh(value)}
                                >
                                  <MenuItem value="01">01</MenuItem>
                                  <MenuItem value="02">02</MenuItem>
                                  <MenuItem value="03">03</MenuItem>
                                  <MenuItem value="04">04</MenuItem>
                                  <MenuItem value="05">05</MenuItem>
                                  <MenuItem value="06">06</MenuItem>
                                  <MenuItem value="07">07</MenuItem>
                                  <MenuItem value="08">08</MenuItem>
                                  <MenuItem value="09">09</MenuItem>
                                  <MenuItem value="10">10</MenuItem>
                                  <MenuItem value="11">11</MenuItem>
                                  <MenuItem value="12">12</MenuItem>
                                </Select>

                                <div
                                  className={
                                    checkbox ? "semicolon" : "semicolonactive"
                                  }
                                >
                                  :
                                </div>
                                <Select
                                  defaultValue=""
                                  disableUnderline
                                  disabled={checkbox ? true : false}
                                  classes={
                                    checkbox
                                      ? {
                                          root: timeSelectClasses.selectdisabled,
                                        }
                                      : { root: timeSelectClasses.select }
                                  }
                                  MenuProps={timemenuProps}
                                  IconComponent={timeiconComponent}
                                  value={closetimem}
                                  onChange={(value) => handleclosetimem(value)}
                                >
                                  <MenuItem value="00">00</MenuItem>
                                  <MenuItem value="01">01</MenuItem>
                                  <MenuItem value="02">02</MenuItem>
                                  <MenuItem value="03">03</MenuItem>
                                  <MenuItem value="04">04</MenuItem>
                                  <MenuItem value="05">05</MenuItem>
                                  <MenuItem value="06">06</MenuItem>
                                  <MenuItem value="07">07</MenuItem>
                                  <MenuItem value="08">08</MenuItem>
                                  <MenuItem value="09">09</MenuItem>
                                  <MenuItem value="10">10</MenuItem>
                                  <MenuItem value="11">11</MenuItem>
                                  <MenuItem value="12">12</MenuItem>

                                  <MenuItem value="13">13</MenuItem>
                                  <MenuItem value="14">14</MenuItem>
                                  <MenuItem value="15">15</MenuItem>
                                  <MenuItem value="16">16</MenuItem>
                                  <MenuItem value="17">17</MenuItem>
                                  <MenuItem value="18">18</MenuItem>
                                  <MenuItem value="19">19</MenuItem>
                                  <MenuItem value="20">20</MenuItem>
                                  <MenuItem value="21">21</MenuItem>
                                  <MenuItem value="22">22</MenuItem>
                                  <MenuItem value="23">23</MenuItem>
                                  <MenuItem value="24">24</MenuItem>

                                  <MenuItem value="25">25</MenuItem>
                                  <MenuItem value="26">26</MenuItem>
                                  <MenuItem value="27">27</MenuItem>
                                  <MenuItem value="28">28</MenuItem>
                                  <MenuItem value="29">29</MenuItem>
                                  <MenuItem value="30">30</MenuItem>
                                  <MenuItem value="31">31</MenuItem>
                                  <MenuItem value="32">32</MenuItem>
                                  <MenuItem value="33">33</MenuItem>
                                  <MenuItem value="34">34</MenuItem>
                                  <MenuItem value="35">35</MenuItem>
                                  <MenuItem value="36">36</MenuItem>

                                  <MenuItem value="37">37</MenuItem>
                                  <MenuItem value="38">38</MenuItem>
                                  <MenuItem value="39">39</MenuItem>
                                  <MenuItem value="40">40</MenuItem>
                                  <MenuItem value="41">41</MenuItem>
                                  <MenuItem value="42">42</MenuItem>
                                  <MenuItem value="43">43</MenuItem>
                                  <MenuItem value="44">44</MenuItem>
                                  <MenuItem value="45">45</MenuItem>
                                  <MenuItem value="46">46</MenuItem>
                                  <MenuItem value="47">47</MenuItem>
                                  <MenuItem value="48">48</MenuItem>

                                  <MenuItem value="49">49</MenuItem>
                                  <MenuItem value="50">50</MenuItem>
                                  <MenuItem value="51">51</MenuItem>
                                  <MenuItem value="52">52</MenuItem>
                                  <MenuItem value="53">53</MenuItem>
                                  <MenuItem value="54">54</MenuItem>
                                  <MenuItem value="55">55</MenuItem>
                                  <MenuItem value="56">56</MenuItem>
                                  <MenuItem value="57">57</MenuItem>
                                  <MenuItem value="58">58</MenuItem>
                                  <MenuItem value="59">59</MenuItem>
                                </Select>
                              </div>
                              <div className="timeselector">
                                <Select
                                  defaultValue=""
                                  disableUnderline
                                  disabled={checkbox ? true : false}
                                  classes={
                                    checkbox
                                      ? {
                                          root: outlineSelect2Classes.selectdisabled,
                                        }
                                      : { root: outlineSelect2Classes.select }
                                  }
                                  MenuProps={AMPMmenuProps}
                                  IconComponent={AMPMiconComponent}
                                  value={closetimeselect}
                                  onChange={handleclosetimeselect}
                                >
                                  <MenuItem value={0}>AM</MenuItem>
                                  <MenuItem value={1}>PM</MenuItem>
                                </Select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="openhourmodalbutton">
                      <button
                        onClick={handleOpenHourEditClose}
                        className="cancelbutton"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        onClick={handlesavehour}
                        className="savebutton"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Box>
              </Modal>

              <Modal open={addcontract}>
                <Box className="addcontractmodalbox">
                  <div className="addcontractinnerbox">
                    <div className="addcontractmodaltitle">
                      Add New Contract
                    </div>

                    <form>
                      <div className="addcontractinnermodalbox">
                        <div className="modallabeltext">Start Date</div>
                        <div className="modalinput">
                          <DatePicker
                            format="D MMMM YYYY "
                            value={startvalue}
                            arrow={false}
                            onChange={setstartValue}
                          />
                        </div>

                        <div className="modallabeltext">Contract Periode</div>
                        <div className="modalinput">
                          <Select
                            defaultValue=""
                            disableUnderline
                            classes={{ root: outlineSelectClasses.select }}
                            MenuProps={outlinemenuProps}
                            IconComponent={outlineiconComponent}
                            onChange={(e) => {
                              {
                                setContractVal(e.target.value);
                                console.log("val is", contractval);
                              }
                            }}
                          >
                            <MenuItem value="1">1 Years</MenuItem>
                            <MenuItem value="2">2 Years</MenuItem>
                            <MenuItem value="3">3 Years</MenuItem>
                            <MenuItem value="4">4 Years</MenuItem>
                            <MenuItem value="5">5 Years</MenuItem>
                            <MenuItem value="6">6 Years</MenuItem>
                            <MenuItem value="7">7 Years</MenuItem>
                            <MenuItem value="8">8 Years</MenuItem>
                            <MenuItem value="9">9 Years</MenuItem>
                            <MenuItem value="10">10 Years</MenuItem>
                            <MenuItem value="11">11 Years</MenuItem>
                            <MenuItem value="12">12 Years</MenuItem>
                          </Select>
                        </div>
                        <div className="modallabeltext">
                          Contract Attachment
                        </div>
                        <div className="modalinput">
                          <div className="attachbutton">
                            <label for="file-input">
                              <FontAwesomeIcon
                                icon={faPaperclip}
                                className="attachicon"
                              />
                            </label>

                            <input
                              id="file-input"
                              type="file"
                              className="contractfileinput"
                              onChange={(e) => {
                                setContractFile(e.target.files[0].name);
                                console.log("file", e.target.files[0]);
                              }}
                            />
                          </div>
                          <div className="filename">
                            <a
                              href="http://africau.edu/images/default/sample.pdf"
                              className="contractfilename"
                            >
                              {contractfile}
                            </a>
                          </div>
                        </div>
                      </div>
                    </form>

                    <div className="addcontractmodalbutton">
                      <button
                        onClick={handleaddcontractclose}
                        className="cancelbutton"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        onClick={handleaddcontractsave}
                        className="savebutton"
                      >
                        Save Contract
                      </button>
                    </div>
                  </div>
                </Box>
              </Modal>

              <div className="profileeditcontainer">
                <div className="outtercontainer">
                  <div className="innercontainer">
                  <div className="leftcolumncontainer">
                    <div className="row">
                      <div className="labelcolumn">
                        <div className="settingslabeltext">Restaurant Name</div>
                        <div className="settingsinputcontainer">
                          <input
                            type="text"
                            value="Telaga"
                            className="inputcontainer1"
                          />
                        </div>
                      </div>
                      <div className="labelcolumn">
                        <div className="settingslabeltext2">Profile Color</div>
                        <div className="settingsinputcontainer">
                          <div className="colorpick">
                            <BlockPicker
                              color={color}
                              onChange={(color) => {
                                setColor(color.hex);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="labelcolumn">
                        <div className="settingslabeltext">Email</div>
                        <div className="settingsinputcontainer">
                          <input
                            type="text"
                            value="ivanparmenas@gmail.com"
                            className="inputcontainer1"
                          />
                        </div>
                      </div>
                      <div className="labelcolumn">
                        <div className="settingslabeltext">Password</div>
                        <div className="settingsinputcontainer">
                          <div className="passwordsettings">
                            <input
                              type={show ? "text" : "password"}
                              value="IvanNP20"
                              disabled="true"
                              className="editpassword"
                            />
                            <FontAwesomeIcon
                              icon={show ? faEye : faEyeSlash}
                              onClick={() => handleshowpass()}
                              className={
                                show ? "passwordshowicon" : "passwordicon"
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row2">
                      <div className="labelcolumn">
                        <div className="settingslabeltext">Address</div>
                        <div className="settingsinputcontainer">
                          <textarea
                            type="text"
                            value="Jl. Raya Serpong Kav. Komersial No. 6, Bumi Serpong Damai, Jelupang, Lengkong Karya, Kec. Serpong Utara, Kota Tangerang Selatan, Banten. "
                            className="textareainputcontainer"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row3">
                      <div className="leftcontainer">
                        <div className="settingslabeltext">Opening Hour</div>
                        <div className="openhourcontainerbutton">
                          <div className="openhourdetails">
                            <div className="profiletext3">Monday</div>
                            <div className="profiletext3">Tuesday</div>
                            <div className="profiletext3">Wednesday</div>
                            <div className="profiletext3">Thursday</div>
                            <div className="profiletext3">Friday</div>
                            <div className="profiletext3">Saturday</div>
                            <div className="profiletext3">Sunday</div>
                          </div>
                          <div className="openhourdetails">
                            <div className="edithourcontainer">
                            <div className="profiletext3">8 AM-21 PM</div>
                            <FontAwesomeIcon
                              icon={faPencil}
                              className="edithouricon"
                              onClick={() => handleOpenHourEditOpen()}
                            />
                            </div>
                            
                            <div className="edithourcontainer">
                            <div className="profiletext3">8 AM-21 PM</div>
                            <FontAwesomeIcon
                              icon={faPencil}
                              className="edithouricon"
                              onClick={() => handleOpenHourEditOpen()}
                            />
                            </div>
                            <div className="edithourcontainer">
                            <div className="profiletext3">8 AM-21 PM</div>
                            <FontAwesomeIcon
                              icon={faPencil}
                              className="edithouricon"
                              onClick={() => handleOpenHourEditOpen()}
                            />
                            </div>
                            <div className="edithourcontainer">
                            <div className="profiletext3">8 AM-21 PM</div>
                            <FontAwesomeIcon
                              icon={faPencil}
                              className="edithouricon"
                              onClick={() => handleOpenHourEditOpen()}
                            />
                            </div>
                            <div className="edithourcontainer">
                            <div className="profiletext3">8 AM-21 PM</div>
                            <FontAwesomeIcon
                              icon={faPencil}
                              className="edithouricon"
                              onClick={() => handleOpenHourEditOpen()}
                            />
                            </div>
                            <div className="edithourcontainer">
                            <div className="profiletext3">Closed</div>
                            <FontAwesomeIcon
                              icon={faPencil}
                              className="edithouricon"
                              onClick={() => handleOpenHourEditOpen()}
                            />
                            </div>
                            <div className="edithourcontainer">
                            <div className="profiletext3">Closed</div>
                            <FontAwesomeIcon
                              icon={faPencil}
                              className="edithouricon"
                              onClick={() => handleOpenHourEditOpen()}
                            />
                            </div>
                           
                          </div>

                        
                        </div>
                      </div>
                      <div className="rightcontainer">
                        <div className="labelcolumn">
                          <div className="settingslabeltext">
                            Contact Person
                          </div>
                          <div className="settingsinputcontainer">
                            <input
                              type="text"
                              value="089638303065"
                              className="inputcontainer2"
                            />
                          </div>
                        </div>

                        <div className="contractcontainer">
                          <div className="settingslabeltext">
                            Contract with Oasis
                          </div>
                          <div
                            className={
                              contract ? "hide" : "addcontractcontainer"
                            }
                          >
                            <button
                              className="addcontractbutton"
                              onClick={() => handleaddcontractopen()}
                            >
                              + Add New Contract
                            </button>
                          </div>

                          <div
                            className={
                              contract ? "contractdetailscontainer" : "hide"
                            }
                          >
                            <div className="contractrow">
                              <div className="contractduration">2 Years</div>
                              <div className="settingslabeltext3">
                                Expired at :
                              </div>
                              <div className="settingslabeltext4">
                                24 January 2022
                              </div>
                            </div>

                            <div className="contractfile">
                              <FontAwesomeIcon icon={faPaperclip} className="contractfileicon"/>

                              <a
                                href="http://africau.edu/images/default/sample.pdf"
                                className="contractfilenames"
                              >
                                Pdf Name
                              </a>
                            </div>
                            <div className="contractfilebutton">
                              <button
                                className="renewcontract"
                                onClick={() => handleaddcontractopen()}
                              >
                                Renew Contract
                              </button>
                              <div className="settingslabeltext3">
                                &nbsp;or&nbsp;
                              </div>
                              <button
                                className="removecontract"
                                onClick={() => handleremovecontract()}
                              >
                                Remove Contract
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rightcolumncontainer">
                  <div className="settingslabeltext">
                            Profile Picture
                          </div>
                    <div className="editprofileimagecontainer">
                      <img src={profileimage} className="editprofileimage" />
                    

                    <div className="editprofileimagebuttoncontainer">
                      <div className="imagebuttoncontainer">
                        <div className="productimagebutton">
                          <label for="file-input">
                            <img src={inputimage} />
                          </label>

                          <input
                            id="file-input"
                            type="file"
                            className="profileimageinput"
                            onChange={imageHandler}
                          />
                        </div>
                        </div>
                      </div>
                    </div>


                   
                  </div>
                  </div>

                  <div className="editprofilemodalbutton">
                      <button
                        onClick={handleprofileeditclose}
                        className="cancelbutton"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        onClick={handlesaveprofile}
                        className="savebutton"
                      >
                        Save Profile
                      </button>
                    </div>
                </div>

           
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ session }) => ({
  tenant: session.user,
});

export default connect(mapStateToProps)(TenantPage);
