import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cleanUpProducts, fetchProducts } from "../store/slices/products-slice";

const SearchInput = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = useState("");

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      if (term.trim()) {
        dispatch(cleanUpProducts());
        dispatch(fetchProducts(term));
      } else {
        dispatch(fetchProducts(""));
      }
    }, 800);
    return () => clearTimeout(debounceSearch);
  }, [dispatch, term]);

  return (
    <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
    </Form>
  );
};

export default SearchInput;

/*



const [term, setTerm] = useState('javascript');
const [result, setResult] = useState([]);

const prevStateTerm = useRef('');

useEffect(() => {
  prevStateTerm.current = term;
}, [term]);

const prevTerm = prevStateTerm.current;

useEffect(() => {
  const search = async () => {
    const respond = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: term,
      },
    });
    setResult(respond.data.query.search);
  };

  if (!result.length) {
    search();
  } else if (term !== prevTerm) {
    const debounceSearch = setTimeout(() => {
      if (term) {
        search();
      }
    }, 2000);

    return () => {
      clearTimeout(debounceSearch);
    };
  }
}, [term, result.length, prevTerm]);
*/
