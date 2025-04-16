import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Favourites = () => {
  const favourites = useSelector(state => state.favourites.companies)

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Aziende Preferite</h1>
          <ul>
            {favourites.map(company => (
              <li key={company}>
                <Link to={`/${company}`}>{company}</Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites