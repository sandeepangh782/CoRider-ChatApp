import React, { useState, useEffect } from 'react';
import { 
  View, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator 
} from 'react-native';
import { fetchChatMessages } from '../api/ChatApi';
import ChatHeader from '../components/ChatHeader';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import DateSeparator from '../components/DateSeparator';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [tripInfo, setTripInfo] = useState(null);

  const loadMessages = async (pageNum = 0) => {
    if (loading) return;
    
    setLoading(true);
    try {
      const data = await fetchChatMessages(pageNum);
      if (pageNum === 0) {
        setMessages(data.chats);
        setTripInfo({ from: data.from, to: data.to });
      } 
      else {
        setMessages(prev => [...data.chats, ...prev]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleLoadMore = () => {
    // setPage(prev => prev + 1);
    // loadMessages(page + 1);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }).toUpperCase();
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };
  const renderItem = ({ item, index }) => {
    let showDateSeparator = false;
    let dateString = formatDate(item.time);
    

    if (index === messages.length - 1) {
      showDateSeparator = true;
    } else {
      const nextMessage = messages[index + 1];
      const nextDateString = formatDate(nextMessage.time);
      
      if (dateString !== nextDateString) {
        showDateSeparator = true;
      }
    }

    return (
      <>
        <ChatMessage 
          message={item}
          isSelf={item.sender.self}
        />
        {showDateSeparator && <DateSeparator date={dateString} />}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <ChatHeader 
        from={tripInfo?.from} 
        to={tripInfo?.to}
      />
      
      <FlatList
        data={messages}
        inverted
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator /> : null}
      />
      
      <ChatInput />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9F4',
  },
});

export default ChatScreen;