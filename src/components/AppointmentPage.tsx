
import React, { useState } from "react";
import { DoctorCard } from "./ui/DoctorCard";
import { doctors } from "@/utils/data";
import { Search, Filter } from "lucide-react";
import { motion } from "framer-motion";

const AppointmentPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);

  // Get unique specialties
  const specialties = Array.from(new Set(doctors.map(doc => doc.specialty)));

  // Filter doctors based on search query and specialty
  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty ? doctor.specialty === selectedSpecialty : true;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="page-transition">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center justify-center p-2 bg-medical-secondary rounded-lg text-medical-primary mb-4">
            <span className="text-xs font-medium uppercase tracking-wider">Appointments</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Book an Appointment
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Find and schedule appointments with qualified healthcare providers.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search by doctor name or specialty"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full py-2.5 px-4 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-primary/50 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            
            <div className="flex items-center space-x-2 overflow-x-auto md:overflow-visible py-1">
              <div className="flex items-center text-gray-500 whitespace-nowrap">
                <Filter size={16} className="mr-1" />
                <span className="text-sm">Specialty:</span>
              </div>
              
              <button
                onClick={() => setSelectedSpecialty(null)}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors whitespace-nowrap ${
                  selectedSpecialty === null
                    ? "bg-medical-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              
              {specialties.map(specialty => (
                <button
                  key={specialty}
                  onClick={() => setSelectedSpecialty(specialty)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-colors whitespace-nowrap ${
                    selectedSpecialty === specialty
                      ? "bg-medical-primary text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {specialty}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredDoctors.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-lg font-medium text-gray-700">No doctors found</h3>
            <p className="text-gray-500 mt-1">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-1">
            {filteredDoctors.map(doctor => (
              <DoctorCard key={doctor.id} {...doctor} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AppointmentPage;
