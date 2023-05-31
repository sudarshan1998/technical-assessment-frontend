import React from 'react';
import { CCardBody, CCardImage, CRow, CCol, CCardTitle, CCardText, CCard } from '@coreui/react';
import ReactTooltip from "react-tooltip";
import "./index.css";
import DeleteIcon from '@material-ui/icons/Delete';

export const BeerItem = (props) => {
  return (
    <CCard className="mb-3">
      <CRow className="g-0 parent hoverCard">
        <CCol md={2} className="text-center">
          <ReactTooltip place="top" type="dark" effect="solid"></ReactTooltip>
          <CCardImage src={props.image} style={{ width: "auto", maxHeight: "200px", margin: "16px 16px" }} data-tip={"ingredients: " + props.ingredients} />
        </CCol>
        <CCol md={10}>
          <CCardBody>
            <CCardTitle>{props.name}</CCardTitle>
            <CCardText className='tagline'>{props.tagline}</CCardText>
            <CCardText>{props.description}</CCardText>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  );
};

export const MyBeersCard = (props) => {
  return (
    <CCard className="mb-3">
      <CRow className="g-0 parent hoverCard">
        <CCol md={2} className="text-center">
          <ReactTooltip place="top" type="dark" effect="solid"></ReactTooltip>
          <CCardImage src={props.image} style={{ width: "auto", maxHeight: "200px", margin: "16px 16px" }} data-tip={"Price: " + props.price} />
        </CCol>
        <CCol md={10}>
          <CCardBody>
            <CCardTitle>{props.name}</CCardTitle>
            <CCardText className='tagline'>Rs {props.price}</CCardText>
            <CCardText>{props.description}</CCardText>
            <div className='deleteAndPrice'>
              <button>
                <DeleteIcon /> Delete
              </button>
            </div>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  );
};
