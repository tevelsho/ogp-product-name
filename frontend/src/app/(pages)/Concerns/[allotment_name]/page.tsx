'use client';
import React from 'react';
import { useParams, notFound } from 'next/navigation';

import Header from './components/Header';
import Breadcrumbs from '../../../components/Navigation/BreadCrumbs';
import Concerns from "./components/Concerns";
import SideBar from "../components/SideBar"

// used temporarily until backend is linked
const validAllotments = ['Plantation%20Acres', 'Tengah%20Community%20Club', 'Garden%20Vale','Plantation%20Grove'];

export default function TestConcern() {
  const { allotment_name } = useParams() as { allotment_name: string };

if (!validAllotments.includes(allotment_name as string)) {
    notFound();
    }

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-white">
      <div className="w-full max-w-screen-2xl">
        {/* In the future, might be better to use Breadcrumbs=allotment_name */}
        <Breadcrumbs />
        <Header />
        <div className="flex gap-12">
          <div className="w-full md:w-3/4 lg:w-4/5 pl-16">
            <Concerns allotmentName={allotment_name}/>
          </div>
          <div className="w-full md:w-1/4 lg:w-1/5">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
