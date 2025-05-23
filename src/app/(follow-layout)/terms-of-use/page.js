import Banner from "@/components/shared/Banner";
import React from "react";
import { getTermsOfUsePageData } from "@/data/loaders";
import { findBlockByComponent } from "@/lib/utils";
import { GET_TERMS_OF_USE_PAGE_DATA } from "@/graphql/queries/terms-of-use";
import { fetchData } from "@/lib/graphql-operations";

export async function generateMetadata() {
  const graphqlData = await fetchData(GET_TERMS_OF_USE_PAGE_DATA);
  const seoData = await graphqlData.pages.data[0].attributes.Seo;
  return {
    title: seoData.metaTitle,
    description: seoData.metaDescription,
    openGraph: {
      images: [
        process.env.NEXT_PUBLIC_STRAPI_URL +
          seoData.metaImage.data.attributes.formats.medium.url,
      ],
    },
  };
}

const page = async () => {
  const graphqlData = await fetchData(GET_TERMS_OF_USE_PAGE_DATA);
  const bannerData = graphqlData.pages.data[0].attributes.blocks;
  const {
    subText,
    headingAlias: commonBannerHeading,
    coverImage,
    breadcrums,
  } = bannerData[0];

  return (
    <>
      <Banner
        subText={subText}
        heading={commonBannerHeading}
        coverImage={coverImage}
        breadcrums={breadcrums}
      />
      <section className="terms-wrapper py-80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Terms and Conditions</h2>
                <p className="mb-0">
                  Last updated: <span>March 09, 2021</span>
                </p>
                <p>
                  Please read these terms and conditions carefully before using
                  Our Service.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-12 col-lg-12">
              <div className="terms-card flex-card">
                <span className="terms-icon">
                  <img src="images/interpretation.svg" alt="info" />
                </span>
                <div className="terms-content">
                  <h6>Interpretation</h6>
                  <p>
                    The words of which the initial letter is capitalized have
                    meanings defined under the following conditions. The
                    following definitions shall have the same meaning regardless
                    of whether they appear in singular or in plural.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-12">
              <div className="terms-card flex-card">
                <span className="terms-icon">
                  <img src="images/definitions.svg" alt="info" />
                </span>
                <div className="terms-content">
                  <h6>Definitions</h6>
                  <p>For the purposes of these Terms and Conditions:</p>
                  <ul>
                    <li>
                      <p>
                        <span>Affiliate</span> means an entity that controls, is
                        controlled by or is under common control with a party,
                        where &quot;control&quot; means ownership of 50% or more
                        of the shares, equity interest or other securities
                        entitled to vote for election of directors or other
                        managing authority.
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <span>Country</span> refers to: Gujarat, India
                      </p>
                    </li>
                    <li>
                      <p>
                        {" "}
                        <span>Company</span> (referred to as either quot;the
                        Company&quot;, &quot;We&quot;, &quot;Us&quot; or
                        &quot;Our&quot; in this Agreement) refers to Captain
                        Tractors Private Limited, Captain Tractors Pvt Ltd,
                        Padavala Road, Veraval (Shapar), Tal- Kotda Sangani,
                        Dist- Rajkot, Pincode- 360024.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Service</span> refers to the Website.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Terms and Conditions</span> (also referred as
                        &quot;Terms&quot;) mean these Terms and Conditions that
                        form the entire agreement between You and the Company
                        regarding the use of the Service. This Terms and
                        Conditions agreement has been created with the help of
                        the Terms and Conditions Generator.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Third-party Social Media Service</span> means any
                        services or content (including data, information,
                        products or services) provided by a third-party that may
                        be displayed, included or made available by the Service.
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Website</span> refers to Captain Tractors,
                        accessible from 
                        <a href="https://www.captaintractors.com">
                          https://www.captaintractors.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>You</span> means the individual accessing or using
                        the Service, or the company, or other legal entity on
                        behalf of which such individual is accessing or using
                        the Service, as applicable.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-12">
              <div className="terms-card flex-card">
                <span className="terms-icon">
                  <img src="images/acknowledgment.svg" alt="info" />
                </span>
                <div className="terms-content">
                  <h6>Acknowledgment</h6>
                  <p>
                    These are the Terms and Conditions governing the use of this
                    Service and the agreement that operates between You and the
                    Company. These Terms and Conditions set out the rights and
                    obligations of all users regarding the use of the Service.
                  </p>

                  <p>
                    Your access to and use of the Service is conditioned on Your
                    acceptance of and compliance with these Terms and
                    Conditions. These Terms and Conditions apply to all
                    visitors, users and others who access or use the Service.
                  </p>

                  <p>
                    By accessing or using the Service You agree to be bound by
                    these Terms and Conditions. If You disagree with any part of
                    these Terms and Conditions then You may not access the
                    Service.
                  </p>

                  <p>
                    You represent that you are over the age of 18. The Company
                    does not permit those under 18 to use the Service.
                  </p>

                  <p>
                    Your access to and use of the Service is also conditioned on
                    Your acceptance of and compliance with the Privacy Policy of
                    the Company. Our Privacy Policy describes Our policies and
                    procedures on the collection, use and disclosure of Your
                    personal information when You use the Application or the
                    Website and tells You about Your privacy rights and how the
                    law protects You. Please read Our Privacy Policy carefully
                    before using Our Service.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-12">
              <div className="terms-card flex-card">
                <span className="terms-icon">
                  <img src="images/links.svg" alt="info" />
                </span>
                <div className="terms-content">
                  <h6>Links to Other Websites</h6>
                  <p>
                    Our Service may contain links to third-party web sites or
                    services that are not owned or controlled by the Company.
                  </p>
                  <p>
                    The Company has no control over, and assumes no
                    responsibility for, the content, privacy policies, or
                    practices of any third party web sites or services. You
                    further acknowledge and agree that the Company shall not be
                    responsible or liable, directly or indirectly, for any
                    damage or loss caused or alleged to be caused by or in
                    connection with the use of or reliance on any such content,
                    goods or services available on or through any such web sites
                    or services.
                  </p>

                  <p>
                    We strongly advise You to read the terms and conditions and
                    privacy policies of any third-party web sites or services
                    that You visit.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-12">
              <div className="terms-card flex-card">
                <span className="terms-icon">
                  <img src="images/termination.svg" alt="info" />
                </span>
                <div className="terms-content">
                  <h6>Termination</h6>
                  <p>
                    We may terminate or suspend Your access immediately, without
                    prior notice or liability, for any reason whatsoever,
                    including without limitation if You breach these Terms and
                    Conditions. Upon termination, Your right to use the Service
                    will cease immediately.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-12">
              <div className="terms-card flex-card">
                <span className="terms-icon">
                  <img src="images/limitation.svg" alt="info" />
                </span>
                <div className="terms-content">
                  <h6>Limitation of Liability</h6>
                  <p>
                    Not with standing any damages that You might incur, the
                    entire liability of the Company and any of its suppliers
                    under any provision of this Terms and Your exclusive remedy
                    for all of the foregoing shall be limited to the amount
                    actually paid by You through the Service or 100 USD if You
                    haven&apos;t purchased anything through the Service.
                  </p>
                  <p>
                    To the maximum extent permitted by applicable law, in no
                    event shall the Company or its suppliers be liable for any
                    special, incidental, indirect, or consequential damages
                    whatsoever (including, but not limited to, damages for loss
                    of profits, loss of data or other information, for business
                    interruption, for personal injury, loss of privacy arising
                    out of or in any way related to the use of or inability to
                    use the Service, third-party software and/or third-party
                    hardware used with the Service, or otherwise in connection
                    with any provision of this Terms), even if the Company or
                    any supplier has been advised of the possibility of such
                    damages and even if the remedy fails of its essential
                    purpose.
                  </p>
                  <p>
                    Some states do not allow the exclusion of implied warranties
                    or limitation of liability for incidental or consequential
                    damages, which means that some of the above limitations may
                    not apply. In these states, each party&apos;s liability will
                    be limited to the greatest extent permitted by law.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-12 col-lg-12">
              <div className="terms-card flex-card">
                <span className="terms-icon">
                  <img src="images/disclaimer.svg" alt="info" />
                </span>
                <div className="terms-content">
                  <h6>
                    &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
                  </h6>
                  <p>
                    The Service is provided to You &quot;AS IS&quot; and
                    &quot;AS AVAILABLE&quot; and with all faults and defects
                    without warranty of any kind. To the maximum extent
                    permitted under applicable law, the Company, on its own
                    behalf and on behalf of its Affiliates and its and their
                    respective licensors and service providers, expressly
                    disclaims all warranties, whether express, implied,
                    statutory or otherwise, with respect to the Service,
                    including all implied warranties of merchantability, fitness
                    for a particular purpose, title and non-infringement, and
                    warranties that may arise out of course of dealing, course
                    of performance, usage or trade practice. Without limitation
                    to the foregoing, the Company provides no warranty or
                    undertaking, and makes no representation of any kind that
                    the Service will meet Your requirements, achieve any
                    intended results, be compatible or work with any other
                    software, applications, systems or services, operate without
                    interruption, meet any performance or reliability standards
                    or be error free or that any errors or defects can or will
                    be corrected.
                  </p>
                  <p>
                    Without limiting the foregoing, neither the Company nor any
                    of the company&apos;s provider makes any representation or
                    warranty of any kind, express or implied: (i) as to the
                    operation or availability of the Service, or the
                    information, content, and materials or products included
                    thereon; (ii) that the Service will be uninterrupted or
                    error-free; (iii) as to the accuracy, reliability, or
                    currency of any information or content provided through the
                    Service; or (iv) that the Service, its servers, the content,
                    or e-mails sent from or on behalf of the Company are free of
                    viruses, scripts, trojan horses, worms, malware, timebombs
                    or other harmful components.
                  </p>
                  <p>
                    Some jurisdictions do not allow the exclusion of certain
                    types of warranties or limitations on applicable statutory
                    rights of a consumer, so some or all of the above exclusions
                    and limitations may not apply to You. But in such a case the
                    exclusions and limitations set forth in this section shall
                    be applied to the greatest extent enforceable under
                    applicable law.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="terms-card">
                <span className="terms-icon">
                  <img src="images/law.svg" alt="info" />
                </span>
                <h6>Governing Law</h6>
                <p>
                  The laws of the Country, excluding its conflicts of law rules,
                  shall govern this Terms and Your use of the Service. Your use
                  of the Application may also be subject to other local, state,
                  national, or international laws..
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="terms-card">
                <span className="terms-icon">
                  <img src="images/dispute.svg" alt="info" />
                </span>
                <h6>Disputes Resolution</h6>
                <p>
                  If You have any concern or dispute about the Service, You
                  agree to first try to resolve the dispute informally by
                  contacting the Company.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="terms-card">
                <span className="terms-icon">
                  <img src="images/eu.svg" alt="info" />
                </span>
                <h6>For European Union (EU) Users</h6>
                <p>
                  If You are a European Union consumer, you will benefit from
                  any mandatory provisions of the law of the country in which
                  you are resident in.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-6">
              <div className="terms-card">
                <span className="terms-icon">
                  <img src="images/compliance.svg" alt="info" />
                </span>
                <h6>United States Legal Compliance</h6>
                <p>
                  You represent and warrant that (i) You are not located in a
                  country that is subject to the United States government
                  embargo, or that has been designated by the United States
                  government as a &quot;terrorist supporting&quot; country, and
                  (ii) You are not listed on any United States government list
                  of prohibited or restricted parties.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="terms-card">
                <span className="terms-icon">
                  <img src="images/server.svg" alt="info" />
                </span>
                <h6>Severability</h6>
                <p>
                  If any provision of these Terms is held to be unenforceable or
                  invalid, such provision will be changed and interpreted to
                  accomplish the objectives of such provision to the greatest
                  extent possible under applicable law and the remaining
                  provisions will continue in full force and effect.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="terms-card">
                <span className="terms-icon">
                  <img src="images/wavier.svg" alt="info" />
                </span>
                <h6>Waiver</h6>
                <p>
                  Except as provided herein, the failure to exercise a right or
                  to require performance of an obligation under this Terms shall
                  not effect a party&apos;s ability to exercise such right or
                  require such performance at any time thereafter nor shall be
                  the waiver of a breach constitute a waiver of any subsequent
                  breach.
                </p>
              </div>
            </div>

            <div className="col-md-12 col-lg-4">
              <div className="terms-card">
                <span className="terms-icon">
                  <img src="images/translation.svg" alt="info" />
                </span>
                <h6>Translation Interpretation</h6>
                <p>
                  These Terms and Conditions may have been translated if We have
                  made them available to You on our Service. You agree that the
                  original English text shall prevail in the case of a dispute.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-8">
              <div className="terms-card">
                <span className="terms-icon">
                  <img src="images/changes2.svg" alt="info" />
                </span>
                <h6>Changes to These Terms and Conditions</h6>
                <p>
                  We reserve the right, at Our sole discretion, to modify or
                  replace these Terms at any time. If a revision is material We
                  will make reasonable efforts to provide at least 30 days&apos;
                  notice prior to any new terms taking effect. What constitutes
                  a material change will be determined at Our sole discretion.
                </p>
                <p>
                  By continuing to access or use Our Service after those
                  revisions become effective, You agree to be bound by the
                  revised terms. If You do not agree to the new terms, in whole
                  or in part, please stop using the website and the Service.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="terms-card flex-card">
                <span className="terms-icon">
                  <img src="images/contact.svg" alt="info" />
                </span>
                <div className="terms-content">
                  <h6>Contact Us</h6>
                  <p>
                    If you have any questions about these Terms and Conditions,
                    You can contact us:
                  </p>
                  <ul>
                    <li>
                      <p>
                        By email:{" "}
                        <a href="mailto:brand@captaintractors.com">
                          brand@captaintractors.com
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        By visiting this page on our website:{" "}
                        <a href="https://captaintractors.com/ContactUs">
                          https://captaintractors.com/ContactUs
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        By phone number:{" "}
                        <a href="tel:+919898460090">+91 98984 60090</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        By address:{" "}
                        <span>
                          Captain Tractors Pvt. Ltd., Padavla Road, Veraval
                          (Shapar), Taluka : Kotda Sangani, Dist. Rajkot
                          (Gujarat) INDIA. Pincode : 360024.
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
