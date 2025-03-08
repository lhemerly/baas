import { AuthButton } from "@/components/auth/AuthButon";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span className="font-bold text-xl">SaaS Name</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium">Features</a>
            <a href="#pricing" className="text-sm font-medium">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium">Testimonials</a>
            <a href="#faq" className="text-sm font-medium">FAQ</a>
          </nav>
          
          <AuthButton />
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Your Ultimate SaaS Solution
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Empower your business with our powerful, scalable, and user-friendly software platform.
              </p>
              <div className="space-x-4 mt-6">
                <AuthButton variant="primary" className="inline-flex h-10 px-6 py-2.5" />
                <a href="#features" className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-transparent px-6 py-2.5 text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Everything you need to streamline your workflow and boost productivity.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 hover:shadow-md transition-all">
                <div className="rounded-full bg-indigo-100 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-indigo-600">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Real-time Analytics</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Track your performance with powerful analytics and reporting tools.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 hover:shadow-md transition-all">
                <div className="rounded-full bg-indigo-100 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-indigo-600">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m12 16 4-4-4-4" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Integration Ecosystem</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Connect with your favorite tools and services seamlessly.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 hover:shadow-md transition-all">
                <div className="rounded-full bg-indigo-100 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-indigo-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Enterprise Security</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Protection for your data with industry-leading security measures.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Choose the plan that's right for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Starter Plan */}
              <div className="flex flex-col overflow-hidden rounded-lg border">
                <div className="p-6">
                  <h3 className="text-xl font-bold">Starter</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">$19</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Perfect for small teams just getting started.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-green-500">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      5 team members
                    </li>
                    <li className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-green-500">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      20GB storage
                    </li>
                    <li className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-green-500">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Basic analytics
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6">
                  <AuthButton variant="primary" className="w-full" />
                </div>
              </div>
              
              {/* Professional Plan */}
              <div className="flex flex-col overflow-hidden rounded-lg border border-indigo-600">
                <div className="bg-indigo-600 p-1 text-center text-sm font-medium text-white">
                  MOST POPULAR
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Professional</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">$49</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Everything in Starter, plus enhanced features.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-green-500">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      20 team members
                    </li>
                    <li className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-green-500">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      100GB storage
                    </li>
                    <li className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-green-500">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Advanced analytics
                    </li>
                    <li className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-green-500">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Priority support
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6">
                  <AuthButton variant="primary" className="w-full" />
                </div>
              </div>
              
              {/* Enterprise Plan */}
              <div className="flex flex-col overflow-hidden rounded-lg border">
                <div className="p-6">
                  <h3 className="text-xl font-bold">Enterprise</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold">$99</span>
                    <span className="ml-1 text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Advanced features for larger teams with complex needs.
                  </p>
                  <ul className="mt-6 space-y-3">
                    <li className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-green-500">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Unlimited team members
                    </li>
                    <li className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-green-500">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      1TB storage
                    </li>
                    <li className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-green-500">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Custom reporting
                    </li>
                    <li className="flex text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 text-green-500">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      Dedicated account manager
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6">
                  <AuthButton variant="primary" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Don't just take our word for it – hear from some of our satisfied customers.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="flex flex-col rounded-lg border bg-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Marketing Director</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    "This platform has completely transformed how our team collaborates. The intuitive interface and powerful features have significantly improved our productivity."
                  </p>
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="flex flex-col rounded-lg border bg-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="text-sm font-medium">David Chen</p>
                    <p className="text-xs text-muted-foreground">CEO</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    "The analytics provided by this SaaS have been instrumental in making data-driven decisions. We've been able to identify trends and optimize our operations."
                  </p>
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="flex flex-col rounded-lg border bg-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="text-sm font-medium">Emily Rodriguez</p>
                    <p className="text-xs text-muted-foreground">Product Manager</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    "Customer support is exceptional. Whenever we have questions or run into issues, the team is quick to respond and always helpful. Highly recommend!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Find answers to common questions about our service.
              </p>
            </div>
            <div className="mx-auto grid max-w-[900px] gap-4">
              {/* Question 1 */}
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold">How does the trial work?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Our 14-day trial gives you full access to all features. No credit card required. When the trial ends, you can choose a plan that suits your needs.
                </p>
              </div>
              
              {/* Question 2 */}
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold">Can I change plans later?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.
                </p>
              </div>
              
              {/* Question 3 */}
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold">What payment methods do you accept?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We accept all major credit cards, including Visa, Mastercard, and American Express. We also support payment through PayPal.
                </p>
              </div>
              
              {/* Question 4 */}
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-semibold">Is my data secure?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Yes, we take security very seriously. All data is encrypted at rest and in transit. We maintain strict access controls and regular security audits.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-white/90">
                Join thousands of satisfied customers who are already transforming their business.
              </p>
              <div className="mt-6">
                <AuthButton className="bg-white text-indigo-600 hover:bg-white/90 px-6 py-2.5" />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Testimonials</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact Us</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Guides</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">API Reference</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Support</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} YourSaaS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}