
import Card from './Card';

function Commonskin() {
const data = [
    {
      title: 'Eczema',
      description: 'Red itchy rash often on hands or face.',
      img: '/images/Eczema_1.jpg',
      type: 'Danger',
      detail:
        'Eczema (atopic dermatitis) is a chronic skin condition that causes inflammation, redness, and itching. It can flare periodically and may be accompanied by asthma or hay fever.',
    },
    {
      title: 'Psoriasis',
      description: 'Thick red patches covered with white scales.',
      img: '/images/psoriasis.jpg',
      type: 'Common',
      detail:
        'Psoriasis is a chronic autoimmune condition that causes the rapid buildup of skin cells, resulting in scaling on the skin’s surface. It is often itchy or painful.',
    },
    {
      title: 'Acne', 
      description: 'Pimples, blackheads, or whiteheads on the skin.', 
      img: '/images/Acne.jpg', 
      type: 'Common',
      detail:
      'Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It causes whiteheads, blackheads or pimples, and usually appears on the face, forehead, chest, upper back and shoulders.',
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div>
        <div className="text-3xl font-semibold flex justify-center mb-10">Common Skin Conditions</div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};


export default Commonskin