import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import SectionView from './SectionView';

const App = () => {
  const sectionsData = [
    {
      title: 'Lịch trình',
      events: [
        {
          location: 'Hồ Tràm, Vũng Tàu',
          time: '09:00 AM - 12:00 AM, 12/12/2024',
          transport: 'Xe bus',
          additionalTime: '21:00 - 22:00',
          image: 'https://dulichviet.com.vn/images/bandidau/kham-pha-27-dia-diem-du-lich-quang-ninh-view-dep-noi-tieng-hang-dau.jpg',
        },
      ],
    },
    {
      title: 'Khách sạn',
      events: [
        {
          title: 'Hồng Quỳnh',
          openTime: '06:00 AM - 12:00 AM',
          location: '234 Quang Trung, Hồ Chí Minh',
          button: '.',
        },
      ],
    },
  ];
  

  return (
    <SafeAreaView>
      <ScrollView>
        <SectionView sections={sectionsData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
