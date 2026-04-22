/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Timer from './components/Timer';
import { Trophy } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      <header className="py-12 px-6 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-slate-900 rounded-2xl shadow-md shadow-black/30 mb-6 border border-slate-800">
          <Trophy className="text-amber-400 mr-2" size={24} />
          <span className="font-bold tracking-tight text-slate-300 uppercase text-sm">比賽計時系統</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-100 mb-4">
          班際競賽計時器
        </h1>
        <p className="text-slate-400 max-w-md mx-auto">
          獨立控制兩組計時器，精確紀錄每一秒的精彩瞬間。
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start justify-items-center">
          <Timer title="甲班 (Class A)" color="text-blue-300" />
          <Timer title="乙班 (Class B)" color="text-rose-300" />
        </div>
      </main>

      <footer className="fixed bottom-8 left-0 right-0 text-center pointer-events-none">
        <div className="inline-block px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-700 shadow-sm shadow-black/30 text-xs text-slate-400 font-medium">
          Vite + React + TypeScript
        </div>
      </footer>
    </div>
  );
}
