
import React, { useState } from "react";
import { medications } from "@/utils/data";
import { CustomButton } from "./ui/CustomButton";
import { Clock, Plus, Edit, Trash2, Bell, Check } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const MedicationPage: React.FC = () => {
  const [meds, setMeds] = useState(medications);

  const handleAddMedication = () => {
    toast.info("This feature would allow adding new medications. Currently using demo data.");
  };

  const handleToggleMedication = (id: string) => {
    setMeds(meds.map(med => 
      med.id === id ? { ...med, active: !med.active } : med
    ));
    
    const medication = meds.find(med => med.id === id);
    if (medication) {
      toast.success(`${medication.active ? 'Disabled' : 'Enabled'} reminder for ${medication.name}`);
    }
  };

  const formatTime = (timeString: string) => {
    return timeString.split(',').map(time => {
      const [hours, minutes] = time.split(':');
      return new Date(0, 0, 0, parseInt(hours), parseInt(minutes)).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }).join(', ');
  };

  return (
    <div className="page-transition">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center justify-center p-2 bg-medical-secondary rounded-lg text-medical-primary mb-4">
            <span className="text-xs font-medium uppercase tracking-wider">Medication Reminders</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Never Miss a Dose
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Set up reminders for your medications and stay on track with your health regimen.
          </p>
        </div>

        <div className="flex justify-end mb-6">
          <CustomButton 
            onClick={handleAddMedication}
            className="flex items-center"
          >
            <Plus className="mr-2 h-4 w-4" />
            Add Medication
          </CustomButton>
        </div>

        <div className="space-y-4">
          {meds.map((medication) => (
            <motion.div
              key={medication.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="p-5 flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-grow">
                  <div className="flex items-center">
                    <h3 className="text-lg font-semibold text-gray-900 mr-2">{medication.name}</h3>
                    <span className="bg-medical-secondary text-medical-dark text-xs font-medium px-2 py-1 rounded-full">
                      {medication.dosage}
                    </span>
                  </div>
                  
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Clock className="h-4 w-4 mr-1.5 text-medical-primary" />
                      {medication.frequency} • {formatTime(medication.time)}
                    </div>
                    {medication.notes && (
                      <p className="text-sm text-gray-500">
                        {medication.notes}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                  <button
                    onClick={() => handleToggleMedication(medication.id)}
                    className={`p-2 rounded-full transition-colors ${
                      medication.active
                        ? 'bg-medical-secondary text-medical-dark hover:bg-medical-accent'
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                  >
                    {medication.active ? <Bell className="h-5 w-5" /> : <Bell className="h-5 w-5" />}
                  </button>
                  
                  <button
                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  
                  <button
                    className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {medication.active && (
                <div className="px-5 py-3 bg-medical-secondary border-t border-medical-accent flex items-center">
                  <Check className="h-4 w-4 text-medical-primary mr-2" />
                  <span className="text-sm text-medical-dark">Reminder active</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MedicationPage;
