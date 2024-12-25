
interface SectionHeadingProps {
  title: string;
  subtitle: string;
  description?: string;
}

export function SectionHeading({ title, subtitle, description }: SectionHeadingProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h3 className="text-primary mb-4 font-medium tracking-wide uppercase text-sm">
        {subtitle}
      </h3>
      <h2 className="text-4xl md:text-5xl font-serif mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
} 