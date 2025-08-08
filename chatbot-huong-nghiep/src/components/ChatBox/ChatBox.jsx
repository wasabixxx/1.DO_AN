import { Card } from 'antd';
import MessageItem from '../MessageItem/MessageItem';
import { useTheme } from '../../context/ThemeContext';

const dummyMessages = [
  { sender: 'bot', text: 'Xin chào! Bạn muốn tìm hiểu ngành nào?' },
  { sender: 'user', text: 'Mình muốn học ngành AI.' },
  { sender: 'bot', text: 'Ngành AI đang rất phát triển, bạn cần kiến thức toán, lập trình, và xử lý dữ liệu.' },
];

const ChatBox = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Card
      bodyStyle={{
        backgroundColor: isDark ? '#2a2a2a' : '#fafafa',
        padding: 16,
        height: 300,
        overflowY: 'auto',
      }}
      style={{
        backgroundColor: isDark ? '#2a2a2a' : '#fff',
        borderRadius: 12,
        marginBottom: 16,
        border: isDark ? '1px solid #444' : '1px solid #e0e0e0',
      }}
    >
      {dummyMessages.map((msg, idx) => (
        <MessageItem key={idx} sender={msg.sender} text={msg.text} />
      ))}
    </Card>
  );
};

export default ChatBox;
