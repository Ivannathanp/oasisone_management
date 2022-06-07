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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import searchicon from "../../icons/Search.svg";
import { useHistory } from "react-router-dom";
import { useMinimalSelectStyles } from "./select/index";
import { ThreeDots } from "react-loader-spinner"
import moment from "moment";

function TenantPage() {
  const localUrl = process.env.REACT_APP_MANAGEMENTURL;
  const [tenantData, setTenantData] = useState([]);
  const [tenantRetrieved, setTenantRetrieved] = useState(false);

  // Get All Tenant
  useEffect(() => {
    let mounted = true;

    if (mounted) {

      const url = localUrl + "/user";
      fetch(url, {
        method: "GET",
        headers: { "content-type": "application/JSON" },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.status === "SUCCESS") {
            setTenantData(result.data);
            setTenantRetrieved(() => true);
          } else {
            setTenantRetrieved(() => false);
          }
        });
    }
    return () => {
      mounted = false;
    };
  }, [tenantRetrieved]);


  // Navigate
  const history = useHistory();
  function redirectTenantDetail(tenant_id) {
    history.push({
      pathname: "/tenantdetails",
      state: tenant_id,
    });

  }

  // search and filter
  const [search, setSearch] = useState("");

  const [filtered, setFiltered] = useState(0);

  //handle filter select drop down
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

  const date = new Date();

  async function handleFilter(e){
    if(e != 0){
      setFiltered(e.target.value)
    }

    
    if(e === 0){
setFiltered(0)
      const filteredurl = localUrl + "/user";
        fetch(filteredurl, {
          method: "GET",
          headers: { "content-type": "application/JSON" },
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.status === "SUCCESS") {
              setTenantData(result.data);
              setTenantRetrieved(() => true);
            } else {
              setTenantRetrieved(() => false);
            }
          });
    }

      if (e.target.value == "Alphabetically"){
        const filteredurl = localUrl + "/tenant/name/ascending";
        fetch(filteredurl, {
          method: "GET",
          headers: { "content-type": "application/JSON" },
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.status === "SUCCESS") {
              setTenantData(result.data);
              setTenantRetrieved(() => true);
            } else {
              setTenantRetrieved(() => false);
            }
          });
      } else if (e.target.value == "Location"){
        const filteredurl = localUrl + "/tenant/location/ascending";
        fetch(filteredurl, {
          method: "GET",
          headers: { "content-type": "application/JSON" },
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.status === "SUCCESS") {
              setTenantData(result.data);
              setTenantRetrieved(() => true);
            } else {
              setTenantRetrieved(() => false);
            }
          });
      } else if (e.target.value == "Status"){
        const  filteredurl = localUrl + "/tenant/status";
        fetch(filteredurl, {
          method: "GET",
          body: JSON.stringify({
          sortingDays: moment(date).format("dddd")
          }),
          headers: { "content-type": "application/JSON" },
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.status === "SUCCESS") {
              setTenantData(result.data);
              setTenantRetrieved(() => true);
            } else {
              setTenantRetrieved(() => false);
            }
          });
      }
  

   
  }

  // Pagination
  const [page, setPage] = useState(0);
  const [index, setIndex] = useState(1);
  const rowsPerPage = 6;
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

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
  <div className="container">
      {tenantRetrieved? (<div className="tenantcontainer">
       
        <div className="outertenanttable">
        <div className="tenantheader">
          <div className="tenantleft">Total tenant ({tenantData.length})</div>
          <div className="tenantcenter">
            <img src={searchicon} className="searchicon" />
            <input
              type="text"
              value={search}
              className="searchinput"
              placeholder="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <button
              className={
                search == "" ? "searchhide" : "searchclosebutton"
              }
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
              value={filtered}
              onChange={(e)=>handleFilter(e)}
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
              className={filtered === 0 ? "hide" : "unhide"}
              onClick={() => handleFilter(0)}
            >
              Clear
            </button>
          </div>
        </div>
        
          <div className="tenantheadertitlegrid">
            <div className="tenantheadertitle">{search? "" : "No."}</div>
            <div className="tenantheadertitle">Tenant Name</div>
            <div className="tenantheadertitle">Location</div>
            <div className="tenantheadertitle">Status</div>
            <div className="tenantheadertitle">Status</div>
          </div>

         {search == "" ? (<div className="tenantrendercontainer">
            {tenantRetrieved == true &&
              (rowsPerPage > 0
                ? tenantData.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : tenantData
              ).map((post, indexs) => {
                return (
                  <div className="tenantrendergrid">
                    <div className="tenanttext">{indexs + index}</div>
                    <div className="tenantprofilecontainer">
                      <img src={post.profileImage} className="tenantprofile" />
                      {post.name}
                    </div>
                    <div className="tenantaddresscontainer">
                      <div className="clusteraddress">{post.location}</div>

                      <div className="address">{post.address}</div>
                    </div>

                    <div className="status">
                      {tenantRetrieved == true &&
                        post.openingDays.map((posts, index) => {
                          var numberdayweek = [7, 1, 2, 3, 4, 5, 6];
                          const today = new Date();

                          if (numberdayweek[today.getDay()] === index + 1) {

                            if (posts.isClosed) {
                              return <div className="closedstatus">Closed</div>;
                            } else if (!posts.isClosed) {
                              return <div className="openstatus">Open</div>;
                            }
                          }
                        })}
                    </div>
                    <div className="viewdetails">
                      <button
                        className="viewbutton"
                        onClick={() => redirectTenantDetail(post.tenant_id)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>) : (


  <div className="tenantrendercontainer">
  {tenantRetrieved === true &&
                      tenantData.filter((post) => {
                            if (
                              post.name
                              .toLowerCase().includes(search.toLowerCase()) 
                            ) {

                              return post;
                            }
                          })
                          .map((post, indexs) => {
                         return(
                          <div className="tenantrendergrid">
                             <div className="tenanttext"></div>
                          <div className="tenantprofilecontainer">
                            <img src={post.profileImage} className="tenantprofile" />
                            {post.name}
                          </div>
                          <div className="tenantaddresscontainer">
                            <div className="clusteraddress">{post.location}</div>
      
                            <div className="address">{post.address}</div>
                          </div>
      
                          {/* function compareFirstNames( a, b ) {
  if ( a.first_name < b.first_name ){
    return -1;
  }
  if ( a.first_name > b.first_name ){
    return 1;
  }
  return 0;
}

var people =[
    {"first_name":"Carol", "age":29},
    {"first_name":"Anna", "age":32},
    {"first_name":"Bob", "age":32}
];

people.sort( compareFirstNames ); */}

                          <div className="status">
                            {tenantRetrieved == true &&
                              post.openingDays.map((posts, index) => {
                                var numberdayweek = [7, 1, 2, 3, 4, 5, 6];
                                const today = new Date();
      
                                if (numberdayweek[today.getDay()] === index + 1) {
                                
                                  if (posts.isClosed) {
                                    return <div className="closedstatus">Closed</div>;
                                  } else if (!posts.isClosed) {
                                    return <div className="openstatus">Open</div>;
                                  }
                                }
                              })}
                          </div>
                          <div className="viewdetails">
                            <button
                              className="viewbutton"
                              onClick={() => redirectTenantDetail(post.tenant_id)}
                            >
                              View Details
                            </button>
                          </div>
                        </div>
                         )
                             
                            }
                          )
                
                           
                   
                      }

  </div>)}

        </div>
        <div className="tenantfooter">
          <TablePagination
            colSpan={3}
            count={tenantData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            ActionsComponent={TablePaginationActions}
          />
        </div>
      </div>):(<div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <ThreeDots color="#f10c0c" height={80} width={80} />
    </div>)}
    </div>
  );
}

export default TenantPage;
