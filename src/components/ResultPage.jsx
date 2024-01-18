import { useEffect, useState } from "react";
import axios from "axios";
import "./ResultPage.css";
import { GoStarFill } from "react-icons/go";

const ResultPage = ({ search }) => {
  const [data, setData] = useState([]);
  const [books, setBooks] = useState([]);
  const [display, setdisplay] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(
          "https://reactnd-books-api.udacity.com/books",
          { headers: { Authorization: "whatever-you-want" } }
        );
        setData(response.data.books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleData = () => {
      let tempBooks = data.filter((e) => {
        return e.title.toLowerCase().includes(search.toLowerCase());
      });
      setBooks(tempBooks);
    };

    if (search != "") {
      handleData(search);
      setdisplay(false);
    }
    if (search === "") {
      setdisplay(true);
    }
  }, [search]);

  return (
    <div className="allBooks">
      {display ? (
        data.map((e) => (
          <div key={e.id} className="book">
            <img src={e.imageLinks?.thumbnail} alt="" />
            <div className="bookName">
              <h4>{e.title}</h4>
              <div>
                <span>
                  <GoStarFill /> {e?.averageRating}
                </span>
                <span>Free</span>
              </div>
            </div>
          </div>
        ))
      ) : books.length != 0 ? (
        books.map((e) => (
          <div key={e.id} className="book">
            {/* <div> */}
            <img src={e.imageLinks?.thumbnail} alt="" />
            {/* search online for this line */}
            {/* </div> */}
            <div className="bookName">
              <h4>{e.title}</h4>
              <div>
                <span>
                  <GoStarFill /> {e?.averageRating}
                </span>
                <span>Free</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="err-msg">
          <h2>No Book Found</h2>
        </div>
      )}
    </div>
  );
};

export default ResultPage;