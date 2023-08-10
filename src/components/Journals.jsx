import { GiArchiveResearch } from 'react-icons/gi';
import { Button } from '@/components/Button'

const Journals = () => {
  const journalData = [
    {
      title: 'The Two Faces of AI in Green Mobile Computing: A Literature Review',
      file: 'https://arxiv.org/pdf/2308.04436'
    },
    {
      title: 'Storyfier: Exploring Vocabulary Learning Support with Text Generation Models',
      file: 'https://arxiv.org/pdf/2308.03864'
    },
    {
      title: 'A Review of Gaps between Web 4.0 and Web 3.0 Intelligent Network Infrastructure',
      file: 'https://arxiv.org/pdf/2308.02996'
    },
    {
      title: 'Developmental Bootstrapping of AIs',
      file: 'https://arxiv.org/pdf/2308.04586'
    }
  ];


  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm text-zinc-900 dark:text-zinc-100 font-bold font-bold">

        <GiArchiveResearch className="text-2xl text-zinc-900 dark:text-zinc-100" />
        <span className="ml-3">
          Journals Of Interest</span>
      </h2>

      <div className=" mt-6 space-y-4 grid gap-4 md:gap-6 lg:gap-8 grid-cols-1  lg:grid-cols-2">
        {journalData.map((journal, index) => (

          <div key={journal.title} className="group text-sm text-zinc-900 hover:text-zinc-900 dark:text-zinc-100 border   border-blue-900 p-4 rounded-md transition group-active:border-blue-600  ">
            {journal.title}
            <a key={index} href={journal.file} download={`${journal.title}.pdf`}>
              <Button variant="secondary" className="mt-6 w-full relative border stroke-red-600 border-red-600 text-white font-bold transition group-active:stroke-red-600 dark:group-hover:stroke-red-900 dark:group-active:stroke-red-500">
                <div className=""> Download ▼ </div>
              </Button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journals;
