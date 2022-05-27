import Link from 'next/link';

const Support = () => {
  return (
    <div className="justify-center text-lg p-8">
      <Link href="/">
        <a>{`<- Home`}</a>
      </Link>
      <h2 className="text-4xl p-8">For Nano Recipes support: </h2>
      <p>Pleae email info@nanorecipes.com</p>
    </div>
  );
};

export default Support;
