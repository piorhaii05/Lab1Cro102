import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const EventCard = ({ event }) => {
  return (
    <View style={styles.card}>
      {event.transport && (
        <>
          <Text style={styles.label}>Địa điểm</Text>
          <Text style={styles.title}>{event.location}</Text>
        </>
      )}

      {event.time && (
        <>
          <Text style={styles.label}>Thời gian</Text>
          <Text style={styles.info}>{event.time}</Text>
        </>
      )}
      {event.transport && (
        <>
          <Text style={styles.label}>Phương tiện di chuyển</Text>
          <Text style={styles.info}>{event.transport}</Text>
        </>
      )}

      {event.additionalTime && (
        <>
          <Text style={styles.label}>Thời gian di chuyển</Text>
          <Text style={styles.info}>{event.additionalTime}</Text>
        </>
      )}

      {event.image && (
        <>
          <Text style={styles.label}>Hình ảnh</Text>
          <Image source={{ uri: event.image }} style={styles.image} />
        </>
      )}

      {event.title && (
        <>
          <Text style={styles.label}>Tên khách sạn</Text>
          <Text style={styles.info}>{event.title}</Text>
        </>
      )}

      {event.openTime && (
        <>
          <Text style={styles.label}>Giờ mở cửa</Text>
          <Text style={styles.info}>{event.openTime}</Text>
        </>
      )}

      {event.button && (
        <>
          <Text style={styles.label}>Địa điểm</Text>
          <Text style={styles.info}>{event.location}</Text>
        </>
      )}

      {event.button && (
        <>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CHI TIẾT</Text>
          </TouchableOpacity>
        </>
      )}

    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginTop: 5,
  },
});
