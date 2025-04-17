import { useState } from "react"
import { Container, Row, Col, Form, Navbar, Nav, Spinner, Alert } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchJobsAction } from "../redux/actions/jobsActions"
import { Link } from "react-router-dom"
import Job from "./Job"

const MainSearch = () => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()

  const { results, loading, error } = useSelector(state => state.jobs)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim() !== '') {
      dispatch(fetchJobsAction(query))
    }
  }

  return (
    <Container>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand as={Link} to="/">Remote Jobs</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/favourites">Preferiti</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Cerca e premi invio" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          {loading && <Spinner animation="border" />}
          {error && <Alert variant="danger">Errore durante il caricamento</Alert>}
          {results.map(job => <Job key={job._id} data={job} />)}
        </Col>
      </Row>
    </Container>
  )
}

export default MainSearch