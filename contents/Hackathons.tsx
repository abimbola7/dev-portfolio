"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { Trophy } from "lucide-react";
import { FC } from "react";

const Hackathons: FC = () => {
  return (
    <section
      id="hackathons"
      className="py-20 px-4 flex flex-col items-center w-full bg-[#090B11]"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center mb-12">
          <Trophy className="text-cyan-500 w-12 h-12 mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-4">
            Hackathons & Competitions
          </h2>
          <p className="text-gray-400 text-lg">
            Competing and winning at prestigious hackathons across the globe
          </p>
        </div>

        <Tabs.Root
          className="w-full flex flex-col items-center"
          defaultValue="events"
        >
          <Tabs.List className="flex bg-card/50 border border-border/50 rounded-full p-1 mb-12">
            <Tabs.Trigger
              value="events"
              className="px-8 py-2.5 rounded-full text-sm font-medium text-gray-400 data-[state=active]:bg-card data-[state=active]:text-white data-[state=active]:shadow-sm transition-all"
            >
              All Events
            </Tabs.Trigger>
            <Tabs.Trigger
              value="gallery"
              className="px-8 py-2.5 rounded-full text-sm font-medium text-gray-400 data-[state=active]:bg-card data-[state=active]:text-white data-[state=active]:shadow-sm transition-all"
            >
              Photo Gallery
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content
            value="events"
            className="w-full space-y-16 animate-in fade-in duration-500"
          >
            {/* Hackathon Item 1 */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Trophy className="text-cyan-500 w-6 h-6" />
                  Digital Agriculture Hackathon
                </h3>
                <p className="text-gray-400 mt-2">
                  Cornell University, March 2025
                </p>
              </div>
              <div className="w-full aspect-[21/9] md:aspect-[21/9] bg-zinc-800 rounded-xl border border-border/50 overflow-hidden flex items-center justify-center">
                {/* Replace with Next Image */}
                <span className="text-zinc-500">
                  Hackathon Image Placeholder
                </span>
              </div>
            </div>

            {/* Hackathon Item 2 */}
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Trophy className="text-cyan-500 w-6 h-6" />
                  Hilton Hospitality Hackathon
                </h3>
                <p className="text-gray-400 mt-2">
                  New York, Ithaca - October 17-19, 2025
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="aspect-[4/5] bg-zinc-800 rounded-xl border border-border/50 flex items-center justify-center">
                  <span className="text-zinc-500 text-sm">Image 1</span>
                </div>
                <div className="aspect-[4/5] bg-zinc-800 rounded-xl border border-border/50 flex items-center justify-center">
                  <span className="text-zinc-500 text-sm">Image 2</span>
                </div>
                <div className="aspect-[4/3] bg-zinc-800 rounded-xl border border-border/50 flex items-center justify-center">
                  <span className="text-zinc-500 text-sm">Image 3</span>
                </div>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content
            value="gallery"
            className="w-full animate-in fade-in duration-500"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Gallery images */}
              <div className="aspect-square bg-zinc-800 rounded-xl border border-border/50 flex items-center justify-center">
                <span className="text-zinc-500 text-sm">Gallery Image</span>
              </div>
              <div className="aspect-square bg-zinc-800 rounded-xl border border-border/50 flex items-center justify-center">
                <span className="text-zinc-500 text-sm">Gallery Image</span>
              </div>
              <div className="aspect-square bg-zinc-800 rounded-xl border border-border/50 flex items-center justify-center">
                <span className="text-zinc-500 text-sm">Gallery Image</span>
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  );
};

export default Hackathons;
