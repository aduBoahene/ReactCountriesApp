import React from "react";

function CountryList({ countries }) {
  return (
    <div>
      {countries.map((a, index) => {
        return (
          <div className="row">
            {/* <div className="col l3 m6 s12"> */}
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={a.flag} />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">
                    {a.name}
                    <i className="material-icons right">more</i>
                  </span>
                  <p>
                    <a href="#">{a.capital}</a>
                  </p>
                </div>
                <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    Card Title
                    <i className="material-icons right">close</i>
                  </span>
                  <div>
                    {a.currencies.map((b, index) => {
                      return <h4>hello</h4>;
                    })}
                  </div>
                </div>
              </div>
            {/* </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default CountryList;

{
  /* <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="images/office.jpg">
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div> */
}
