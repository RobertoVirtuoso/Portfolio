// components/Logo.tsx
import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <p className="text-3xl font-bold hover:text-rose-700 transition duration-150 outline-none">
        <Link href="/">Roberto</Link>
      </p>
      <div style={{ transform: 'rotate(90deg)' }}>
        <Image
          src="/dna.webp"
          width={30}
          height={30}
          alt="logo"
          className="shadow-sm"
        />
      </div>
      <p className="text-3xl font-bold hover:text-cyan-500 transition duration-150 outline-none">
        <Link href="/Main">Vicioso</Link>
      </p>
    </div>
  );
};

export default Logo;
