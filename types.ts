
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'HVAC' | 'Maintenance';
}

export interface Area {
  name: string;
  primary: boolean;
}

export enum PageType {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  LANDING = 'landing',
  AREAS = 'areas',
  CONTACT = 'contact',
  AI = 'ai-tools'
}
