import { EmptySearchPage } from "../imgs/Imgs";

export default function EmptyStateOfSearch() {
  return (
    <>
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        <EmptySearchPage />
        <h2>Search your note!</h2>
      </div>
    </>
  );
}
