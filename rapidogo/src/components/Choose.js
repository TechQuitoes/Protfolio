import React from 'react'
import Feature from './Feature'

const Choose = () => {
  return (
      <section className="py-20 px-8 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">Why Choose RapidGo</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Feature title="99% On-Time Delivery" />
          <Feature title="Real-Time Tracking" />
          <Feature title="24/7 Customer Support" />
        </div>
      </section>
  )
}

export default Choose