import DanhSachX from '../components/DanhSachX';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
    tag: state.tag,
    targetX: state.targetX
});

export default connect(
  mapStateToProps,
  null
)(DanhSachX);