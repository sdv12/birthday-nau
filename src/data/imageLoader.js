import { userPhotoConfig } from './userPhotoConfig';

export async function loadImagesForUser(name) {
  if (!name) return [];

  try {
    const images = import.meta.glob('/src/assets/photos/**/*.{jpg,jpeg,png}', {
      eager: true,
      import: 'default'
    });

    const normalizedName = name.toLowerCase();
    const userConfig = userPhotoConfig[normalizedName];
    
    if (!userConfig) return [];

    const folderPath = userConfig.path.toLowerCase(); // <-- Convertir a minúscula
    console.log('Buscando en ruta normalizada:', folderPath);

    return Object.entries(images)
      .filter(([path]) => path.toLowerCase().includes(folderPath)) // <-- Comparar en minúsculas
      .map(([, module]) => module);
  } catch (error) {
    console.error('Error loading images:', error);
    return [];
  }
}