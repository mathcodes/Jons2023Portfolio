import { Button } from 'your-component-library'; // Replace with your actual component library import
import { ArrowDownIcon } from 'your-icon-library'; // Replace with your actual icon library import

const Journals = () => {
  const journalData = [
    {
      title: 'Journal 1',
      file: '../public/files/journals/web4web3.pdf'
    },
    {
      title: 'Journal 2',
      file: '../../public/files/journals/Storyfier.pdf'
    },
    {
      title: 'Journal 3',
      file: '/files/journals/360VideosinMetaverse.pdf'
    },
  ];

  return (
    <div className="grid gap-4 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <h2 className="text-2xl font-bold">Journals</h2>
      {journalData.map((journal, index) => (
        <a key={index} href={journal.file} download={`${journal.title}.pdf`}>
          <div className="group border dark:group-hover border-blue-900 p-4 rounded-md transition group-active:border-blue-600 dark:group-hover:border-blue-800">
            <Button variant="secondary" className="w-full relative">
              Download {journal.title}
              <ArrowDownIcon className="h-4 w-4 stroke-blue-500 transition group-active:stroke-blue-600 dark:group-hover:stroke-blue-800 dark:group-active:stroke-blue-600" />
            </Button>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Journals;
