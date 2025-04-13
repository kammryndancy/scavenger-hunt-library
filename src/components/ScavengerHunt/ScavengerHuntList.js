import React, { useState } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ListTitle = styled.h2`
  color: #2e7d32;
  margin-bottom: 20px;
`;

const ItemsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 30px;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
  transition: background-color 0.2s;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #f9f9f9;
  }
  
  ${props => props.found && `
    text-decoration: line-through;
    color: #7cb342;
    background-color: #f1f8e9;
  `}
`;

const ItemCheckbox = styled.input`
  margin-right: 15px;
  transform: scale(1.3);
  cursor: pointer;
`;

const ItemContent = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  gap: 15px;
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid #e0e0e0;
`;

const ItemName = styled.span`
  font-size: 18px;
  flex-grow: 1;
`;

const ItemCategory = styled.span`
  background-color: ${props => {
    switch(props.category) {
      case 'animal': return '#ffcc80';
      case 'plant': return '#a5d6a7';
      case 'insect': return '#90caf9';
      default: return '#e0e0e0';
    }
  }};
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  margin-left: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: ${props => props.primary ? '#2e7d32' : '#f44336'};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.primary ? '#1b5e20' : '#d32f2f'};
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #7cb342;
  width: ${props => props.percentage}%;
  transition: width 0.5s ease-in-out;
`;

const ProgressText = styled.p`
  text-align: center;
  font-weight: 600;
  color: #33691e;
  margin-bottom: 20px;
`;

const ScavengerHuntList = ({ items, onReset }) => {
  const [foundItems, setFoundItems] = useState(items.map(() => false));

  const handleItemToggle = (index) => {
    const newFoundItems = [...foundItems];
    newFoundItems[index] = !newFoundItems[index];
    setFoundItems(newFoundItems);
  };

  const resetChecklist = () => {
    setFoundItems(items.map(() => false));
  };

  const foundCount = foundItems.filter(Boolean).length;
  const progressPercentage = (foundCount / items.length) * 100;

  return (
    <ListContainer>
      <ListTitle>Your Nature Scavenger Hunt</ListTitle>

      <ProgressBar>
        <Progress percentage={progressPercentage} />
      </ProgressBar>

      <ProgressText>
        {foundCount} of {items.length} items found ({Math.round(progressPercentage)}%)
      </ProgressText>

      <ItemsList>
        {items.map((item, index) => (
          <Item key={index} found={foundItems[index]}>
            <ItemCheckbox
              type="checkbox"
              checked={foundItems[index]}
              onChange={() => handleItemToggle(index)}
            />
            <ItemContent>
              <ItemImage src={item.image} alt={item.name} />
              <ItemName>{item.name}</ItemName>
            </ItemContent>
            <ItemCategory category={item.category}>
              {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </ItemCategory>
          </Item>
        ))}
      </ItemsList>
      
      <ButtonGroup>
        <Button primary onClick={resetChecklist}>Reset Checklist</Button>
        <Button onClick={onReset}>Create New Hunt</Button>
      </ButtonGroup>
    </ListContainer>
  );
};

export default ScavengerHuntList;