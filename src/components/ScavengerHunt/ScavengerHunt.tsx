import React from 'react';
import styled from 'styled-components';
import ScavengerHuntForm from '@/components/ScavengerHunt/ScavengerHuntForm';
import ScavengerHuntList from '@/components/ScavengerHunt/ScavengerHuntList';
import { generateScavengerHuntItems, ScavengerHuntItem, ScavengerHuntGeneratorConfig } from '@/utils/scavengerHuntGenerator';

interface ScavengerHuntProps {
  title?: string;
  description?: string;
}

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #333;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
`;

const ScavengerHunt: React.FC<ScavengerHuntProps> = ({
  title = 'Scavenger Hunt',
  description = 'Find and complete all items in the list'
}) => {
  const [scavengerHuntItems, setScavengerHuntItems] = React.useState<ScavengerHuntItem[]>([]);
  const [isHuntGenerated, setIsHuntGenerated] = React.useState(false);

  const generateHunt = (formData: ScavengerHuntGeneratorConfig) => {
    const items = generateScavengerHuntItems(formData);
    setScavengerHuntItems(items);
    setIsHuntGenerated(true);
  };

  const resetHunt = () => {
    setScavengerHuntItems([]);
    setIsHuntGenerated(false);
  };

  return (
    <AppContainer>
      <Header>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
      </Header>
      
      {!isHuntGenerated ? (
        <ScavengerHuntForm onGenerateHunt={generateHunt} />
      ) : (
        <ScavengerHuntList items={scavengerHuntItems} onReset={resetHunt} />
      )}
    </AppContainer>
  );
};

export default ScavengerHunt;
