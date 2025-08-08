import { Input, Button, Form, message } from 'antd';
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';

const UserInput = () => {
  const [input, setInput] = useState('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const onFinish = () => {
    if (!input.trim()) {
      message.warning('Bạn chưa nhập nội dung!');
      return;
    }

    message.success(`Đã gửi: ${input}`);
    setInput('');
  };

  return (
    <Form layout="inline" onFinish={onFinish} style={{ marginTop: 8 }}>
      <Form.Item style={{ flex: 1 }}>
        <Input
          placeholder="Nhập câu hỏi..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            backgroundColor: isDark ? '#1f1f1f' : '#fff',
            color: isDark ? '#fff' : '#000',
            borderColor: '#ff4d4f',
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            backgroundColor: '#ff4d4f',
            borderColor: '#ff4d4f',
          }}
        >
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserInput;
