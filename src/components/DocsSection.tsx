import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Terminal, Sparkles, Code2, Layers, Search, Check, Copy, ChevronRight, Play } from 'lucide-react';

interface DocsSectionProps {
  onNavigate: (page: string) => void;
  key?: string;
}

export default function DocsSection({ onNavigate }: DocsSectionProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedText, setCopiedText] = useState(false);

  // Playground builder states
  const [nodeName, setNodeName] = useState('MyCustomNode');
  const [nodeType, setNodeType] = useState('whatsapp_agent');
  const [memorySync, setMemorySync] = useState(true);
  const [streamUpdates, setStreamUpdates] = useState(true);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const docChapters = [
    {
      id: 'overview',
      title: 'Ecosystem Overview',
      category: 'Getting Started',
      description: 'Understanding Synthory’s shared-state methodology and multi-node system design principles.',
      content: (
        <div className="flex flex-col gap-6">
          <p className="text-[15px] leading-relaxed text-slate-600">
            Synthory is engineered around the paradigm of <strong className="text-slate-900">Shared-Resource Composability</strong>. Rather than developing isolated software architectures, each venture within the studio operates as a specialized, interconnectable node. These nodes share identity systems, communication pipelines, and database protocols to compound scaling speed.
          </p>
          <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl flex flex-col gap-3">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles size={12} className="text-amber-500" /> Core Axiom
            </span>
            <p className="text-[14px] text-slate-700 italic">
              "One successful digital venture forms an asset. An interconnected cluster of 4+ specialized nodes forms a self-reinforcing, infinite-compounding platform."
            </p>
          </div>
          <h3 className="font-display text-xl font-bold text-[#0a0a0a] pt-4">Studio Infrastructure Topology</h3>
          <p className="text-[14px] text-slate-600 leading-relaxed">
            Every product we design is mapped onto our global event-streaming pipeline, ensuring Varta, Flowzio, Flodon, and Conquer communicate over sub-10ms channels.
          </p>
          <div className="border border-slate-200/60 rounded-xl overflow-hidden bg-slate-950 font-mono text-[12px] p-6 text-slate-300 shadow-inner flex flex-col gap-2">
            <div className="text-slate-500">// Initialize Synthory Global Runtime</div>
            <div><span className="text-purple-400">import</span> &#123; SynthoryRuntime &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">'@synthory/runtime'</span>;</div>
            <br />
            <div><span className="text-blue-400">const</span> <span className="text-amber-400">studio</span> = <span className="text-purple-400">new</span> <span className="text-yellow-400">SynthoryRuntime</span>(&#123;</div>
            <div className="pl-4">apiKey: process.env.SYNTHORY_API_KEY,</div>
            <div className="pl-4">clusterId: <span className="text-emerald-400">"node_cluster_west_01"</span>,</div>
            <div className="pl-4">memoryLevel: <span className="text-emerald-400">"generational"</span></div>
            <div>&#125;);</div>
            <br />
            <div><span className="text-slate-550">// Listen across ecosystem nodes</span></div>
            <div>await <span className="text-amber-400">studio</span>.connectNode(<span className="text-emerald-400">'varta_whatsapp'</span>, <span className="text-emerald-400">'flowzio_agent'</span>);</div>
          </div>
        </div>
      )
    },
    {
      id: 'varta',
      title: 'Varta WhatsApp Node',
      category: 'Ecosystem Components',
      description: 'Deploying high-frequency conversational routing models for high-scale demographics.',
      content: (
        <div className="flex flex-col gap-6">
          <p className="text-[15px] leading-relaxed text-slate-600">
            Varta sits at the communication tier of the Synthory architecture. It converts standard WhatsApp API payloads into unified JSON Event Streams, enabling immediate ingestion by downstream intelligence pipelines like Flowzio or workflow trackers like Flodon.
          </p>

          <h3 className="font-display text-lg font-bold text-[#0a0a0a]">Routing Rule Matrix</h3>
          <div className="overflow-x-auto border border-slate-150 rounded-xl">
            <table className="w-full text-left border-collapse text-[13px] font-sans">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-3.5 font-bold text-slate-700">Trigger Layer</th>
                  <th className="p-3.5 font-bold text-slate-700">Transformation</th>
                  <th className="p-3.5 font-bold text-slate-700">Ecosystem Connection</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Inbound WhatsApp Msg</td>
                  <td className="p-3.5 text-slate-600">Clean noise, attach phone lookup metadata</td>
                  <td className="p-3.5 text-indigo-600 font-mono">io.varta.incoming</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Interactive UI button</td>
                  <td className="p-3.5 text-slate-600">Convert payload to key-value state vector</td>
                  <td className="p-3.5 text-indigo-600 font-mono">io.varta.interaction</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Agent Handshake</td>
                  <td className="p-3.5 text-slate-600">Trigger active human backup ticket in Flodon</td>
                  <td className="p-3.5 text-indigo-600 font-mono">io.flodon.ticket_create</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 'flowzio',
      title: 'Flowzio Custom Agent',
      category: 'Ecosystem Components',
      description: 'Laying out generative prompt behaviors and workflow triggers inside messaging cells.',
      content: (
        <div className="flex flex-col gap-6">
          <p className="text-[15px] leading-relaxed text-slate-600">
            Flowzio provides the zero-friction orchestration engine for Synthory. It encapsulates your business’s natural speech vectors into highly resilient pipelines. With its native AI-Studio modules, builders can declare agent capabilities via simple prompt variables.
          </p>

          <div className="border border-slate-200/50 p-6 rounded-2xl bg-white shadow-sm flex flex-col gap-4">
            <h4 className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">
              Live Interactive Node Builder Sandbox
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Node Identifier</label>
                  <input 
                    type="text" 
                    value={nodeName}
                    onChange={(e) => setNodeName(e.target.value.replace(/\s+/g, ''))}
                    className="bg-white border border-slate-200/80 rounded px-2.5 py-1.5 text-xs outline-none focus:border-slate-800"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold text-slate-500 uppercase">Node Cell Type</label>
                  <select 
                    value={nodeType}
                    onChange={(e) => setNodeType(e.target.value)}
                    className="bg-white border border-slate-200/80 rounded px-2.5 py-1.5 text-xs outline-none focus:border-slate-800"
                  >
                    <option value="whatsapp_agent">WhatsApp Engagement Model</option>
                    <option value="analytics_vector">Enterprise Data Vector</option>
                    <option value="conqr_synapse">Community Connector Node</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <input 
                    type="checkbox" 
                    id="checkbox-memory" 
                    checked={memorySync}
                    onChange={(e) => setMemorySync(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300"
                  />
                  <label htmlFor="checkbox-memory" className="text-xs text-slate-600 font-medium">Memory Persistence</label>
                </div>
                <div className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="checkbox-stream" 
                    checked={streamUpdates}
                    onChange={(e) => setStreamUpdates(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300"
                  />
                  <label htmlFor="checkbox-stream" className="text-xs text-slate-600 font-medium">Event Streaming API</label>
                </div>
              </div>

              {/* Dynamic JSON Result output */}
              <div className="bg-slate-900 border border-slate-950 p-4 rounded-xl flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase font-mono">Compiled Manifest JSON</span>
                  <button 
                    onClick={() => handleCopy(JSON.stringify({ nodeName, nodeType, memorySync, streamUpdates }, null, 2))}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {copiedText ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
                <pre className="font-mono text-[11px] text-emerald-400 overflow-x-auto pt-3">
{`{
  "node_id": "${nodeName.toLowerCase()}",
  "capabilities": ["${nodeType}"],
  "shared_memory": ${memorySync},
  "streaming": ${streamUpdates},
  "status": "synchronized_node_1.0"
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'flodon',
      title: 'Flodon Operations',
      category: 'Ecosystem Components',
      description: 'Laying structured backhaul rails for operational audits, customer CRM, and manual actions.',
      content: (
        <div className="flex flex-col gap-6">
          <p className="text-[15px] leading-relaxed text-slate-600">
            Flodon acts as the core administrative backplane for Synthory. When autonomous pipelines encounter high-context custom requests, Flodon routes the connection to specialized human experts while preserving full transaction context in local storage.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80" 
            alt="Data stream system diagram" 
            className="w-full h-48 object-cover rounded-xl border border-slate-100 shadow-sm"
            referrerPolicy="no-referrer"
          />
        </div>
      )
    }
  ];

  const filteredChapters = searchQuery.trim() === ''
    ? docChapters
    : docChapters.filter(ch => ch.title.toLowerCase().includes(searchQuery.toLowerCase()) || ch.description.toLowerCase().includes(searchQuery.toLowerCase()));

  const activeDoc = docChapters.find(ch => ch.id === activeTab) || docChapters[0];

  return (
    <div id="docs-page" className="w-full max-w-[1200px] mx-auto px-4 md:px-6 py-6 md:py-12 flex flex-col gap-10">
      {/* Editorial Header */}
      <div id="docs-editorial-header" className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-100 pb-10">
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-bold text-slate-400 tracking-widest uppercase">
            STUDIO FRAMEWORK & SPECIFICATIONS
          </span>
          <h1 className="font-display text-[38px] md:text-[48px] font-bold text-[#0a0a0a] tracking-tight">
            Developer Docs
          </h1>
          <p className="font-sans text-[15px] text-[#888888]">
            Understand how Synthory's internal nodes share data vectors and operate at scale.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-[320px]">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-slate-200/80 rounded-full pl-10 pr-4 py-2.5 text-[13px] outline-none focus:border-slate-800 transition-colors placeholder:text-slate-400 shadow-sm"
          />
        </div>
      </div>

      {/* Main 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Sidebar navigation */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="flex flex-col gap-1 bg-white border border-slate-200/60 p-3 rounded-2xl shadow-sm">
            <span className="px-3 pb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Chapters
            </span>
            {filteredChapters.map((doc) => {
              const isActive = activeTab === doc.id;
              return (
                <button
                  key={doc.id}
                  onClick={() => setActiveTab(doc.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#0a0a0a] text-white shadow-sm'
                      : 'text-slate-500 hover:text-[#0a0a0a] hover:bg-slate-50'
                  }`}
                >
                  <span className="truncate">{doc.title}</span>
                  <ChevronRight size={12} className={isActive ? 'text-white' : 'text-slate-300'} />
                </button>
              );
            })}
            {filteredChapters.length === 0 && (
              <span className="p-3 text-xs text-slate-400 italic">No matches found.</span>
            )}
          </div>

          <div className="bg-[#0a152d] text-white rounded-2xl p-6 flex flex-col gap-4 shadow-md font-sans">
            <Layers className="w-5 h-5 text-amber-500" />
            <h4 className="font-display font-bold text-[14px] uppercase tracking-wider text-slate-100">
              Need direct support?
            </h4>
            <p className="text-[12px] text-slate-300 leading-relaxed">
              Our partners are actively monitoring integration requests. Get aligned directly over a call.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white text-[#0a152d] font-bold text-[10px] uppercase tracking-widest py-2 rounded text-center hover:bg-slate-100 transition-colors"
            >
              Request Access Node Build
            </button>
          </div>
        </div>

        {/* Right Content pane */}
        <div className="lg:col-span-9 bg-white border border-slate-200/50 p-6 md:p-10 rounded-[24px] shadow-sm flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border border-slate-100 px-3 py-1 rounded-full">
              {activeDoc.category}
            </span>
          </div>

          <div className="flex flex-col gap-2 border-b border-slate-100 pb-6">
            <h2 className="font-display text-[26px] md:text-[32px] font-bold text-[#0a0a0a] tracking-tight">
              {activeDoc.title}
            </h2>
            <p className="font-sans text-[14px] text-slate-500 italic max-w-[650px]">
              {activeDoc.description}
            </p>
          </div>

          <div className="font-sans text-slate-700 leading-relaxed text-[15px]">
            {activeDoc.content}
          </div>
        </div>
      </div>
    </div>
  );
}
