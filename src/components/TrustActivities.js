import React from 'react';
import './TrustActivities.css';
import img1 from './activity1.jpg'
import img2 from './activity2.jpeg'
import img3 from './activity3.jpeg'
import img4 from './activity4.jpeg'
import img5 from './activity5.jpeg'
import img6 from './activity6.jpeg'

const TrustActivities = () => {
  return (
    <div className="trust-activities-container">
      <h2 className="trust-activities-title">Trust Activities</h2>
      <div className="trust-activity-cards-container">
        <div className="trust-activity-card">
            <img src={img1} alt="Trust Activity 1" />
            <p className="trust-activity-card-description">चौधरीवास खंड हिसार में भारत माता पूजन का कार्यक्रम आयोजित किया गया जिसमें विद्यार्थी एवं अभिभावक गण शामिल हुए। चौधरीवास खंड हिसार में भारत माता पूजन का कार्यक्रम आयोजित किया गया जिसमें विद्यार्थी एवं अभिभावक गण शामिल हुए।</p>
        </div>
        <div className="trust-activity-card">
            <img src={img2} alt="Trust Activity 2" />
            <p className="trust-activity-card-description">फरीदाबाद में हुए कार्यकर्ता अभ्यास वर्ग के दौरान कार्यकर्ताओं को सम्बोधित करते हुए श्रीमान योगेन्द्र जी एवं साध्वी शकुन्तला जी </p>
        </div>
        <div className="trust-activity-card">
            <img src={img3} alt="Trust Activity 3" />
            <p className="trust-activity-card-description">फरीदाबाद में आयोजित कार्यकर्ता अभ्यास वर्ग में उपस्थित कार्यकर्ताओं का समूह</p>
        </div>
        <div className="trust-activity-card">
            <img src={img4} alt="Trust Activity 4" />
            <p className="trust-activity-card-description">अम्बाला में भारत माता पूजन कार्यक्रम में भारत माता को माल्यार्पण करते हुए श्रीमान अतुल अग्रवाल जी</p>
        </div>
        <div className="trust-activity-card">
            <img src={img5} alt="Trust Activity 5" />
            <p className="trust-activity-card-description">फरीदाबाद में कार्यकर्ता अभ्यास वर्ग में श्रीमान राकेश जी अपना उद्बोधन देते हुए। साथ में बैठे हैं डा पंकज तुली</p>
        </div>
        <div className="trust-activity-card">
            <img src={img6} alt="Trust Activity 6" />
            <p className="trust-activity-card-description">गोमती देवी विद्या मन्दिर , सातरोड़ कलां , हिसार में नेताजी सुभाष चन्द्र बोस जी की जयंती पर भारत माता पूजन का कार्यक्रम आयोजित किया गया । विद्यालय के प्राचार्य श्रीमान् विवेक मुद्गल जी का बौद्धिक रहा। भारत माता व सुभाष चन्द्र बोस के चित्र के सम्मुख पुष्प अर्पित कर कार्यक्रम किया गया। विद्यालय के सभी विद्यार्थियों, अध्यापक, अध्यापिकाओं ने भारत माता पूजन कार्यक्रम में भाग लिया तथा हनुमान चालीसा पाठ किया।
इस अवसर पर गोमती स्कूल के प्रधानाचार्य श्री विवेक मुदगिल जी, समाजसेवी श्रीमान गिरधारी लाल चाहर जी , शिक्षकगण व विद्यार्थी उपस्थित रहे</p>
        </div>
      </div>
    </div>
  )
}

export default TrustActivities;
