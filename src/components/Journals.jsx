import { Button } from 'your-component-library'; // Replace with your actual component library import
import { ArrowDownIcon } from 'your-icon-library'; // Replace with your actual icon library import

const Journals = () => {
  const journalData = [
    {
      title: 'Journal 1',
      file: 'https://github.com/mathcodes/Jons2023Portfolio/blob/main/public/files/journals/web4web3.pdf'
    },
    {
      title: 'Journal 2',
      file: 'https://github.com/mathcodes/Jons2023Portfolio/blob/main/public/files/journals/Storyfier.pdf'
    },
    {
      title: 'Journal 3',
      file: 'https://github.com/mathcodes/Jons2023Portfolio/blob/main/public/files/journals/360VideosinMetaverse.pdf'
    },
  ];

  return (
    <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <h2 className="text-2xl font-bold">Journals</h2>
      {journalData.map((journal, index) => (
        <a key={index} href={journal.file} download={`${journal.title}.pdf`}>
          <div className="">
            <Button variant="secondary" className="">
              Download {journal.title}
              <ArrowDownIcon className="" />
            </Button>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Journals;
