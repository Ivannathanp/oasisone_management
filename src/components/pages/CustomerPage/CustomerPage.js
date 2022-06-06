import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import TablePagination from "../../Pagination/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faXmark,
  faCalendar,
  faCashRegister,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import "./CustomerPage.css";
import logo from "../../icons/Logo.png";
import NumberFormat from "react-number-format";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { connect } from "react-redux";
import searchicon from "../../icons/Search.svg";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { useMinimalSelectStyles } from "./select/index";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { ThreeDots } from "react-loader-spinner";
import moment from "moment";
import { SocketContext } from "../../socketContext";

function CustomerPage({tenant}) {
  const localUrl = process.env.REACT_APP_ORDERURL;
  const [orderData, setOrderData] = useState([]);
  const [orderRetrieved, setOrderRetrieved] = useState(false);
   // Get Order Data
   useEffect(() => {
    let mounted = true;
    console.log("called");

    if (mounted) {
      if (tenant.tenant_id != undefined) {
        const url = localUrl + "/retrieve/" + tenant.tenant_id;
        console.log(url);

        fetch(url, {
          method: "GET",
          headers: { "content-type": "application/JSON" },
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.status === "SUCCESS") {
              // console.log(result)
              setOrderData(() => result.data);
              setOrderRetrieved(() => true);
            } else {
              // console.log(result);
              setOrderRetrieved(() => false);
            }
          });
      }
    }

    return () => {
      mounted = false;
    };
  }, [tenant, orderRetrieved]);

  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const generatePdf = () => {
    const doc = new jsPDF();
    const tableColumn = [
      "No",
      "Customer Name",
      "Customer Phonenumber",
      "Last Order Placed",
    ];
    const tableRows = [];
    orderData.map((post, index) => {
      const dateOptions = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
      };
      const ordertime = new Date(post.order_time);
      const OrderData = [
        index + 1,

        post.user_name,
        post.user_phonenumber,

        ordertime.toLocaleDateString("en-ID", dateOptions),
      ];
      // push each tickcet's info into a row
      tableRows.push(OrderData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    const date = Date();
    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    // ticket title. and margin-top + margin-left
    doc.text(`${tenant.name} Customer Report.`, 14, 15);
    // we define the name of our PDF file.
    doc.save(`${tenant.name}_customerreport.pdf`);
  };

  const [page, setPage] = useState(0);
  const rowsPerPage = 7;

  const [formValues, setFormValues] = useState("");
  const [customeropen, setcustomeropen] = useState(false);
  const handlecustomeropen = () => setcustomeropen(true, console.log ('clicked'));
  const handlecustomerclose = () => setcustomeropen(false);

  const [restaurantname, setRestaurantname] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [instruction, setInstruction] = useState("");
  const [table, setTable] = useState("");
  const [customeritems, setcustomeritems] = useState([]);
  const [itemtotal, setItemtotal] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [service, setService] = useState("");
  const [tax, setTax] = useState("");
  const [index, setIndex] = useState(1)

const CustomerData = [
  {
    id:1,
    customername: "Chris",
    customerphone: "089998983929",
    lastorder: "28 October 2021, 10:21 AM",
    lasttenant: "Telaga Seafood BSD City",
    status: 1,
  },
  {
    id:2,
    customername: "Chris",
    customerphone: "089998983929",
    lastorder: "28 October 2021, 10:21 AM",
    lasttenant: "Telaga Seafood BSD City",
    status: 1,
  },
  {
    id:3,
    customername: "Chris",
    customerphone: "089998983929",
    lastorder: "28 October 2021, 10:21 AM",
    lasttenant: "Telaga Seafood BSD City",
    status: 2,
  },
  {
    id:4,
    customername: "Chris",
    customerphone: "089998983929",
    lastorder: "28 October 2021, 10:21 AM",
    lasttenant: "Telaga Seafood BSD City",
    status: 2,
  },
  {
    id:5,
    customername: "Chris",
    customerphone: "089998983929",
    lastorder: "28 October 2021, 10:21 AM",
    lasttenant: "Telaga Seafood BSD City",
    status: 2,
  },
  {
    id:6,
    customername: "Chris",
    customerphone: "089998983929",
    lastorder: "28 October 2021, 10:21 AM",
    lasttenant: "Subway Nava Park",
    status: 2,
  },
  {
    id:7,
    customername: "Chris",
    customerphone: "089998983929",
    lastorder: "28 October 2021, 10:21 AM",
    lasttenant: "Subway Nava Park",
    status: 2,
  },
  {
    id:8,
    customername: "Chris",
    customerphone: "089998983929",
    lastorder: "28 October 2021, 10:21 AM",
    lasttenant: "Subway Nava Park",
    status: 2,
  },
  {
    id:9,
    customername: "Chris",
    customerphone: "089998983929",
    lastorder: "28 October 2021, 10:21 AM",
    lasttenant: "Subway Nava Park",
    status: 2,
  },
  {
    id:10,
    customername: "Chris",
    customerphone: "089998983929",
    lastorder: "28 October 2021, 10:21 AM",
    lasttenant: "Subway Nava Park",
    status: 2,
  },
]

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, onPageChange } = props;


  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
    setIndex(index - 7);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);

    setIndex(index + 7);
  };

  return (
    <div className="containerbutton">
      <button
        onClick={handleBackButtonClick}
        disabled={page === 0}
        className={page === 0 ? "leftdisabledbutton" : "leftdisplaybutton"}
      >
        {" "}
        <FontAwesomeIcon icon={faAngleLeft} style={page === 0? {color: "#BEBEBE"} : {color: "#949494"}}/>
      </button>

      <button
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count /7) - 1}
        className={
          page >= Math.ceil(count / 7) - 1
            ? "rightdisabledbutton"
            : "rightdisplaybutton"
        }
      >
        <FontAwesomeIcon icon={faAngleRight} style={page >= Math.ceil(count / 7) - 1? {color: "#BEBEBE"} : {color: "#949494"}}/>
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

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

  function handleSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(formValues));
  }

  function handleChange(e) {
    setFormValues({ value: e.target.value });
  }

  //search and filter
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




  return (


      <div className="customercontainer">
 
        <div className="customertable">
        <div className="tenantheader">
          <div className="tenantleft">Total Customer (41)</div>
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

        <div className="customerinnertable">
        <div className="outercustomertable">
            <div className="customertable">
              <div className="customerheader">
                <div className="customerleft">All Customer</div>
                <div className="customerright">
                  <button className="downloadbutton" onClick={generatePdf}>
                    Download as PDF{" "}
                  </button>
                </div>
              </div>
              <div className="customerheadertitlegrid">
                <div className="customerheadertitle">NO</div>
                <div className="customerheadertitle">NAME</div>
                <div className="customerheadertitle">PHONE NUMBER</div>
                <div className="customerheadertitle">LAST ORDER</div>
              </div>

              <div className="customerrendercontainer">
                {(rowsPerPage > 0
                  ? orderData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  : orderData
                ).map((post, i) => {
                  const orderDate = new Date(post.order_time);
                  console.log(
                    "slice",
                    orderData.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                  );
                  return (
                    <div className={i != 7 ? "bordered" : "noborder"}>
                      <div className="customerrendergrid">
                        <div className="customertext">{i + index}</div>
                        <div className="customertext">{post.user_name}</div>
                        <div className="customertext">
                          {post.user_phonenumber}
                        </div>
                        <div className="customertext">
                          {orderDate.toLocaleDateString("en-ID", dateOptions)} |{" "}
                          {moment(post.order_time).fromNow()}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="footer">
            <TablePagination
              colSpan={3}
              count={orderData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              ActionsComponent={TablePaginationActions}
            />
          </div>
        </div>
      </div>
 </div>
  );
}

const mapStateToProps = ({session}) => ({
  tenant: session.user
})

export default connect(mapStateToProps)(CustomerPage);
