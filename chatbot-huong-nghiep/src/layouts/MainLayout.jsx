import { Layout, Menu, Switch } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  return (
    <Layout style={{ minHeight: '100vh', background: isDark ? '#121212' : '#f0f2f5' }}>
      <Header
        style={{
          backgroundColor: isDark ? '#1f1f1f' : '#001529',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 40px',
        }}
      >
        <div style={{ color: isDark ? '#ff4d4f' : '#fff', fontSize: 24, fontWeight: 'bold' }}>
          CareerBot
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Menu
            theme="dark"
            mode="horizontal"
            selectedKeys={[location.pathname]}
            style={{ background: 'transparent' }}
          >
            <Menu.Item key="/">
              <Link to="/">Trang chủ</Link>
            </Menu.Item>
            <Menu.Item key="/about">
              <Link to="/about">Giới thiệu</Link>
            </Menu.Item>
          </Menu>
          <Switch checked={isDark} onChange={toggleTheme} checkedChildren="🌙" unCheckedChildren="☀️" />
        </div>
      </Header>

      <Content style={{ padding: '40px 20px' }}>
        <div
          style={{
            maxWidth: 960,
            margin: '0 auto',
            background: isDark ? '#1e1e1e' : '#fff',
            color: isDark ? '#fff' : '#000',
            padding: 24,
            borderRadius: 12,
            boxShadow: isDark
              ? '0 0 10px rgba(255, 77, 79, 0.3)'
              : '0 2px 8px rgba(0,0,0,0.05)',
          }}
        >
          {children}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center', background: isDark ? '#1f1f1f' : '#f0f2f5', color: isDark ? '#ff4d4f' : '#666' }}>
        © 2025 CareerBot — Đồ án tốt nghiệp ngành CNTT
      </Footer>
    </Layout>
  );
};

export default MainLayout;
