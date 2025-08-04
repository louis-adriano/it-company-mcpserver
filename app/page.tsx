'use client'

import { COMPANY_DATA } from '@/lib/knowledge-base'
import { KnowledgeTester } from '@/components/knowledge-tester'
import { McpSetupGuide } from '@/components/mcp-setup-guide'
import { useState } from 'react'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'company' | 'test' | 'setup'>('company')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{COMPANY_DATA.company.name}</h1>
              <p className="text-gray-600 mt-1">IT Solutions & Digital Transformation</p>
            </div>
            <div className="text-sm text-gray-500">
              <p>📍 {COMPANY_DATA.company.location}</p>
              <p>🚀 Founded {COMPANY_DATA.company.founded}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
          <button
            onClick={() => setActiveTab('company')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'company'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Company Info
          </button>
          <button
            onClick={() => setActiveTab('test')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'test'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Test Knowledge Base
          </button>
          <button
            onClick={() => setActiveTab('setup')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'setup'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            MCP Setup
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'company' && (
          <div className="space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About LOU IT</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {COMPANY_DATA.company.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Mission:</strong> {COMPANY_DATA.company.mission}
              </p>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {COMPANY_DATA.services.map((service, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-3">{service.description}</p>
                    <p className="text-sm font-medium text-blue-600">{service.pricing}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Leadership Team</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {COMPANY_DATA.team.slice(0, 3).map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-2">{member.experience}</p>
                    <p className="text-xs text-gray-500">{member.specialties?.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
                  <div className="space-y-3">
                    <p className="flex items-center text-gray-600">
                      <span className="w-20">Email:</span>
                      <a href={`mailto:${COMPANY_DATA.contact.email}`} className="text-blue-600 hover:underline">
                        {COMPANY_DATA.contact.email}
                      </a>
                    </p>
                    <p className="flex items-center text-gray-600">
                      <span className="w-20">Phone:</span>
                      <a href={`tel:${COMPANY_DATA.contact.phone}`} className="text-blue-600 hover:underline">
                        {COMPANY_DATA.contact.phone}
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Office</h3>
                  <p className="text-gray-600 mb-2">{COMPANY_DATA.contact.address}</p>
                  <p className="text-gray-600">{COMPANY_DATA.contact.business_hours}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'test' && <KnowledgeTester />}
        {activeTab === 'setup' && <McpSetupGuide />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>&copy; 2024 {COMPANY_DATA.company.name}. All rights reserved.</p>
          <p className="text-sm mt-1">MCP Server ready for AI integration</p>
        </div>
      </footer>
    </div>
  )
}