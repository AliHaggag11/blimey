interface PlaceholderImageProps {
  category: string;
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}

export function PlaceholderImage({ 
  category, 
  width = 800, 
  height = 600, 
  text,
  className = "" 
}: PlaceholderImageProps) {
  const baseUrl = "https://placehold.co";
  const textParam = text ? `&text=${encodeURIComponent(text)}` : '';
  const imageUrl = `${baseUrl}/${width}x${height}.png?text=${encodeURIComponent(category)}${textParam}`;
  
  return (
    <img 
      src={imageUrl}
      alt={category}
      className={`w-full h-full object-cover transition-transform duration-700 ${className}`}
    />
  );
} 