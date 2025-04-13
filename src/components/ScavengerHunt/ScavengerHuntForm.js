import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  color: #2e7d32;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #33691e;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #7cb342;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  &:focus {
    outline: none;
    border-color: #7cb342;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #2e7d32;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #1b5e20;
  }
`;

const ErrorMessage = styled.p`
  color: #d32f2f;
  margin-top: 5px;
  font-size: 14px;
`;

const ScavengerHuntForm = ({ onGenerateHunt }) => {
  const [formData, setFormData] = useState({
    itemCount: 5,
    season: 'any',
    includeAnimals: true,
    includePlants: true,
    includeInsects: true
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (formData.itemCount < 1 || formData.itemCount > 20) {
      newErrors.itemCount = 'Please select between 1 and 20 items';
    }
    
    if (!formData.includeAnimals && !formData.includePlants && !formData.includeInsects) {
      newErrors.categories = 'Please select at least one category';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onGenerateHunt({
        ...formData,
        itemCount: parseInt(formData.itemCount, 10)
      });
    }
  };

  return (
    <FormContainer>
      <FormTitle>Create Your Scavenger Hunt</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="itemCount">Number of Items to Find (1-20):</Label>
          <Input
            type="number"
            id="itemCount"
            name="itemCount"
            min="1"
            max="20"
            value={formData.itemCount}
            onChange={handleChange}
          />
          {errors.itemCount && <ErrorMessage>{errors.itemCount}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <Label htmlFor="season">Season:</Label>
          <Select
            id="season"
            name="season"
            value={formData.season}
            onChange={handleChange}
          >
            <option value="any">Any Season</option>
            <option value="spring">Spring</option>
            <option value="summer">Summer</option>
            <option value="fall">Fall</option>
            <option value="winter">Winter</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Categories to Include:</Label>
          <CheckboxGroup>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="includeAnimals"
                checked={formData.includeAnimals}
                onChange={handleChange}
              />
              Animals
            </CheckboxLabel>

            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="includePlants"
                checked={formData.includePlants}
                onChange={handleChange}
              />
              Plants
            </CheckboxLabel>

            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="includeInsects"
                checked={formData.includeInsects}
                onChange={handleChange}
              />
              Insects
            </CheckboxLabel>
          </CheckboxGroup>
          {errors.categories && <ErrorMessage>{errors.categories}</ErrorMessage>}
        </FormGroup>
        
        <Button type="submit">Generate Scavenger Hunt</Button>
      </form>
    </FormContainer>
  );
};

export default ScavengerHuntForm;