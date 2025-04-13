import React from 'react';

interface ScavengerHuntFormProps {
  onGenerateHunt: (formData: {
    itemCount: number;
    season: string;
    includeAnimals: boolean;
    includePlants: boolean;
    includeInsects: boolean;
  }) => void;
}

declare const ScavengerHuntForm: React.ComponentType<ScavengerHuntFormProps>;

export default ScavengerHuntForm;
