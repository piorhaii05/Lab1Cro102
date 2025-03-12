import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EventCard from './EventCard';

const SectionView = ({ sections }) => {
  return (
    <View style={styles.container}>
      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.events.map((event, idx) => (
            <EventCard key={idx} event={event} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default SectionView;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
