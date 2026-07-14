import { User, Mail, Phone, MapPin, GraduationCap } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Alert Banners */}
      <div className="space-y-4">
        {/* Banner 1 */}
        <div className="bg-[#FDF2F2] border-l-[6px] border-[#C2387D] py-4 px-6 flex items-center cursor-pointer hover:bg-[#FCE8E8] transition-colors">
          <span className="text-[#C2387D] font-sans text-[15px] font-medium">
            Click here to submit Open Elective Choice (Semester V)
          </span>
        </div>

        {/* Banner 2 */}
        <div className="bg-[#FDF2F2] border-l-[6px] border-[#C2387D] py-4 px-6 flex flex-col justify-center cursor-pointer hover:bg-[#FCE8E8] transition-colors">
          <span className="text-[#C2387D] font-sans text-[15px] font-medium">
            Your ABC ID / APAAR ID is 020187914249.
          </span>
          <span className="text-slate-500 font-sans text-xs mt-1">
            To edit the ID click here.
          </span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Column: Due Fees */}
        <div className="lg:col-span-2 bg-white rounded shadow-sm border border-slate-100 overflow-hidden">
          {/* Header */}
          <div className="py-4 px-5 border-b border-slate-100">
            <h2 className="text-[#475569] text-base font-semibold">Due Fees</h2>
          </div>

          {/* Body */}
          <div className="p-5 space-y-6">
            {/* Fee Item 1 */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-slate-600 text-[14px] font-medium">
                  Conveyance Fee (₹36500)
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  Last Date: 2026-07-30
                </p>
              </div>
              <button className="bg-[#00a896] hover:bg-[#009685] text-white font-medium text-[13px] py-1.5 px-4 rounded transition-colors shadow-sm shrink-0">
                Pay ₹ 36500
              </button>
            </div>

            {/* Fee Item 2 */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-slate-600 text-[14px] font-medium">
                  Campus Recruitment Training Fee (₹3150)
                </p>
                <p className="text-slate-400 text-xs mt-1">
                  Last Date: 2026-12-15
                </p>
              </div>
              <span className="text-slate-500 font-medium text-[13px] py-1.5 px-2 shrink-0">
                Pay ₹ 3150
              </span>
            </div>

            {/* Divider */}
            <hr className="border-slate-150" />

            {/* Queries Centered Section */}
            <div className="text-center space-y-4 pt-1">
              <div className="text-[13px] text-slate-500">
                <p>For queries, contact:</p>
                <p className="font-medium text-slate-600 mt-0.5">Accounts : +91-141-3500309</p>
              </div>

              {/* Transaction Charges details */}
              <div className="text-[11px] text-slate-400 leading-relaxed max-w-md mx-auto space-y-0.5">
                <p className="font-medium text-slate-500 mb-1">
                  Transaction Charges may be applicable as follows:
                </p>
                <p>Credit Cards - 1.2% of Fee + GST 18%</p>
                <p>Debit Cards - ZERO</p>
                <p>UPI - ZERO</p>
                <p>NetBanking - Rs. 9 + GST 18%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Student Profile Card */}
        <div className="bg-white rounded shadow-sm border border-slate-100 overflow-hidden">
          {/* Card Header (Magenta Background) */}
          <div className="bg-[#C2387D] py-6 px-4 flex flex-col items-center justify-center">
            {/* Circular Avatar */}
            <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-white shadow-md">
              <img
                src="/student_profile.png"
                alt="Student Profile"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=60";
                }}
              />
            </div>
            {/* Student Name */}
            <h3 className="text-white text-[16px] font-semibold italic mt-3 tracking-wide">
              Raghav Khandelwal
            </h3>
          </div>

          {/* Card Body (Details list) */}
          <div className="divide-y divide-slate-100">
            {/* Username */}
            <div className="grid grid-cols-[20px_80px_1fr] items-center gap-3 py-3 px-5 text-[13px]">
              <User size={15} className="text-[#C2387D] shrink-0" />
              <span className="text-slate-500 font-medium">Username</span>
              <span className="text-slate-700 truncate">B241166</span>
            </div>

            {/* Branch */}
            <div className="grid grid-cols-[20px_80px_1fr] items-start gap-3 py-3 px-5 text-[13px]">
              <GraduationCap size={15} className="text-[#C2387D] shrink-0 mt-0.5" />
              <span className="text-slate-500 font-medium mt-0.5">Branch</span>
              <span className="text-slate-700 leading-tight">
                Computer Science and Engineering
              </span>
            </div>

            {/* Email */}
            <div className="grid grid-cols-[20px_80px_1fr] items-center gap-3 py-3 px-5 text-[13px]">
              <Mail size={15} className="text-[#C2387D] shrink-0" />
              <span className="text-slate-500 font-medium">Email</span>
              <span className="text-slate-700 truncate" title="raghavkhandelwal97@gmail.com">
                raghavkhandelwal97@gmail.com
              </span>
            </div>

            {/* Phone */}
            <div className="grid grid-cols-[20px_80px_1fr] items-center gap-3 py-3 px-5 text-[13px]">
              <Phone size={15} className="text-[#C2387D] shrink-0" />
              <span className="text-slate-500 font-medium">Phone</span>
              <span className="text-slate-700">7877406450</span>
            </div>

            {/* Address */}
            <div className="grid grid-cols-[20px_80px_1fr] items-start gap-3 py-3.5 px-5 text-[13px]">
              <MapPin size={15} className="text-[#C2387D] shrink-0 mt-0.5" />
              <span className="text-slate-500 font-medium mt-0.5">Address</span>
              <span className="text-slate-700 leading-snug break-words">
                B-5, Jai Hanuman Vatika Bas, Badanpur, Jaipur - 302002
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
