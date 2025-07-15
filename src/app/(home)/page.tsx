"use client"

import { Navbar } from "./Navbar";
import { TemplatesGallery } from "./TemplatesGallery";
import { usePaginatedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { DocumentsTable } from "./DocumentsTable";

export default function Home() {

  const {results, status, loadMore} = usePaginatedQuery(api.documents.getDocuments, {}, { initialNumItems: 5})

  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-3">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
        <DocumentsTable
          documents={results}
          loadMore={loadMore}
          status={status}
        />
      </div>
    </div>
  );
}
