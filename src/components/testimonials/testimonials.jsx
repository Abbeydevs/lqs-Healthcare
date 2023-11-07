import data from "./testimonial-data";

import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="custom-container">
      <small>WHAT ARE CLIENTS SAY</small>
      <h1>Reviews</h1>
      <p className="mt-2 testimony">
        LQS Healthcare Services Ltd are a domiciliary care agency who provide
        extra assistance in your own home. If you’re looking for a dependable
        healthcare agency in Worthing, Lancing, Steyning, Bramber, Henfield,
        Shoreham, Southwick or elsewhere in Sussex you can count on LQS
        Healthcare Services Ltd.
      </p>
      <div className="mt-5">
        {data.map((data) => (
          <div>
            <p>{data.testimony}</p>
            <small className="c-name fw-bold">{data.name}</small>
            <div className="divider  my-4"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
