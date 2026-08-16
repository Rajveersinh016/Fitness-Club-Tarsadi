/**
 * GYM MANAGEMENT PLATFORM — MOCK DATA
 * ====================================
 * All data here is DEMO/SYNTHETIC data.
 * Replace with real data after backend integration.
 *
 * TODO (Phase 2): Replace this module with API service calls.
 */

'use strict';

/* ============================================================
   GYM CONFIGURATION
   Replace placeholder values with real gym information.
   ============================================================ */
const GYM_CONFIG = {
  name:         'Fitness Club Tarsadi',
  tagline:      'Train Hard. Live Strong.',
  description:  'A dedicated gym facility in Kosamba focused on strength training, conditioning, and helping members achieve their personal fitness goals through consistent workouts.',
  phone:        'Contact details available at gym',
  email:        '',
  address:      'Pgp Township, Kim - Kosamba Rd, Opp. Vaibhav Bungalows, Tarsadi, Kosamba, Gujarat 394120',
  mapsUrl:      'https://maps.app.goo.gl/hK9i2N3yXx6edGAd6',
  instagram:    'https://www.instagram.com/fitnessclubtarsadi/',
  facebook:     '',
  whatsapp:     '',
  currency:     '₹',
  membershipPlans: [
    {
      id: 'monthly',
      name: 'Monthly Plan',
      duration: '1 Month',
      price: 'Contact for pricing',
      priceNote: 'details available at gym',
      featured: false,
      features: [
        'Full Gym Access',
        'Strength & Cardio Equipment',
        'Locker Room Access',
      ]
    },
    {
      id: 'quarterly',
      name: 'Quarterly Plan',
      duration: '3 Months',
      price: 'Contact for pricing',
      priceNote: 'details available at gym',
      featured: true,
      features: [
        'Full Gym Access',
        'Strength & Cardio Equipment',
        'Locker Room Access',
      ]
    },
    {
      id: 'annual',
      name: 'Annual Plan',
      duration: '12 Months',
      price: 'Contact for pricing',
      priceNote: 'details available at gym',
      featured: false,
      features: [
        'Full Gym Access',
        'Strength & Cardio Equipment',
        'Locker Room Access',
      ]
    }
  ],
  openingHours: [
    { day: 'Monday - Saturday', time: 'Contact the gym for current timings' },
    { day: 'Sunday',            time: 'Contact the gym for current timings' },
  ],
  facilities: [
    {
      id: 1,
      name: 'Strength Training',
      icon: '🏋️',
      description: 'Dedicated strength equipment and free weight area for progressive resistance training.',
    },
    {
      id: 2,
      name: 'Cardio Suite',
      icon: '🏃',
      description: 'Cardio equipment designed to support stamina and endurance conditioning.',
    },
    {
      id: 3,
      name: 'Free Weights Area',
      icon: '💪',
      description: 'Comprehensive set of dumbbells, barbells, and plates for strength workouts.',
    },
    {
      id: 4,
      name: 'Functional Fitness Zone',
      icon: '⚡',
      description: 'Space for functional movement, bodyweight exercises, and mobility work.',
    }
  ],
  trainers: [
    {
      id: 1,
      name: 'Trainer Profiles Coming Soon',
      role: 'Fitness Coach',
      specialization: 'Strength & Conditioning',
      experience: 'Certified Training',
      photo: null,
    }
  ],
  stats: [
    { value: 'Fitness Club', label: 'Tarsadi', note: '' },
    { value: 'Kosamba',     label: 'Gujarat', note: '' },
  ]
};

/* ============================================================
   DEMO MODE CONFIG
   ============================================================ */
const DEMO_MODE = true;  // Set to false when connected to real backend

const DEMO_CONFIG = {
  irregularThreshold: 50,    // % attendance below which member is "irregular"
  minObservationDays: 10,    // Minimum days before flagging irregular
  reminderDaysBefore: 7,     // Days before expiry to send reminder
  overdueThreshold: 7,       // Days after due date to mark as overdue
};

/* ============================================================
   MOCK MEMBERS (30 demo members)
   ============================================================ */
const MOCK_MEMBERS = [
  {
    id: 'GYM001', name: 'Arjun Mehta',       phone: '9876500001', email: 'arjun.demo@example.com',
    membership: 'Annual', joinDate: '2026-01-10', expiryDate: '2026-08-20',
    feeStatus: 'Paid', status: 'Active', gender: 'Male', age: 28,
    emergencyContact: '9876500099', bloodGroup: 'O+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM002', name: 'Priya Sharma',      phone: '9876500002', email: 'priya.demo@example.com',
    membership: 'Half-Yearly', joinDate: '2026-03-01', expiryDate: '2026-09-01',
    feeStatus: 'Pending', status: 'Active', gender: 'Female', age: 24,
    emergencyContact: '9876500098', bloodGroup: 'A+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM003', name: 'Rahul Patel',       phone: '9876500003', email: 'rahul.demo@example.com',
    membership: 'Monthly', joinDate: '2026-07-01', expiryDate: '2026-08-01',
    feeStatus: 'Overdue', status: 'Irregular', gender: 'Male', age: 32,
    emergencyContact: '9876500097', bloodGroup: 'B+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM004', name: 'Anjali Singh',      phone: '9876500004', email: 'anjali.demo@example.com',
    membership: 'Quarterly', joinDate: '2026-04-15', expiryDate: '2026-07-15',
    feeStatus: 'Paid', status: 'Expired', gender: 'Female', age: 26,
    emergencyContact: '9876500096', bloodGroup: 'AB+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM005', name: 'Vikram Desai',      phone: '9876500005', email: 'vikram.demo@example.com',
    membership: 'Annual', joinDate: '2026-02-01', expiryDate: '2027-02-01',
    feeStatus: 'Paid', status: 'Active', gender: 'Male', age: 35,
    emergencyContact: '9876500095', bloodGroup: 'O-', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM006', name: 'Sneha Joshi',       phone: '9876500006', email: 'sneha.demo@example.com',
    membership: 'Half-Yearly', joinDate: '2026-05-01', expiryDate: '2026-11-01',
    feeStatus: 'Paid', status: 'Active', gender: 'Female', age: 22,
    emergencyContact: '9876500094', bloodGroup: 'A-', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM007', name: 'Rajesh Kumar',      phone: '9876500007', email: 'rajesh.demo@example.com',
    membership: 'Monthly', joinDate: '2026-07-15', expiryDate: '2026-08-15',
    feeStatus: 'Pending', status: 'Irregular', gender: 'Male', age: 40,
    emergencyContact: '9876500093', bloodGroup: 'B-', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM008', name: 'Kavita Rao',        phone: '9876500008', email: 'kavita.demo@example.com',
    membership: 'Annual', joinDate: '2026-01-01', expiryDate: '2026-08-25',
    feeStatus: 'Paid', status: 'Active', gender: 'Female', age: 30,
    emergencyContact: '9876500092', bloodGroup: 'O+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM009', name: 'Amit Shah',         phone: '9876500009', email: 'amit.demo@example.com',
    membership: 'Quarterly', joinDate: '2026-05-20', expiryDate: '2026-08-20',
    feeStatus: 'Paid', status: 'Active', gender: 'Male', age: 27,
    emergencyContact: '9876500091', bloodGroup: 'A+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM010', name: 'Pooja Verma',       phone: '9876500010', email: 'pooja.demo@example.com',
    membership: 'Half-Yearly', joinDate: '2026-03-15', expiryDate: '2026-09-15',
    feeStatus: 'Pending', status: 'Active', gender: 'Female', age: 25,
    emergencyContact: '9876500090', bloodGroup: 'B+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM011', name: 'Suresh Nair',       phone: '9876500011', email: 'suresh.demo@example.com',
    membership: 'Annual', joinDate: '2026-01-20', expiryDate: '2027-01-20',
    feeStatus: 'Paid', status: 'Active', gender: 'Male', age: 38,
    emergencyContact: '9876500089', bloodGroup: 'AB-', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM012', name: 'Meera Iyer',        phone: '9876500012', email: 'meera.demo@example.com',
    membership: 'Monthly', joinDate: '2026-08-01', expiryDate: '2026-09-01',
    feeStatus: 'Paid', status: 'Active', gender: 'Female', age: 23,
    emergencyContact: '9876500088', bloodGroup: 'O+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM013', name: 'Karan Malhotra',    phone: '9876500013', email: 'karan.demo@example.com',
    membership: 'Quarterly', joinDate: '2026-06-01', expiryDate: '2026-09-01',
    feeStatus: 'Paid', status: 'Irregular', gender: 'Male', age: 29,
    emergencyContact: '9876500087', bloodGroup: 'A+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM014', name: 'Anita Jain',        phone: '9876500014', email: 'anita.demo@example.com',
    membership: 'Half-Yearly', joinDate: '2026-02-20', expiryDate: '2026-08-20',
    feeStatus: 'Overdue', status: 'Active', gender: 'Female', age: 33,
    emergencyContact: '9876500086', bloodGroup: 'B+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM015', name: 'Dev Kapoor',         phone: '9876500015', email: 'dev.demo@example.com',
    membership: 'Annual', joinDate: '2025-08-15', expiryDate: '2026-08-15',
    feeStatus: 'Paid', status: 'Active', gender: 'Male', age: 31,
    emergencyContact: '9876500085', bloodGroup: 'O-', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM016', name: 'Ritu Gupta',         phone: '9876500016', email: 'ritu.demo@example.com',
    membership: 'Monthly', joinDate: '2026-07-20', expiryDate: '2026-08-20',
    feeStatus: 'Pending', status: 'Active', gender: 'Female', age: 26,
    emergencyContact: '9876500084', bloodGroup: 'A-', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM017', name: 'Nikhil Bose',        phone: '9876500017', email: 'nikhil.demo@example.com',
    membership: 'Quarterly', joinDate: '2026-05-10', expiryDate: '2026-08-10',
    feeStatus: 'Paid', status: 'Expired', gender: 'Male', age: 34,
    emergencyContact: '9876500083', bloodGroup: 'B-', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM018', name: 'Swati Pillai',       phone: '9876500018', email: 'swati.demo@example.com',
    membership: 'Half-Yearly', joinDate: '2026-04-01', expiryDate: '2026-10-01',
    feeStatus: 'Paid', status: 'Active', gender: 'Female', age: 27,
    emergencyContact: '9876500082', bloodGroup: 'AB+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM019', name: 'Rohit Trivedi',      phone: '9876500019', email: 'rohit.demo@example.com',
    membership: 'Annual', joinDate: '2026-01-15', expiryDate: '2026-08-30',
    feeStatus: 'Pending', status: 'Irregular', gender: 'Male', age: 36,
    emergencyContact: '9876500081', bloodGroup: 'O+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM020', name: 'Lakshmi Reddy',      phone: '9876500020', email: 'lakshmi.demo@example.com',
    membership: 'Quarterly', joinDate: '2026-06-15', expiryDate: '2026-09-15',
    feeStatus: 'Paid', status: 'Active', gender: 'Female', age: 28,
    emergencyContact: '9876500080', bloodGroup: 'B+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM021', name: 'Aakash Pandya',      phone: '9876500021', email: 'aakash.demo@example.com',
    membership: 'Monthly', joinDate: '2026-08-01', expiryDate: '2026-09-01',
    feeStatus: 'Paid', status: 'Active', gender: 'Male', age: 21,
    emergencyContact: '9876500079', bloodGroup: 'A+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM022', name: 'Divya Chawla',       phone: '9876500022', email: 'divya.demo@example.com',
    membership: 'Half-Yearly', joinDate: '2026-03-10', expiryDate: '2026-09-10',
    feeStatus: 'Overdue', status: 'Irregular', gender: 'Female', age: 29,
    emergencyContact: '9876500078', bloodGroup: 'O-', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM023', name: 'Sanjay Mishra',      phone: '9876500023', email: 'sanjay.demo@example.com',
    membership: 'Annual', joinDate: '2026-02-15', expiryDate: '2027-02-15',
    feeStatus: 'Paid', status: 'Active', gender: 'Male', age: 45,
    emergencyContact: '9876500077', bloodGroup: 'B+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM024', name: 'Neha Saxena',        phone: '9876500024', email: 'neha.demo@example.com',
    membership: 'Quarterly', joinDate: '2026-07-01', expiryDate: '2026-10-01',
    feeStatus: 'Paid', status: 'Active', gender: 'Female', age: 24,
    emergencyContact: '9876500076', bloodGroup: 'AB+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM025', name: 'Yash Agrawal',       phone: '9876500025', email: 'yash.demo@example.com',
    membership: 'Monthly', joinDate: '2026-06-25', expiryDate: '2026-07-25',
    feeStatus: 'Overdue', status: 'Expired', gender: 'Male', age: 19,
    emergencyContact: '9876500075', bloodGroup: 'O+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM026', name: 'Mana Thakkar',       phone: '9876500026', email: 'mana.demo@example.com',
    membership: 'Annual', joinDate: '2026-03-20', expiryDate: '2027-03-20',
    feeStatus: 'Paid', status: 'Active', gender: 'Female', age: 31,
    emergencyContact: '9876500074', bloodGroup: 'A-', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM027', name: 'Hardik Parmar',      phone: '9876500027', email: 'hardik.demo@example.com',
    membership: 'Half-Yearly', joinDate: '2026-04-20', expiryDate: '2026-10-20',
    feeStatus: 'Paid', status: 'Irregular', gender: 'Male', age: 22,
    emergencyContact: '9876500073', bloodGroup: 'B-', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM028', name: 'Jaya Chopra',        phone: '9876500028', email: 'jaya.demo@example.com',
    membership: 'Quarterly', joinDate: '2026-06-01', expiryDate: '2026-09-01',
    feeStatus: 'Paid', status: 'Active', gender: 'Female', age: 37,
    emergencyContact: '9876500072', bloodGroup: 'O+', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM029', name: 'Alok Tiwari',        phone: '9876500029', email: 'alok.demo@example.com',
    membership: 'Annual', joinDate: '2026-01-05', expiryDate: '2026-08-18',
    feeStatus: 'Pending', status: 'Active', gender: 'Male', age: 42,
    emergencyContact: '9876500071', bloodGroup: 'AB-', address: 'Demo Address, Kosamba',
  },
  {
    id: 'GYM030', name: 'Riya Patel',         phone: '9876500030', email: 'riya.demo@example.com',
    membership: 'Monthly', joinDate: '2026-08-05', expiryDate: '2026-09-05',
    feeStatus: 'Paid', status: 'Active', gender: 'Female', age: 20,
    emergencyContact: '9876500070', bloodGroup: 'A+', address: 'Demo Address, Kosamba',
  },
];

/* ============================================================
   MOCK ATTENDANCE (100+ records)
   ============================================================ */
function generateAttendance() {
  const records = [];
  const today = new Date('2026-08-15');
  let recId = 1;
  MOCK_MEMBERS.forEach(m => {
    if (m.status === 'Expired') return;
    // Generate 30 days of attendance data
    for (let d = 29; d >= 0; d--) {
      const date = new Date(today);
      date.setDate(today.getDate() - d);
      const dateStr = date.toISOString().split('T')[0];

      // Irregular members have low attendance
      const presentChance = m.status === 'Irregular' ? 0.35
        : m.status === 'Active' ? 0.75
        : 0.5;

      if (Math.random() < presentChance) {
        const hour = 5 + Math.floor(Math.random() * 14);
        const min  = Math.floor(Math.random() * 60);
        const checkIn = `${String(hour).padStart(2,'0')}:${String(min).padStart(2,'0')}`;
        const checkOutHour = hour + 1 + Math.floor(Math.random() * 2);
        const checkOut = `${String(Math.min(checkOutHour, 22)).padStart(2,'0')}:${String(Math.floor(Math.random()*60)).padStart(2,'0')}`;
        records.push({
          id: recId++,
          memberId: m.id,
          memberName: m.name,
          date: dateStr,
          checkIn,
          checkOut,
          status: 'Present',
        });
      }
    }
  });
  return records;
}

const MOCK_ATTENDANCE = generateAttendance();

/* ============================================================
   MOCK PAYMENTS (30+ records)
   ============================================================ */
const MOCK_PAYMENTS = [
  { id: 'RCP001', memberId: 'GYM001', memberName: 'Arjun Mehta',    date: '2026-01-10', amount: 12000, method: 'UPI',          reference: 'UPI001', plan: 'Annual',      status: 'Paid',    dueDate: '2027-01-10' },
  { id: 'RCP002', memberId: 'GYM005', memberName: 'Vikram Desai',   date: '2026-02-01', amount: 12000, method: 'Cash',         reference: 'CASH002', plan: 'Annual',     status: 'Paid',    dueDate: '2027-02-01' },
  { id: 'RCP003', memberId: 'GYM006', memberName: 'Sneha Joshi',    date: '2026-05-01', amount: 6500,  method: 'Card',         reference: 'CARD003', plan: 'Half-Yearly', status: 'Paid',    dueDate: '2026-11-01' },
  { id: 'RCP004', memberId: 'GYM008', memberName: 'Kavita Rao',     date: '2026-01-01', amount: 12000, method: 'Bank Transfer', reference: 'BANK004', plan: 'Annual',    status: 'Paid',    dueDate: '2027-01-01' },
  { id: 'RCP005', memberId: 'GYM009', memberName: 'Amit Shah',      date: '2026-05-20', amount: 3500,  method: 'UPI',          reference: 'UPI005', plan: 'Quarterly',   status: 'Paid',    dueDate: '2026-08-20' },
  { id: 'RCP006', memberId: 'GYM011', memberName: 'Suresh Nair',    date: '2026-01-20', amount: 12000, method: 'Cash',         reference: 'CASH006', plan: 'Annual',     status: 'Paid',    dueDate: '2027-01-20' },
  { id: 'RCP007', memberId: 'GYM012', memberName: 'Meera Iyer',     date: '2026-08-01', amount: 1500,  method: 'UPI',          reference: 'UPI007', plan: 'Monthly',     status: 'Paid',    dueDate: '2026-09-01' },
  { id: 'RCP008', memberId: 'GYM015', memberName: 'Dev Kapoor',     date: '2025-08-15', amount: 12000, method: 'UPI',          reference: 'UPI008', plan: 'Annual',      status: 'Paid',    dueDate: '2026-08-15' },
  { id: 'RCP009', memberId: 'GYM018', memberName: 'Swati Pillai',   date: '2026-04-01', amount: 6500,  method: 'Card',         reference: 'CARD009', plan: 'Half-Yearly', status: 'Paid',    dueDate: '2026-10-01' },
  { id: 'RCP010', memberId: 'GYM020', memberName: 'Lakshmi Reddy',  date: '2026-06-15', amount: 3500,  method: 'UPI',          reference: 'UPI010', plan: 'Quarterly',   status: 'Paid',    dueDate: '2026-09-15' },
  { id: 'RCP011', memberId: 'GYM021', memberName: 'Aakash Pandya',  date: '2026-08-01', amount: 1500,  method: 'Cash',         reference: 'CASH011', plan: 'Monthly',    status: 'Paid',    dueDate: '2026-09-01' },
  { id: 'RCP012', memberId: 'GYM023', memberName: 'Sanjay Mishra',  date: '2026-02-15', amount: 12000, method: 'Bank Transfer', reference: 'BANK012', plan: 'Annual',    status: 'Paid',    dueDate: '2027-02-15' },
  { id: 'RCP013', memberId: 'GYM024', memberName: 'Neha Saxena',    date: '2026-07-01', amount: 3500,  method: 'UPI',          reference: 'UPI013', plan: 'Quarterly',   status: 'Paid',    dueDate: '2026-10-01' },
  { id: 'RCP014', memberId: 'GYM026', memberName: 'Mana Thakkar',   date: '2026-03-20', amount: 12000, method: 'UPI',          reference: 'UPI014', plan: 'Annual',      status: 'Paid',    dueDate: '2027-03-20' },
  { id: 'RCP015', memberId: 'GYM028', memberName: 'Jaya Chopra',    date: '2026-06-01', amount: 3500,  method: 'Cash',         reference: 'CASH015', plan: 'Quarterly',  status: 'Paid',    dueDate: '2026-09-01' },
  // Pending/Overdue
  { id: 'RCP016', memberId: 'GYM002', memberName: 'Priya Sharma',   date: null, amount: 6500,  method: null, reference: null, plan: 'Half-Yearly', status: 'Pending', dueDate: '2026-09-01' },
  { id: 'RCP017', memberId: 'GYM007', memberName: 'Rajesh Kumar',   date: null, amount: 1500,  method: null, reference: null, plan: 'Monthly',     status: 'Pending', dueDate: '2026-08-15' },
  { id: 'RCP018', memberId: 'GYM003', memberName: 'Rahul Patel',    date: null, amount: 1500,  method: null, reference: null, plan: 'Monthly',     status: 'Overdue', dueDate: '2026-08-01' },
  { id: 'RCP019', memberId: 'GYM014', memberName: 'Anita Jain',     date: null, amount: 6500,  method: null, reference: null, plan: 'Half-Yearly', status: 'Overdue', dueDate: '2026-08-20' },
  { id: 'RCP020', memberId: 'GYM010', memberName: 'Pooja Verma',    date: null, amount: 6500,  method: null, reference: null, plan: 'Half-Yearly', status: 'Pending', dueDate: '2026-09-15' },
  { id: 'RCP021', memberId: 'GYM016', memberName: 'Ritu Gupta',     date: null, amount: 1500,  method: null, reference: null, plan: 'Monthly',     status: 'Pending', dueDate: '2026-08-20' },
  { id: 'RCP022', memberId: 'GYM019', memberName: 'Rohit Trivedi',  date: null, amount: 12000, method: null, reference: null, plan: 'Annual',      status: 'Pending', dueDate: '2026-08-30' },
  { id: 'RCP023', memberId: 'GYM022', memberName: 'Divya Chawla',   date: null, amount: 6500,  method: null, reference: null, plan: 'Half-Yearly', status: 'Overdue', dueDate: '2026-08-10' },
  { id: 'RCP024', memberId: 'GYM025', memberName: 'Yash Agrawal',   date: null, amount: 1500,  method: null, reference: null, plan: 'Monthly',     status: 'Overdue', dueDate: '2026-07-25' },
  { id: 'RCP025', memberId: 'GYM029', memberName: 'Alok Tiwari',    date: null, amount: 12000, method: null, reference: null, plan: 'Annual',      status: 'Pending', dueDate: '2026-08-18' },
  // More paid records
  { id: 'RCP026', memberId: 'GYM013', memberName: 'Karan Malhotra', date: '2026-06-01', amount: 3500,  method: 'UPI',  reference: 'UPI026', plan: 'Quarterly',   status: 'Paid', dueDate: '2026-09-01' },
  { id: 'RCP027', memberId: 'GYM027', memberName: 'Hardik Parmar',  date: '2026-04-20', amount: 6500,  method: 'Cash', reference: 'CASH027', plan: 'Half-Yearly', status: 'Paid', dueDate: '2026-10-20' },
  { id: 'RCP028', memberId: 'GYM030', memberName: 'Riya Patel',     date: '2026-08-05', amount: 1500,  method: 'UPI',  reference: 'UPI028', plan: 'Monthly',     status: 'Paid', dueDate: '2026-09-05' },
  { id: 'RCP029', memberId: 'GYM004', memberName: 'Anjali Singh',   date: '2026-04-15', amount: 3500,  method: 'Card', reference: 'CARD029', plan: 'Quarterly',   status: 'Paid', dueDate: '2026-07-15' },
  { id: 'RCP030', memberId: 'GYM017', memberName: 'Nikhil Bose',    date: '2026-05-10', amount: 3500,  method: 'UPI',  reference: 'UPI030', plan: 'Quarterly',   status: 'Paid', dueDate: '2026-08-10' },
];

/* ============================================================
   MOCK INQUIRIES (10 records)
   ============================================================ */
const MOCK_INQUIRIES = [
  {
    id: 'INQ001', name: 'Demo Visitor 1', phone: '9000000001', email: 'visitor1@demo.com',
    plan: 'Monthly', message: 'I am interested in a monthly membership. What are the timings?',
    date: '2026-08-14', status: 'New', notes: ''
  },
  {
    id: 'INQ002', name: 'Demo Visitor 2', phone: '9000000002', email: 'visitor2@demo.com',
    plan: 'Annual', message: 'Please share annual membership details and pricing.',
    date: '2026-08-13', status: 'Contacted', notes: 'Called on 13 Aug. Interested. Will visit.'
  },
  {
    id: 'INQ003', name: 'Demo Visitor 3', phone: '9000000003', email: 'visitor3@demo.com',
    plan: 'Quarterly', message: 'Do you offer personal training sessions?',
    date: '2026-08-12', status: 'Converted', notes: 'Joined as GYM031 — Quarterly plan'
  },
  {
    id: 'INQ004', name: 'Demo Visitor 4', phone: '9000000004', email: 'visitor4@demo.com',
    plan: 'Half-Yearly', message: 'What facilities are available? Is parking available?',
    date: '2026-08-10', status: 'New', notes: ''
  },
  {
    id: 'INQ005', name: 'Demo Visitor 5', phone: '9000000005', email: 'visitor5@demo.com',
    plan: 'Monthly', message: 'Looking for a gym near Kosamba. Are there women-only timings?',
    date: '2026-08-09', status: 'Contacted', notes: 'Replied via WhatsApp.'
  },
  {
    id: 'INQ006', name: 'Demo Visitor 6', phone: '9000000006', email: '',
    plan: 'Annual', message: 'Want to know about annual membership fees.',
    date: '2026-08-08', status: 'Closed', notes: 'Did not respond after follow-up.'
  },
  {
    id: 'INQ007', name: 'Demo Visitor 7', phone: '9000000007', email: 'visitor7@demo.com',
    plan: 'Quarterly', message: 'Is personal trainer included?',
    date: '2026-08-07', status: 'New', notes: ''
  },
  {
    id: 'INQ008', name: 'Demo Visitor 8', phone: '9000000008', email: 'visitor8@demo.com',
    plan: 'Monthly', message: 'I want to join for 1 month to try. What is the process?',
    date: '2026-08-06', status: 'Converted', notes: 'Joined as trial member.'
  },
  {
    id: 'INQ009', name: 'Demo Visitor 9', phone: '9000000009', email: 'visitor9@demo.com',
    plan: 'Half-Yearly', message: 'Do you have diet counselling?',
    date: '2026-08-05', status: 'Contacted', notes: 'Shared details. Considering.'
  },
  {
    id: 'INQ010', name: 'Demo Visitor 10', phone: '9000000010', email: '',
    plan: 'Annual', message: 'Best gym in Kosamba. I want annual membership.',
    date: '2026-08-03', status: 'New', notes: ''
  },
];

/* ============================================================
   HELPER FUNCTIONS
   ============================================================ */

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function formatCurrency(amount) {
  if (amount === null || amount === undefined) return '—';
  return '₹' + Number(amount).toLocaleString('en-IN');
}

function getDaysUntilExpiry(dateStr) {
  if (!dateStr) return null;
  const today = new Date('2026-08-15');
  const expiry = new Date(dateStr);
  const diff = Math.ceil((expiry - today) / (1000 * 60 * 60 * 24));
  return diff;
}

function getAttendanceStats(memberId) {
  const records = MOCK_ATTENDANCE.filter(r => r.memberId === memberId);
  const present = records.filter(r => r.status === 'Present').length;
  const total = 30; // observation period
  return {
    total,
    present,
    absent: total - present,
    percentage: Math.round((present / total) * 100),
  };
}

function getTodayAttendance() {
  const today = '2026-08-15';
  return MOCK_ATTENDANCE.filter(r => r.date === today);
}

function getIrregularMembers() {
  return MOCK_MEMBERS.filter(m => {
    const stats = getAttendanceStats(m.id);
    return stats.percentage < DEMO_CONFIG.irregularThreshold && stats.total >= DEMO_CONFIG.minObservationDays;
  }).map(m => ({ ...m, ...getAttendanceStats(m.id) }));
}

function getExpiringMembers(days = 30) {
  return MOCK_MEMBERS.filter(m => {
    const d = getDaysUntilExpiry(m.expiryDate);
    return d !== null && d >= 0 && d <= days;
  }).sort((a, b) => getDaysUntilExpiry(a.expiryDate) - getDaysUntilExpiry(b.expiryDate));
}

function getPendingFees() {
  return getPayments().filter(p => p.status === 'Pending' || p.status === 'Overdue');
}

function getDashboardStats() {
  const members = getMembers();
  const payments = getPayments();
  const attendance = getAttendance();
  const total = members.length;
  const active = members.filter(m => m.status === 'Active').length;
  const todayAtt = attendance.filter(r => r.date === '2026-08-15').length;
  const pending = payments.filter(p => p.status === 'Pending' || p.status === 'Overdue');
  const pendingAmount = pending.reduce((s, p) => s + p.amount, 0);
  const collected = payments.filter(p => p.status === 'Paid').reduce((s, p) => s + p.amount, 0);
  const expiring7 = members.filter(m => {
    const d = getDaysUntilExpiry(m.expiryDate);
    return d !== null && d >= 0 && d <= 7;
  }).length;
  const irregular = members.filter(m => m.status === 'Irregular').length;
  return { total, active, todayAtt, pendingAmount, collected, expiring7, irregular };
}

function generateReceiptId() {
  const num = String(getPayments().length + Math.floor(Math.random() * 100) + 1).padStart(3, '0');
  return `RCP${num}`;
}

function getInitials(name) {
  return (name || 'Member').split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function getMemberById(id) {
  return getMembers().find(m => m.id === id);
}

function getPaymentsByMember(memberId) {
  return getPayments().filter(p => p.memberId === memberId);
}

// Monthly data for charts
function getMonthlyAttendanceData() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  const values = [180, 210, 195, 230, 245, 260, 275, 290];
  return { months, values };
}

function getWeeklyAttendanceData() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const values = [42, 38, 45, 40, 48, 55, 30];
  return { days, values };
}

function getRevenueData() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  const collected = [18000, 22000, 19500, 25000, 21000, 28000, 24000, 15000];
  const pending   = [5000,  3000,  4500,  2000,  6000,  3000,  5000,  8000];
  return { months, collected, pending };
}

/* ============================================================
   LOCAL STORAGE INTEGRATION WITH SAFE RECOVERY
   ============================================================ */
const LS_KEYS = {
  members:    'gym_members',
  attendance: 'gym_attendance',
  payments:   'gym_payments',
  inquiries:  'gym_inquiries',
  settings:   'gym_settings',
  auth:       'gym_auth',
};

function initLocalStorage() {
  if (!localStorage.getItem(LS_KEYS.members)) {
    localStorage.setItem(LS_KEYS.members, JSON.stringify(MOCK_MEMBERS));
  }
  if (!localStorage.getItem(LS_KEYS.attendance)) {
    localStorage.setItem(LS_KEYS.attendance, JSON.stringify(MOCK_ATTENDANCE));
  }
  if (!localStorage.getItem(LS_KEYS.payments)) {
    localStorage.setItem(LS_KEYS.payments, JSON.stringify(MOCK_PAYMENTS));
  }
  if (!localStorage.getItem(LS_KEYS.inquiries)) {
    localStorage.setItem(LS_KEYS.inquiries, JSON.stringify(MOCK_INQUIRIES));
  }
}

function safeGetLS(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : fallback;
  } catch (err) {
    console.warn(`[LocalStorage] Recovery triggered for key "${key}":`, err);
    return fallback;
  }
}

function getMembers()    { return safeGetLS(LS_KEYS.members, MOCK_MEMBERS); }
function getAttendance() { return safeGetLS(LS_KEYS.attendance, MOCK_ATTENDANCE); }
function getPayments()   { return safeGetLS(LS_KEYS.payments, MOCK_PAYMENTS); }
function getInquiries()  { return safeGetLS(LS_KEYS.inquiries, MOCK_INQUIRIES); }

function saveMembers(data)    { localStorage.setItem(LS_KEYS.members,    JSON.stringify(data)); }
function saveAttendance(data) { localStorage.setItem(LS_KEYS.attendance, JSON.stringify(data)); }
function savePayments(data)   { localStorage.setItem(LS_KEYS.payments,   JSON.stringify(data)); }
function saveInquiries(data)  { localStorage.setItem(LS_KEYS.inquiries,  JSON.stringify(data)); }

function resetDemoData() {
  localStorage.setItem(LS_KEYS.members,    JSON.stringify(MOCK_MEMBERS));
  localStorage.setItem(LS_KEYS.attendance, JSON.stringify(MOCK_ATTENDANCE));
  localStorage.setItem(LS_KEYS.payments,   JSON.stringify(MOCK_PAYMENTS));
  localStorage.setItem(LS_KEYS.inquiries,  JSON.stringify(MOCK_INQUIRIES));
}

/* ============================================================
   DEMO AUTH
   Phase 1: Frontend-only, NOT production-secure.
   Phase 2: Replace with secure backend authentication.
   ============================================================ */
const DEMO_AUTH = {
  username: 'admin',
  password: 'demo123',
};

function isAuthenticated() {
  return sessionStorage.getItem('gym_admin_auth') === 'true';
}

function loginDemo(username, password) {
  if (username === DEMO_AUTH.username && password === DEMO_AUTH.password) {
    sessionStorage.setItem('gym_admin_auth', 'true');
    return true;
  }
  return false;
}

function logout() {
  sessionStorage.removeItem('gym_admin_auth');
  window.location.href = '../admin/login.html';
}

// Auto-initialize on load
if (typeof window !== 'undefined') {
  initLocalStorage();
}
