import PropTypes from 'prop-types'

export default {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    rest: PropTypes.string,
    quantity: PropTypes.string,

  }),
  callback: PropTypes.func.isRequired,
  Delete: PropTypes.func,

}
