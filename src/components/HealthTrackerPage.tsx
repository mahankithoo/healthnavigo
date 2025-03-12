
import React, { useState } from "react";
import { Line, ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { healthRecords, HealthRecord } from "@/utils/data";
import { CustomButton } from "./ui/CustomButton";
import { FileText, Heart, Droplet, Activity, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const HealthTrackerPage: React.FC = () => {
  const [records] = useState<HealthRecord[]>(healthRecords);
  const [activeTab, setActiveTab] = useState<"bp" | "sugar" | "heart" | "weight">("bp");

  const handleAddRecord = () => {
    toast.info("This feature would allow adding new health records. Currently using demo data.");
  };

  // Format data for charts
  const bpData = records.map(record => ({
    date: record.date,
    systolic: record.bloodPressure?.systolic,
    diastolic: record.bloodPressure?.diastolic
  }));

  const sugarData = records.map(record => ({
    date: record.date,
    value: record.bloodSugar?.value
  }));

  const heartData = records.map(record => ({
    date: record.date,
    value: record.heartRate
  }));

  const weightData = records.map(record => ({
    date: record.date,
    value: record.weight
  }));

  const tabs = [
    { id: "bp", name: "Blood Pressure", icon: Activity },
    { id: "sugar", name: "Blood Sugar", icon: Droplet },
    { id: "heart", name: "Heart Rate", icon: Heart },
    { id: "weight", name: "Weight", icon: FileText }
  ];

  return (
    <div className="page-transition">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center justify-center p-2 bg-medical-secondary rounded-lg text-medical-primary mb-4">
            <span className="text-xs font-medium uppercase tracking-wider">Health Tracker</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Track Your Health Vitals
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Monitor your health metrics over time to better understand and manage your wellbeing.
          </p>
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div className="flex space-x-1 overflow-x-auto p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-medical-primary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <tab.icon className="mr-2 h-4 w-4" />
                {tab.name}
              </button>
            ))}
          </div>
          
          <CustomButton 
            variant="primary" 
            size="sm"
            onClick={handleAddRecord}
            className="flex items-center"
          >
            <Plus className="mr-1 h-4 w-4" />
            Add Record
          </CustomButton>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          {activeTab === "bp" && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Blood Pressure (mmHg)</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={bpData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="systolic"
                      stroke="#0EA5E9"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      name="Systolic"
                    />
                    <Line
                      type="monotone"
                      dataKey="diastolic"
                      stroke="#7DD3FC"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      name="Diastolic"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-medical-secondary rounded-lg p-4">
                  <p className="text-sm text-gray-600">Latest Reading</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {records[records.length - 1].bloodPressure?.systolic}/{records[records.length - 1].bloodPressure?.diastolic}
                  </p>
                </div>
                <div className="bg-medical-secondary rounded-lg p-4">
                  <p className="text-sm text-gray-600">Average</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {Math.round(records.reduce((acc, record) => acc + (record.bloodPressure?.systolic || 0), 0) / records.length)}/
                    {Math.round(records.reduce((acc, record) => acc + (record.bloodPressure?.diastolic || 0), 0) / records.length)}
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "sugar" && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Blood Sugar (mg/dL)</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={sugarData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#0EA5E9"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      name="Blood Sugar"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-medical-secondary rounded-lg p-4">
                  <p className="text-sm text-gray-600">Latest Reading</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {records[records.length - 1].bloodSugar?.value} mg/dL
                  </p>
                </div>
                <div className="bg-medical-secondary rounded-lg p-4">
                  <p className="text-sm text-gray-600">Average</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {Math.round(records.reduce((acc, record) => acc + (record.bloodSugar?.value || 0), 0) / records.length)} mg/dL
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "heart" && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Heart Rate (BPM)</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={heartData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#0EA5E9"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      name="Heart Rate"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-medical-secondary rounded-lg p-4">
                  <p className="text-sm text-gray-600">Latest Reading</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {records[records.length - 1].heartRate} BPM
                  </p>
                </div>
                <div className="bg-medical-secondary rounded-lg p-4">
                  <p className="text-sm text-gray-600">Average</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {Math.round(records.reduce((acc, record) => acc + (record.heartRate || 0), 0) / records.length)} BPM
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "weight" && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Weight (kg)</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={weightData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#0EA5E9"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                      name="Weight"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-medical-secondary rounded-lg p-4">
                  <p className="text-sm text-gray-600">Latest Reading</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {records[records.length - 1].weight} kg
                  </p>
                </div>
                <div className="bg-medical-secondary rounded-lg p-4">
                  <p className="text-sm text-gray-600">Average</p>
                  <p className="text-xl font-semibold text-gray-900">
                    {(records.reduce((acc, record) => acc + (record.weight || 0), 0) / records.length).toFixed(1)} kg
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default HealthTrackerPage;
