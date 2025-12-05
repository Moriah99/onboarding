"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function OnboardingPage() {
  const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-600 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl"
      >
        <Card className="rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20">
          <CardContent className="p-10 text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">Ise AI Hiring Assistant</h1>

            <p className="text-center text-white/80 mb-10 text-lg">
              Seamlessly onboard and begin streamlining your HR hiring workflow.
            </p>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium text-white/80">Your Full Name</label>
                <Input
                  placeholder="Enter your name"
                  className="mt-2 bg-white/20 border-white/30 text-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-white/80">Company Name</label>
                <Input
                  placeholder="Enter company name"
                  className="mt-2 bg-white/20 border-white/30 text-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-white/80">Work Email</label>
                <Input
                  placeholder="Enter work email"
                  className="mt-2 bg-white/20 border-white/30 text-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-white/80">Verification Code</label>
                <div className="flex items-center gap-3 mt-3 justify-center">
                  {verificationCode.map((digit, index) => (
                    <Input
                      key={index}
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e.target.value, index)}
                      className="w-12 h-12 text-center text-xl bg-white/20 border-white/40 text-white rounded-xl"
                    />
                  ))}
                </div>
              </div>

              <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-6 rounded-2xl text-lg shadow-lg">
                Continue
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
