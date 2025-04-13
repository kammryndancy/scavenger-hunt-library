export interface ScavengerHuntGeneratorConfig {
  itemCount: number;
  season: string;
  includeAnimals: boolean;
  includePlants: boolean;
  includeInsects: boolean;
}

export interface ScavengerHuntItem {
  id: number;
  name: string;
  description: string;
  category: string;
  completed: boolean;
  photoUrl?: string;
}

export const generateScavengerHuntItems = (config: ScavengerHuntGeneratorConfig): ScavengerHuntItem[] => {
  const { itemCount, season, includeAnimals, includePlants, includeInsects } = config;
  const items: ScavengerHuntItem[] = [];
  
  // Generate items based on config
  for (let i = 0; i < itemCount; i++) {
    const category = (() => {
      const categories = [];
      if (includeAnimals) categories.push('Animals');
      if (includePlants) categories.push('Plants');
      if (includeInsects) categories.push('Insects');
      return categories[Math.floor(Math.random() * categories.length)];
    })();

    items.push({
      id: i + 1,
      name: `Find ${category} item ${i + 1}`,
      description: `Find a ${category.toLowerCase()} item during ${season}`,
      category,
      completed: false
    });
  }

  return items;
};
