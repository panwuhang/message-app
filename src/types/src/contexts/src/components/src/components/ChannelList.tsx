import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Channel, ApiResponse } from '../types';
import styles from '../styles/ChannelList.module.css';

const ChannelList: React.FC = () => {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await fetch('https://messenger-ae5085.gitlab.io/messages.json');
        const data: ApiResponse = await response.json();
        setChannels(data.channels);
      } catch (error) {
        console.error('Error fetching channels:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchChannels();
  }, []);

  const getChannelLogo = (name: string) => {
    return name.substring(0, 2).toUpperCase();
  };

  if (loading) {
    return <div className={styles.loading}>Loading channels...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Channels</h1>
      <div className={styles.channelList}>
        {channels.map((channel) => (
          <div
            key={channel.id}
            className={styles.channelItem}
            onClick={() => navigate(`/channel/${channel.id}`)}
          >
            <div className={styles.channelLogo}>
              {getChannelLogo(channel.name)}
            </div>
            <div className={styles.channelInfo}>
              <div className={styles.channelName}>{channel.name}</div>
              <div className={styles.lastMessage}>{channel.lastMessage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChannelList;
