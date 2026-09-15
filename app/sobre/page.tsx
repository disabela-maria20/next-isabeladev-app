import { Education, Experience, Intro } from '@/features/about';

export default function pageAbout() {
  return (
    <div>
      <Intro />
      <Experience />
      <Education />
    </div>
  );
}
