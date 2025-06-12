import Card from "./Card";

function Commonskin() {
  const data = [
    {
      title: "Acne",
      description: "Pimples, blackheads, or whiteheads on the skin.",
      img: "/images/Acne.jpg",
      type: "Common",
      detail:
        "Acne is a skin condition that occurs when your hair follicles become plugged with oil and dead skin cells. It causes whiteheads, blackheads or pimples, and usually appears on the face, forehead, chest, upper back and shoulders.",
    },
    {
      title: "Chickenpox",
      description: "Itchy rash with small, fluid-filled blisters.",
      img: "/images/chiken.jpeg",
      type: "Common",
      detail:
        "Chickenpox is a highly contagious infection caused by the varicella-zoster virus. It's characterized by an itchy, blister-like rash that typically appears on the face, scalp, chest, and back.",
    },
    {
      title: "Dyshidrotic Eczema",
      description: "Small, itchy blisters on the edges of fingers, toes, palms, or soles.",
      img: "/images/Dyshidrotic Eczema.jpeg",
      type: "Danger",
      detail:
        "Dyshidrotic eczema (dyshidrosis) is a type of eczema that causes small, itchy blisters on the edges of the fingers, toes, palms, and soles of the feet. These blisters can be painful and may last for several weeks.",
    },
    {
      title: "Nail Fungus",
      description: "Thickened, discolored, and crumbling nails.",
      img: "/images/Nail_Fungus.jpeg",
      type: "Common",
      detail:
        "Nail fungus (onychomycosis) is a common condition that begins as a white or yellow spot under the tip of your fingernail or toenail. As the fungal infection goes deeper, it may cause your nail to discolor, thicken and crumble at the edge.",
    },
    {
      title: "Ringworm",
      description: "Red, itchy, circular rash with clearer skin in the middle.",
      img: "/images/Ringworm.jpeg",
      type: "Common",
      detail:
        "Ringworm (tinea corporis) is a common fungal infection of the skin that causes a circular rash, typically red and itchy, with a clearer area in the center. It can appear on any part of the body, including the scalp, groin, and feet.",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div>
        <div className="text-3xl font-semibold flex justify-center mb-5">Common Skin Conditions</div>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}

export default Commonskin;
