import React from "react";
import styled from "styled-components";

const Moves = props => (
  <div className="container">
    <div className="row  text-center justify-content-md-center">
      {props.moves.map((move, index) => (
        <Card className="card col-3 text-center mb-3" key={index}>
          <div className="text-center">
            <div className="card-body text-center">
              <h5 className="card-title">{move.data.name.toUpperCase()}</h5>
              <p className="card-text">
                {move.data.effect_entries[0].short_effect.indexOf(
                  "$effect_chance"
                ) > 0
                  ? move.data.effect_entries[0].short_effect.replace(
                      "$effect_chance",
                      move.data.effect_chance
                    )
                  : move.data.effect_entries[0].short_effect}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default Moves;

const Card = styled.div`
  font-size: 12px;
`;
