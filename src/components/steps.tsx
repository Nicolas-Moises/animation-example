'use client'
import { useRef, useState } from "react";

import { motion, useTransform, useMotionValueEvent, useScroll, useMotionValue, useSpring, MotionValue } from 'framer-motion'

const transition = {
  duration: 0,
  ease: "easeOut",
};

export function Steps() {
  const scrollRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start center", "end 0vh"],
    axis: "x",
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  });

  const [scrollRefProgressPercentage, setScrollRefProgressPercentage] = useState(0)


  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollRefProgressPercentage(latest)
  })

  const steps = [
    {
      title: 'Saiba o valor real do seu veículo, a qualquer momento',
      content: 'Consulte gratuitamente a tabela FIPE dentro do nosso app e esteja sempre informado sobre o valor atual do seu carro.'
    },
    {
      title: 'Saiba o valor real do seu veículo, a qualquer momento',
      content: 'Consulte gratuitamente a tabela FIPE dentro do nosso app e esteja sempre informado sobre o valor atual do seu carro.'
    },
    {
      title: 'Saiba o valor real do seu veículo, a qualquer momento',
      content: 'Consulte gratuitamente a tabela FIPE dentro do nosso app e esteja sempre informado sobre o valor atual do seu carro.'
    },
    {
      title: 'Saiba o valor real do seu veículo, a qualquer momento',
      content: 'Consulte gratuitamente a tabela FIPE dentro do nosso app e esteja sempre informado sobre o valor atual do seu carro.'
    },
    {
      title: 'Saiba o valor real do seu veículo, a qualquer momento',
      content: 'Consulte gratuitamente a tabela FIPE dentro do nosso app e esteja sempre informado sobre o valor atual do seu carro.'
    },
  ]

  return (
    <div ref={scrollRef} className="sticky top-[300px]">
      <div className="w-full h-2 bg-muted max-w-7xl mx-auto mb-10">
        <motion.div className="h-full bg-indigo-500 w-full"

          style={{ scaleX, transformOrigin: 0 }} />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        {
          steps.map((step, idx) => {
            const activePercentage = 1 / steps.length * idx
            const isActive = activePercentage < scrollRefProgressPercentage

            return (
              <div key={step.title + idx} className={`relative space-y-4 max-w-64 `}>
                <span className={`w-6 h-6 rounded-full -top-14 -left-3 absolute flex items-center justify-center  ${isActive ? "bg-indigo-600" : "bg-muted"} transition-colors delay-200 duration-150`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 text-white ${isActive ? "" : "hidden"}`}>
                    <motion.path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} />
                  </svg>
                </span>

                <h2 className={`text-lg font-semibold text-foreground ${isActive ? 'opacity-100' : 'opacity-20'}`}>{step.title}</h2>
                <p className={`text-sm text-muted-foreground ${isActive ? 'opacity-100' : 'opacity-20'}`}>{step.content}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}