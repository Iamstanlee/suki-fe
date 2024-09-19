type IconProps = {
  className?: string;
  name: any;
  size?: number;
  type?: 'png' | 'svg';
};

const Icon = ({ name, size, className, type = 'svg' }: IconProps) => (
  <img
    src={`./icons/${name}.${type}`}
    height={size}
    width={size}
    alt={name}
    className={className}
  />
);

export default Icon;