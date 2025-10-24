import TabNavigation from '../TabNavigation';
import { useState } from 'react';

export default function TabNavigationExample() {
  const [activeTab, setActiveTab] = useState('sus');
  
  return (
    <TabNavigation 
      activeTab={activeTab} 
      onTabChange={(tab) => {
        setActiveTab(tab);
        console.log('Tab changed to:', tab);
      }} 
    />
  );
}
