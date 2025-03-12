
import React, { useState } from "react";
import { Search, RefreshCw } from "lucide-react";
import { symptomDiseaseMap } from "@/utils/data";
import { CustomButton } from "./ui/CustomButton";
import { toast } from "sonner";

const SymptomChecker: React.FC = () => {
  const [symptoms, setSymptoms] = useState("");
  const [results, setResults] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);

  const handleSymptomSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const symptomLower = symptoms.toLowerCase().trim();
      
      // Find matching diseases
      let foundDiseases: any[] = [];
      
      for (const [symptom, data] of Object.entries(symptomDiseaseMap)) {
        if (symptomLower.includes(symptom)) {
          foundDiseases = [...foundDiseases, ...data.diseases];
        }
      }
      
      if (foundDiseases.length === 0) {
        toast.error("No matching diseases found for the symptoms you entered.");
        setResults(null);
      } else {
        setResults(foundDiseases);
        setSelectedDisease(foundDiseases[0].name);
        toast.success(`Found ${foundDiseases.length} potential condition(s) based on your symptoms.`);
      }
      
      setLoading(false);
    }, 1500);
  };

  const handleClear = () => {
    setSymptoms("");
    setResults(null);
    setSelectedDisease(null);
  };

  const getSelectedDiseaseData = () => {
    if (!results || !selectedDisease) return null;
    return results.find(disease => disease.name === selectedDisease);
  };

  const diseaseData = getSelectedDiseaseData();

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
        <form onSubmit={handleSymptomSearch} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="symptoms" className="text-sm font-medium text-gray-700">
              Enter your symptoms
            </label>
            <div className="relative">
              <input
                id="symptoms"
                type="text"
                value={symptoms}
                onChange={(e) => setSymptoms(e.target.value)}
                placeholder="e.g., fever, headache, cough"
                className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-medical-primary/50 focus:border-transparent"
                required
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>

          <div className="flex space-x-3">
            <CustomButton
              type="submit"
              isLoading={loading}
              disabled={!symptoms.trim() || loading}
              className="flex-1"
            >
              Check Symptoms
            </CustomButton>

            <CustomButton
              type="button"
              variant="outline"
              onClick={handleClear}
              disabled={loading || (!symptoms && !results)}
              className="flex items-center justify-center px-4"
            >
              <RefreshCw size={16} className="mr-2" />
              Clear
            </CustomButton>
          </div>
        </form>
      </div>

      {results && results.length > 0 && selectedDisease && (
        <div className="mt-8 bg-white shadow-sm rounded-xl p-6 border border-gray-100 animate-scale-in">
          <div className="flex flex-wrap items-start gap-3 mb-6">
            <h3 className="text-base font-medium text-gray-500">Possible conditions:</h3>
            <div className="flex flex-wrap gap-2">
              {results.map((disease) => (
                <button
                  key={disease.name}
                  onClick={() => setSelectedDisease(disease.name)}
                  className={`px-3 py-1 text-sm rounded-full transition-colors ${
                    selectedDisease === disease.name
                      ? "bg-medical-primary text-white"
                      : "bg-medical-secondary text-medical-dark hover:bg-medical-accent"
                  }`}
                >
                  {disease.name}
                </button>
              ))}
            </div>
          </div>

          {diseaseData && (
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{diseaseData.name}</h2>
                <p className="text-gray-700">{diseaseData.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-medical-dark">Medical Remedies</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {diseaseData.medicalRemedies.map((remedy: string, idx: number) => (
                      <li key={`med-${idx}`}>{remedy}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-medical-dark">Indian Home Remedies</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {diseaseData.homeRemedies.map((remedy: string, idx: number) => (
                      <li key={`home-${idx}`}>{remedy}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {diseaseData.videoId && (
                <div className="pt-4">
                  <h3 className="text-lg font-medium text-medical-dark mb-3">Expert Video</h3>
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${diseaseData.videoId}`}
                      title={`Video about ${diseaseData.name}`}
                      allowFullScreen
                      className="w-full h-64 md:h-80 rounded-lg"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
