import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ServiceCard from '../components/ServiceCard'

const Home = () => {
  const [totalViews, setTotalViews] = useState(0)
  const [totalLikes, setTotalLikes] = useState(0)
  const [liked, setLiked] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [thankYou, setThankYou] = useState(false)

  // Animate numbers on load
  useEffect(() => {
    const targetViews = 15420
    const targetLikes = 8530
    const duration = 2000
    
    const startTime = Date.now()
    
    const animateNumber = (start, end) => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      return Math.floor(start + (end - start) * easeOutQuart)
    }
    
    const timer = setInterval(() => {
      const currentTime = Date.now() - startTime
      
      if (currentTime < duration) {
        setTotalViews(animateNumber(0, targetViews))
        setTotalLikes(animateNumber(0, targetLikes))
      } else {
        setTotalViews(targetViews)
        setTotalLikes(targetLikes)
        clearInterval(timer)
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [])

  const handleLike = () => {
    if (!liked) {
      setTotalLikes(totalLikes + 1)
      setLiked(true)
      setShowTooltip(true)
      setThankYou(true)
      
      // Play like sound effect (optional)
      try {
        const audio = new Audio('/sounds/like.mp3')
        audio.volume = 0.3
        audio.play().catch(e => {}) // Silent fail if no audio file
      } catch (e) {}
      
      // Hide tooltip after 2 seconds
      setTimeout(() => {
        setShowTooltip(false)
        setTimeout(() => setThankYou(false), 300)
      }, 2000)
    }
  }

  return (
    <div>
      <Navbar />
      
      <div className="slider">
        <div className="slides">
          <img src="/image/p1.jpg" alt="slide1" />
          <img src="/image/p2.jpg" alt="slide2" />
          <img src="/image/p3.jpg" alt="slide3" />
          <img src="/image/p4.jpg" alt="slide4" />
          <img src="/image/p5.jpg" alt="slide5" />
        </div>
      </div>

      <section className="services">
        <ServiceCard
          image="/image/p1.jpg"
          title="PAINTING"
          description="Wall painting and designing."
          link="/painting"
        />
        <ServiceCard
          image="/image/p2.jpg"
          title="KITCHEN CLEANING"
          description="They perform tasks such as mopping floors."
          link="/kitchen"
        />
        <ServiceCard
          image="/image/p3.jpg"
          title="ELECTRONIC SERVICE"
          description="AC repair, TV repair and etc service provided."
          link="/electronic"
        />
        <ServiceCard
          image="/image/carpentry.jpg"
          title="CARPENTRY"
          description="carpentry and woodworking."
          link="/carpentry"
        />
        <ServiceCard
          image="/image/washing machine.jpg"
          title="PLUMBING"
          description="Pipe repair, leakage fixing, and plumbing installation services."
          link="/plumbing"
        />
        <ServiceCard
          image="/image/sofa cleaning.jpg"
          title="SOFA CLEANING"
          description="Professional sofa cleaning and upholstery care services."
          link="/sofa-cleaning"
        />
        <ServiceCard
          image="/image/tiffin.jpeg"
          title="TIFFIN/COOKING SERVICE"
          description="Homemade meal delivery and cooking assistance at your doorstep."
          link="/tiffin-service"
        />
        <ServiceCard
          image="/image/maid cleaning.jpg"
          title="MAID HELP SERVICE"
          description="Professional housekeeping and domestic help services."
          link="/maid-help"
        />
      </section>

      {/* Qualified Staff Section */}
      <section className="qualified-staff-section">
        <div className="section-header">
          <h2 className="section-title">Our Qualified Staff</h2>
          <p className="section-subtitle">Expert professionals ready to serve you</p>
          <div className="title-decoration"></div>
        </div>
        
        <div className="staff-grid">
          <div className="staff-card" onClick={() => window.location.href='/painting'} style={{ cursor: 'pointer' }}>
            <div className="staff-icon-wrapper">
              <span className="staff-icon">🎨</span>
              <div className="staff-icon-bg"></div>
            </div>
            <h3>Professional Painters</h3>
            <p>Certified and experienced painting experts</p>
            <div className="staff-features">
              <span className="feature"><i className="✓"></i> Trained</span>
              <span className="feature"><i className="✓"></i> Verified</span>
              <span className="feature"><i className="✓"></i> Insured</span>
            </div>
            <div className="click-hint">
              <span className="arrow">→</span> Learn More
            </div>
          </div>

          <div className="staff-card" onClick={() => window.location.href='/kitchen'} style={{ cursor: 'pointer' }}>
            <div className="staff-icon-wrapper">
              <span className="staff-icon">🧹</span>
              <div className="staff-icon-bg"></div>
            </div>
            <h3>Expert Cleaners</h3>
            <p>Professional cleaning specialists</p>
            <div className="staff-features">
              <span className="feature"><i className="✓"></i> Background Checked</span>
              <span className="feature"><i className="✓"></i> Skilled</span>
              <span className="feature"><i className="✓"></i> Reliable</span>
            </div>
            <div className="click-hint">
              <span className="arrow">→</span> Learn More
            </div>
          </div>

          <div className="staff-card" onClick={() => window.location.href='/electronic'} style={{ cursor: 'pointer' }}>
            <div className="staff-icon-wrapper">
              <span className="staff-icon">⚡</span>
              <div className="staff-icon-bg"></div>
            </div>
            <h3>Certified Electricians</h3>
            <p>Licensed electrical repair experts</p>
            <div className="staff-features">
              <span className="feature"><i className="✓"></i> Licensed</span>
              <span className="feature"><i className="✓"></i> Certified</span>
              <span className="feature"><i className="✓"></i> Experienced</span>
            </div>
            <div className="click-hint">
              <span className="arrow">→</span> Learn More
            </div>
          </div>

          <div className="staff-card" onClick={() => window.location.href='/carpentry'} style={{ cursor: 'pointer' }}>
            <div className="staff-icon-wrapper">
              <span className="staff-icon">🔨</span>
              <div className="staff-icon-bg"></div>
            </div>
            <h3>Skilled Carpenters</h3>
            <p>Master woodworking professionals</p>
            <div className="staff-features">
              <span className="feature"><i className="✓"></i> Expert Craftsmen</span>
              <span className="feature"><i className="✓"></i> Quality Work</span>
              <span className="feature"><i className="✓"></i> Trusted</span>
            </div>
            <div className="click-hint">
              <span className="arrow">→</span> Learn More
            </div>
          </div>

          <div className="staff-card" onClick={() => window.location.href='/plumbing'} style={{ cursor: 'pointer' }}>
            <div className="staff-icon-wrapper">
              <span className="staff-icon">🔧</span>
              <div className="staff-icon-bg"></div>
            </div>
            <h3>Professional Plumbers</h3>
            <p>Expert plumbing solution providers</p>
            <div className="staff-features">
              <span className="feature"><i className="✓"></i> Licensed</span>
              <span className="feature"><i className="✓"></i> 24/7 Available</span>
              <span className="feature"><i className="✓"></i> Quick Response</span>
            </div>
            <div className="click-hint">
              <span className="arrow">→</span> Learn More
            </div>
          </div>

          <div className="staff-card" onClick={() => window.location.href='/sofa-cleaning'} style={{ cursor: 'pointer' }}>
            <div className="staff-icon-wrapper">
              <span className="staff-icon">✨</span>
              <div className="staff-icon-bg"></div>
            </div>
            <h3>Trained Technicians</h3>
            <p>Specialized appliance service experts</p>
            <div className="staff-features">
              <span className="feature"><i className="✓"></i> Factory Trained</span>
              <span className="feature"><i className="✓"></i> Certified</span>
              <span className="feature"><i className="✓"></i> Professional</span>
            </div>
            <div className="click-hint">
              <span className="arrow">→</span> Learn More
            </div>
          </div>
        </div>

        <div className="staff-stats">
          <div className="staff-stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Qualified Professionals</span>
          </div>
          <div className="staff-stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Verified Staff</span>
          </div>
          <div className="staff-stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support Available</span>
          </div>
          <div className="staff-stat-item">
            <span className="stat-number">5000+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
        </div>
      </section>

      <div className="all-services-stats">
        <div className="stats-container">
          <div className="stat-item views" onMouseEnter={() => setShowTooltip('views')} onMouseLeave={() => setShowTooltip(false)}>
            <div className="icon-wrapper">
              <span className="icon">👁️</span>
              <div className="icon-glow"></div>
            </div>
            <span className="label">Total Views</span>
            <span className="count">{totalViews.toLocaleString()}</span>
            <span className="tooltip">People viewed our services</span>
          </div>
          
          <div className="stat-item likes">
            <div className="icon-wrapper">
              <button 
                className={`like-btn ${liked ? 'liked' : ''}`} 
                onClick={handleLike}
                aria-label="Like our services"
              >
                <span className="icon">{liked ? '❤️' : '🤍'}</span>
                {thankYou && <span className="thank-you-text">Thank You! ❤️</span>}
              </button>
              {showTooltip === 'likes' && !liked && (
                <span className="tooltip click-tooltip">Click to show your love!</span>
              )}
            </div>
            <span className="label">Total Likes</span>
            <span className="count">{totalLikes.toLocaleString()}</span>
            {liked && <span className="liked-badge">You liked this! 💖</span>}
          </div>
        </div>
        
        {/* Progress bar showing engagement level */}
        <div className="engagement-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${Math.min((totalLikes / totalViews) * 100, 100)}%` }}
            ></div>
          </div>
          <span className="engagement-text">
            {((totalLikes / totalViews) * 100).toFixed(1)}% of visitors loved our services!
          </span>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home
