import { useState, useRef } from "react";
import "../Hero/Hero.css";
const Hero = () => {
  const [isName, setIsName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");

  const [data, setData] = useState([
    { id: 1, isname: "Martin Iden", author: "Jack London", price: 222 },
  ]);

  const check = {
    name: isName.trim().length === 0,
    price: price.trim().length === 0,
    author: author.trim().length === 0,
  };

  const addElement = () => {
    if (check.name || check.price || check.author) {
      alert("Please Enter a name and price for this check");
    } else {
      const item = {
        id: Date.now(),
        isname: isName,
        author: author,
        price: price,
      };

      setData([...data, item]);
      setAuthor("");
      setIsName("");
      setPrice("");
    }

    removeItem();
  };

  console.log(data);

  return (
    <>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="hero-inner pt-5">
            <input
              type="text"
              value={isName}
              className="form-control w-75 p-3 m-2 mx-auto"
              placeholder="Enter book name"
              onChange={(e) => setIsName(e.target.value)}
            />
            <input
              type="text"
              className="form-control w-75 p-3 m-2 mx-auto"
              placeholder="Enter book author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <input
              type="text"
              className="form-control w-75 p-3 m-2 mx-auto"
              placeholder="Enter book author"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button
              className="btn btn-success w-75"
              onClick={() => addElement()}
              style={{ marginLeft: "75px" }}
            >
              Add
            </button>
          </div>
          <div className="hero-inner">
            <table className="table table-striped table-hover mx-auto">
              <thead>
                <tr className="justify-content-around d-flex">
                  <th className="text-info">ID</th>{" "}
                  <th className="text-info">Book name</th>{" "}
                  <th className="text-info">Book price</th>{" "}
                  <th className="text-info">Control</th>
                </tr>
              </thead>

              <div className="flex-column justify-content-around align-items-center mt-2">
                {data.map((item, idx) => {
                  return (
                    <div
                      className="d-flex justify-content-between mx-5 list"
                      key={item.id}
                    >
                      <p className="bnnma text-success fw-bold">{idx + 1}</p>
                      <p className="bnnma text-success fw-bold">
                        {item.isname}
                      </p>
                      <p className="bnnma text-success fw-bold">
                        {item.author}
                      </p>
                      <p>
                        <button
                          className="hero-btn"
                          onClick={() => remove(data)}
                        >
                          Delete
                        </button>
                      </p>
                    </div>
                  );
                })}
              </div>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
