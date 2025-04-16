import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavourites, removeFromFavourites } from '../redux/favouritesSlice'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const favourites = useSelector(state => state.favourites.companies)
  const isFavourite = favourites.includes(data.company_name)

  const toggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFromFavourites(data.company_name))
    } else {
      dispatch(addToFavourites(data.company_name))
    }
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={3}>
        <Button variant={isFavourite ? 'danger' : 'outline-success'} onClick={toggleFavourite}>
          {isFavourite ? 'Rimuovi' : 'Preferito'}
        </Button>
      </Col>
    </Row>
  )
}

export default Job