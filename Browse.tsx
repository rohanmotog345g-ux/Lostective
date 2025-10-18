import React, { useState } from 'react';

// 1. Updated type to include owner details
interface LostFoundItem {
  id: number;
  name: string;
  description: string;
  status: 'Lost' | 'Found';
  category: 'Electronics' | 'Bags' | 'Books' | 'Clothing' | 'Keys' | 'ID Cards' | 'Other';
  location: string;
  date: string;
  ownerName: string;   // Added owner name
  ownerContact: string; // Added owner contact
}

// 2. Updated data with owner details for 'Lost' items
const itemsData: LostFoundItem[] = [
  {
    id: 1,
    name: 'Black iPhone 13',
    description: 'Black iPhone 13 with a cracked screen protector. Last seen near the study area.',
    status: 'Lost',
    category: 'Electronics',
    location: 'Library 3rd Floor',
    date: 'Oct 01, 2025',
    ownerName: 'Arjun Kumar',
    ownerContact: '9876543210',
  },
  {
    id: 2,
    name: 'Blue Backpack',
    description: 'Blue JanSport backpack found in the cafeteria. Contains some notebooks.',
    status: 'Found',
    category: 'Bags',
    location: 'Student Center',
    date: 'Oct 15, 2025',
    ownerName: 'N/A',
    ownerContact: 'N/A',
  },
  {
    id: 3,
    name: 'Calculus Textbook',
    description: 'Calculus: Early Transcendentals textbook with notes inside.',
    status: 'Found',
    category: 'Books',
    location: 'Math Building Room 201',
    date: 'Oct 10, 2025',
    ownerName: 'N/A',
    ownerContact: 'N/A',
  },
  {
    id: 4,
    name: 'Student ID Card',
    description: 'Student ID for Jane Doe. Found near the main entrance.',
    status: 'Found',
    category: 'ID Cards',
    location: 'Main Entrance',
    date: 'Oct 16, 2025',
    ownerName: 'N/A',
    ownerContact: 'N/A',
  },
  {
    id: 5,
    name: 'Car Keys',
    description: 'Toyota car keys with a small blue keychain. Lost in Parking Lot C.',
    status: 'Lost',
    category: 'Keys',
    location: 'Parking Lot C',
    date: 'Oct 17, 2025',
    ownerName: 'Priya Sharma',
    ownerContact: '9123456789',
  },
  {
    id: 6,
    name: 'Gray Hoodie',
    description: 'A gray university-branded hoodie left in the gym.',
    status: 'Found',
    category: 'Clothing',
    location: 'University Gym',
    date: 'Oct 14, 2025',
    ownerName: 'N/A',
    ownerContact: 'N/A',
  },
];

const categories: LostFoundItem['category'][] = ['Electronics', 'Books', 'Clothing', 'Keys', 'ID Cards', 'Bags', 'Other'];

// 3. Item Card Component - Now triggers claim modal
const ItemCard: React.FC<{ item: LostFoundItem; onClick: (item: LostFoundItem) => void }> = ({ item, onClick }) => {
  return (
    <div 
      onClick={() => onClick(item)}
      style={{
        background: '#fff',
        borderRadius: '16px',
        padding: '24px',
        width: '340px',
        margin: '12px',
        color: '#333',
        position: 'relative',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        border: '1px solid #EAEAEA',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    }}
    onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
    }}
    onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
    }}
    >
      {/* Item details... (rest is the same, with added owner info) */}
       <div style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: item.status === 'Found' ? '#FFFBEB' : '#FEF2F2',
          color: item.status === 'Found' ? '#F59E0B' : '#EF4444',
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '600',
        }}>
          {item.status}
        </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
         <div style={{ background: '#F3F4F6', padding: '12px', borderRadius: '12px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
         </div>
         <div>
            <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#111827' }}>{item.name}</h3>
             <span style={{ color: '#6B7280', fontSize: '12px', fontWeight: '500' }}>{item.category}</span>
         </div>
      </div>
      <p style={{ margin: 0, fontSize: '14px', color: '#6B7280', lineHeight: '1.5' }}>{item.description}</p>
      <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '16px', marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {item.status === 'Lost' && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#374151' }}>
              <span>👤</span>
              <span>Reported by {item.ownerName}</span>
            </div>
        )}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#374151' }}>
          <span>📍</span>
          <span>{item.location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#374151' }}>
          <span>🗓️</span>
          <span>{item.date}</span>
        </div>
      </div>
    </div>
  );
};

// 4. NEW: Claim Item Modal Component
const ClaimModal: React.FC<{ item: LostFoundItem; onClose: () => void }> = ({ item, onClose }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [proof, setProof] = useState('');

    const handleSubmit = () => {
        if (!name || !phone || !proof) {
            alert('Please fill out all fields.');
            return;
        }
        alert(`Claim submitted for ${item.name} by ${name}. We will contact you at ${phone}.`);
        onClose();
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }} onClick={onClose}>
            <div style={{ background: 'white', padding: '24px', borderRadius: '16px', width: '400px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }} onClick={(e) => e.stopPropagation()}>
                <h2 style={{ marginTop: 0, color: '#111827' }}>Claim Item: {item.name}</h2>
                <p style={{ color: '#6B7280', marginBottom: '24px' }}>To claim this item, please provide your details and proof of ownership.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px' }}/>
                    <input type="text" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px' }}/>
                    <textarea placeholder="Proof of Ownership (e.g., describe a unique feature, mention contents, etc.)" value={proof} onChange={(e) => setProof(e.target.value)} rows={4} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB', fontSize: '14px', resize: 'vertical' }}/>
                </div>
                <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button onClick={onClose} style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #D1D5DB', background: 'white', cursor: 'pointer', fontWeight: '600' }}>Cancel</button>
                    <button onClick={handleSubmit} style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#6C5CE7', color: 'white', cursor: 'pointer', fontWeight: '600' }}>Submit Claim</button>
                </div>
            </div>
        </div>
    );
};

// 5. NEW: Report Item Form Component
const ReportItemForm: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    return (
        <div style={{ maxWidth: '600px', margin: '40px auto', padding: '24px', background: '#fff', borderRadius: '16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
             <h1 style={{ textAlign: 'center', color: '#111827' }}>Report an Item</h1>
             <p style={{ textAlign: 'center', color: '#6B7280', marginBottom: '24px' }}>Fill in the details below to report a lost or found item.</p>
             {/* Simple form placeholder */}
             <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input type="text" placeholder="Item Name (e.g., Black iPhone 13)" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB' }}/>
                <textarea placeholder="Description" rows={3} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB' }}/>
                <select style={{ padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB', background: 'white' }}>
                    <option>Select Category</option>
                    {categories.map(c => <option key={c}>{c}</option>)}
                </select>
                 <select style={{ padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB', background: 'white' }}>
                    <option>Select Status</option>
                    <option>Lost</option>
                    <option>Found</option>
                </select>
                 <input type="text" placeholder="Location Last Seen / Found" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB' }}/>
             </div>
             <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between' }}>
                <button onClick={onBack} style={{ padding: '12px 24px', borderRadius: '8px', border: '1px solid #D1D5DB', background: 'white', cursor: 'pointer', fontWeight: '600' }}>← Back to Browse</button>
                <button onClick={() => alert('Item Reported!')} style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', background: '#6C5CE7', color: 'white', cursor: 'pointer', fontWeight: '600' }}>Submit Report</button>
             </div>
        </div>
    )
}


// 6. Main Page Component - Now handles view switching
const LostFoundPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All Items');
  const [activeStatus, setActiveStatus] = useState<'All' | 'Lost' | 'Found'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [view, setView] = useState<'browse' | 'report'>('browse'); // State to control the view
  const [claimingItem, setClaimingItem] = useState<LostFoundItem | null>(null); // State for the claim modal

  const filteredItems = itemsData.filter(item => {
    const matchesCategory = activeCategory === 'All Items' || item.category === activeCategory;
    const matchesStatus = activeStatus === 'All' || item.status === activeStatus;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  if (view === 'report') {
      return <ReportItemForm onBack={() => setView('browse')} />
  }

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#F9FAFB', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ padding: '60px 20px 80px 20px', textAlign: 'center', background: 'linear-gradient(135deg, #7A72FF 0%, #544AF2 100%)', color: 'white' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', margin: '0 0 10px 0' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255, 255, 255, 0.1)', padding: '8px', borderRadius: '8px', marginRight: '12px', verticalAlign: 'middle' }}>📦</span>Lostective
          </h1>
          <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '30px', maxWidth: '500px', margin: '10px auto 30px auto' }}>
            Help reunite lost items with their owners. Search for your missing belongings or report items you've found on campus.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', maxWidth: '600px', margin: '0 auto' }}>
            <input type="text" placeholder="Search for items..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ width: '70%', padding: '14px 20px', border: '1px solid #E5E7EB', borderRadius: '8px', fontSize: '16px', background: '#FFFFFF', color: '#333' }}/>
            <button onClick={() => setView('report')} style={{ padding: '14px 24px', border: 'none', borderRadius: '8px', background: '#fff', color: '#6C5CE7', fontSize: '16px', cursor: 'pointer', fontWeight: '600' }}>
              ⊕ Report Item
            </button>
          </div>
      </div>

      {/* Filters & Content Section */}
      <div style={{ padding: '40px 20px', transform: 'translateY(-40px)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '40px', background: 'white', padding: '10px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                {['All Items', ...categories].map(category => (
                  <button key={category} onClick={() => setActiveCategory(category)} style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: activeCategory === category ? '#6C5CE7' : 'transparent', color: activeCategory === category ? '#fff' : '#333', fontWeight: 500, transition: 'all 0.2s' }}>
                    {category}
                  </button>
                ))}
              </div>
              <div style={{ borderBottom: '1px solid #E5E7EB', marginBottom: '20px' }}>
                  {(['All', 'Lost', 'Found'] as const).map(status => (
                      <button key={status} onClick={() => setActiveStatus(status)} style={{ background: 'none', border: 'none', padding: '12px 16px', color: activeStatus === status ? '#6C5CE7' : '#6B7280', fontWeight: activeStatus === status ? '600' : '500', borderBottom: activeStatus === status ? '3px solid #6C5CE7' : '3px solid transparent', cursor: 'pointer', fontSize: '16px', marginBottom: '-1px' }}>
                          {status} ({status === 'All' ? itemsData.length : itemsData.filter(i => i.status === status).length})
                      </button>
                  ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                {filteredItems.length > 0 ? (
                  filteredItems.map(item => <ItemCard key={item.id} item={item} onClick={setClaimingItem} />)
                ) : (
                  <p style={{ color: '#6B7280', padding: '40px', textAlign: 'center', width: '100%' }}>No items match your filters.</p>
                )}
              </div>
          </div>
      </div>
      {claimingItem && <ClaimModal item={claimingItem} onClose={() => setClaimingItem(null)} />}
    </div>
  );
};

export default LostFoundPage;