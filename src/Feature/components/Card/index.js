import React, { Fragment } from "react";

function Card({ pokemon }) {
  console.log(pokemon);
  return (
    <Fragment>
      <div className="row">
        {pokemon.map((data, i) => {
          return (
            <div className="col-3 pb-5" key={i + 1}>
              <div className="card" style={{ width: 250 }}>
                <img
                  className="card-img-top"
                  src={data.sprites.front_default}
                  alt="Card Pokemon"
                />
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title text-center text-capitalize">
                      {data.species.name}
                    </h5>
                    {data.types.map((data, i) => (
                      <span key={i + 1} className="badge badge-primary ml-3">
                        {data.type.name}
                      </span>
                    ))}
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <p className="card-text text-capitalize m-0">
                        Weight: {data.weight}
                      </p>
                      <p className="card-text text-capitalize m-0">
                        height: {data.height}
                      </p>

                      {data.stats.map((d_stat, i) => (
                        <Fragment key={i + 1}>
                          <p className="card-text text-capitalize m-0">
                            {d_stat.stat.name}
                          </p>
                          <span className="progress">
                            <div
                              className="progress-bar"
                              role="progressbar"
                              style={{ width: `${d_stat.base_stat}%` }}
                              aria-valuenow={d_stat.base_stat}
                              aria-valuemin="0"
                              aria-valuemax="100"
                            >
                              {d_stat.base_stat}%
                            </div>
                          </span>
                        </Fragment>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Card;
