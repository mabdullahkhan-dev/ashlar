import ProjectsGrid from '@/components/home/ProjectsGrid';
import CtaBanner from '@/components/shared/CtaBanner';

export const metadata = {
  title: 'Projects — Ashlar Construction Engineering',
};

export default function ProjectsPage() {
  return (
    <>
      <div style={{ paddingTop: '80px' }}>
        <ProjectsGrid showFilters />
      </div>
      <CtaBanner
        heading={
          <>
            Your home,<br />
            <em className="not-italic italic" style={{ color: 'var(--color-copper-light)' }}>on this list.</em>
          </>
        }
        body="Every project here started with a single site visit and an honest conversation about budget."
      />
    </>
  );
}
