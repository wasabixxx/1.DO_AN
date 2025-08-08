import { Card } from 'antd';
import { useTheme } from '../../context/ThemeContext';

const MessageItem = ({ sender, text }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isUser = sender === 'user';

  const bgColor = isUser
    ? '#ff4d4f'
    : isDark
    ? '#444'
    : '#d9d9d9'; // đổi từ #f0f0f0 thành #d9d9d9 để dễ nhìn hơn

  const textColor = isUser || isDark ? '#fff' : '#000';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: 8,
      }}
    >
      <Card
        size="small"
        style={{
          maxWidth: '75%',
          backgroundColor: bgColor,
          color: textColor,
          borderRadius: 8,
        }}
        bodyStyle={{ padding: '8px 12px' }}
      >
        {text}
      </Card>
    </div>
  );
};

export default MessageItem;
