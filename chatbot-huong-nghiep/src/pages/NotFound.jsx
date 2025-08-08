import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Result
    status="404"
    title="Không tìm thấy trang"
    subTitle="Trang bạn yêu cầu không tồn tại."
    extra={
      <Link to="/">
        <Button type="primary">Quay về trang chủ</Button>
      </Link>
    }
  />
);

export default NotFound;
