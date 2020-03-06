import React from "react";
import styled from "styled-components";

const Abilities = props => (
  <div className="container-fluid">
    <div className="row  text-center justify-content-md-center">
      <div className="card-group">
        {props.abilities.map((ability, index) => (
          <Card className="card col-4 text-center mb-3" key={index}>
            <div className="text-center">
              <div className="card-body text-center">
                <h5 className="card-title">
                  {ability.data.name.toUpperCase()}
                </h5>
                <p className="card-text">
                  {ability.data.effect_entries[0].short_effect}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default Abilities;

const Card = styled.div`
  font-size: 12px;
`;
