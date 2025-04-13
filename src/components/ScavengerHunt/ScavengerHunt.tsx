import React, { useState } from 'react';
import styled from 'styled-components';
import ScavengerHuntForm from './ScavengerHuntForm';
import ScavengerHuntList from './ScavengerHuntList';
import { generateScavengerHuntItems } from './utils/scavengerHuntGenerator';

const AppContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  color: #2e7d32;
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #558b2f;
  font-size: 1.2rem;
`;

const ScavengerHunt = ({
  items,
  title = 'Scavenger Hunt',
  description = 'Find and complete all items in the list',
  onStart,
  onComplete,
  onPhotoUpload
}) => {
  const [scavengerHuntItems, setScavengerHuntItems] = useState([]);
  const [isHuntGenerated, setIsHuntGenerated] = useState(false);

  const generateHunt = (formData) => {
    const { itemCount, season, includeAnimals, includePlants, includeInsects } = formData;
    
    const items = generateScavengerHuntItems({
      count: itemCount,
      season,
      includeAnimals,
      includePlants,
      includeInsects
    });
    
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

ScavengerHunt.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      photoUrl: PropTypes.string
    })
  ).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  onStart: PropTypes.func,
  onComplete: PropTypes.func,
  onPhotoUpload: PropTypes.func
};

export default ScavengerHunt;
