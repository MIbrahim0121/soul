import React from "react";

export default function TermsOfService() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-left text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>

      <div className="space-y-8">

        <div>
          <h2 className="text-2xl font-semibold mb-2">Intellectual Property</h2>
          <p>
            The graphic design and overall structure of the Amazing-Souls website were created by Amazing-Souls. All graphical elements, layout, and content are protected under copyright, trademark, and design laws.
            Any individual who downloads or collects information from the site has only a private, personal, and non-transferable usage right.
          </p>
          <p className="mt-3">
            It is strictly prohibited to reproduce any page from this website inside an external frame or embed it into another website. Any partial or full reproduction of this website without written consent from Amazing-Souls constitutes infringement and is subject to legal action under Articles L.335-2 and following of the Intellectual Property Code.
          </p>
          <p className="mt-3">
            Texts, graphics, logos, and images may only be reproduced for personal or educational use if the source is clearly credited and not used commercially. Any misuse may result in civil or criminal liability.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Collection & Use of Personal Data</h2>
          <p>
            The collection and use of personal data on the Amazing-Souls website complies with the French law "Informatique, Fichiers et Libertés" dated January 6, 1978, as amended.
          </p>
          <p className="mt-3">
            Personal data is collected to identify users and provide the services offered on our platform. This data will not be shared with third parties without explicit user consent, and only if the third party agrees to adhere to data protection regulations.
          </p>
          <p className="mt-3">
            Users have the right to access, modify, or delete their personal data, as well as object to how it’s processed. To exercise this right, users may contact Amazing-Souls at any time.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
          <p>
            For user experience and navigation purposes, Amazing-Souls may collect certain information through cookies. Users can disable cookies in their browser settings, though doing so may limit access to some website features.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>
            <strong>Amazing-Souls</strong><br />
            Support Email: <a href="mailto:support@amazing-souls.com" className="text-purple-600 underline">support@amazing-souls.com</a><br />
            Last Updated: 03/11/23
          </p>
          <p className="mt-3">
            Véronique Desrousseaux<br />
            Résidence Saint-Marc / Port Pin<br />
            Avenue Maréchal Foch, 13260 Cassis<br />
            SIRET: 42296904800079<br />
            Phone: 06 20 63 74 24
          </p>
        </div>

      </div>

      <p className="text-sm text-center mt-10 text-gray-500">Powered by Amazing-Souls</p>
    </section>
  );
}
