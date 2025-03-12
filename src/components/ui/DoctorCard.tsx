
import React from "react";
import { Calendar } from "lucide-react";
import { CustomButton } from "./CustomButton";

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  image: string;
  experience: number;
  rating: number;
  availability: string[];
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  id,
  name,
  specialty,
  image,
  experience,
  rating,
  availability,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative overflow-hidden">
          <img
            src={image}
            alt={`Dr. ${name}`}
            className="w-full h-48 md:h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-medical-dark px-2 py-1 rounded-full text-xs font-medium">
            ★ {rating.toFixed(1)}
          </div>
        </div>
        
        <div className="p-4 md:p-5 md:w-2/3 flex flex-col">
          <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-medical-primary font-medium">{specialty}</p>
            <div className="text-sm text-gray-600 mt-1">{experience} years of experience</div>
          </div>
          
          <div className="mb-3 flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-1 text-medical-primary" />
            <span>Available: {availability.join(", ")}</span>
          </div>
          
          <div className="mt-auto pt-3">
            <CustomButton className="w-full md:w-auto">
              Book Appointment
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};
