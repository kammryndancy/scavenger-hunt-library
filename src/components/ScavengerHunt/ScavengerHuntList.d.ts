import React from 'react';

interface ScavengerHuntItem {
  id: number;
  name: string;
  description: string;
  category: string;
  completed: boolean;
  photoUrl?: string;
}

interface ScavengerHuntListProps {
  items: ScavengerHuntItem[];
  onReset: () => void;
}

declare const ScavengerHuntList: React.ComponentType<ScavengerHuntListProps>;

export default ScavengerHuntList;
