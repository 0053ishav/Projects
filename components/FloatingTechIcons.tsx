// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"

// const icons = [
//   { src: "/icons/Next.js.svg", alt: "Next.js", top: "20%", left: "10%" },
//   { src: "/icons/React.svg", alt: "React", top: "40%", left: "80%" },
//   { src: "/icons/Tailwind CSS.svg", alt: "Tailwind", top: "70%", left: "30%" },
// ]

// export default function FloatingTechIcons() {
//   return (
//     <div className="pointer-events-none fixed inset-0 z-50">
//       {icons.map((icon, idx) => {
//         const randomDuration = 12 + Math.random() * 5
//         const randomDelay = Math.random() * 3

//         return (
//           <motion.div
//             key={idx}
//             className="absolute pointer-events-auto p-2 bg-background border rounded-full shadow bg-gradient-to-tr from-red-200 to-blue-400"
//             style={{ top: icon.top, left: icon.left }}
//             animate={{
//               y: [0, -10, 0, 10, 0],
//               x: [0, 5, 0, -5, 0],
//               opacity: [1, 1, 0, 0, 0, 0, 1], // stays invisible longer
//             }}
//             transition={{
//               duration: randomDuration,
//               delay: randomDelay,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             whileHover={{
//               scale: 1.2,
//               y: -20,
//               boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
//               opacity: 1,
//             }}
//           >
//             <Image src={icon.src} alt={icon.alt} width={40} height={40} />
//           </motion.div>
//         )
//       })}
//     </div>
//   )
// }


"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

interface FloatingTechBurstProps {
  iconSrc: string
  alt: string
  trigger: string | null
}

export default function FloatingTechBurst({ iconSrc, alt, trigger }: FloatingTechBurstProps) {
  const [bubbles, setBubbles] = useState<number[]>([])

  useEffect(() => {
    if (trigger) {
      const count = 8 + Math.floor(Math.random() * 7) // 8–15 bubbles
      setBubbles(Array.from({ length: count }, (_, i) => i))

      const timeout = setTimeout(() => setBubbles([]), 4000)
      return () => clearTimeout(timeout)
    }
  }, [trigger])

  if (!trigger || bubbles.length === 0) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {bubbles.map((id) => {
        const size = 25 + Math.random() * 25 // Random size between 25px and 50px
        const left = `${Math.random() * 100}%` // Random horizontal position
        const delay = Math.random() * 0.3 // Random delay for more natural movement
        const opacity = Math.random() * 0.5 + 0.5 // Random opacity for more dynamic effect

        return (
          <motion.div
            key={id}
            className="absolute p-2 bg-white border rounded-full shadow-lg"
            style={{
              left,
              bottom: "0%",
              opacity, // Apply random opacity
            }}
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{
              opacity: [1, opacity, 0], // Fade out gradually
              y: [
                0,
                -200 - Math.random() * 100, // Move upwards smoothly with variation
                -400 - Math.random() * 150, // End position slightly above the screen
              ],
              scale: [1, 1.3, 1], // Slight scale bounce effect
            }}
            transition={{
              duration: 3 + Math.random() * 2, // Duration varies slightly
              delay,
              ease: "easeInOut",
            }}
          >
            <Image src={iconSrc} alt={alt} width={size} height={size} />
          </motion.div>
        )
      })}
    </div>
  )
}
