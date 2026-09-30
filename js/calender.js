// ===================
//File: js/calender.js
// Dynamic Booking Calender
// ===================
// ----- DOM Elements -----
const calenderGrid = document.getElementById("calenderGrid");
const calenderMonthLabel = document.getElementById("calenderMonthLabel");
const prevMonthBtn = document.getElementById("prevMonthBtn");
const nextMonthBtn = document.getElementById("nextMonthBtn");
const selectedDateText = document.getElementById("selectedDateText");
const timeSlots = document.getElementById("timeSlots");
const bookingForm = document.getElementById("bookingForm");
const customerName = document.getElementById("customerName");
const customerService = document.getElementById("customerService");
const selectedTimeInput = document.getElementById("selectedTimeInput");
const bookingMessage = document.getElementById("bookingMessage");
// ----- Calender State -----
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectedDate = null;
let selectedTime = "";
// ----- Time Slot Data -----
const weekdaySlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];
const saturdaySlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
];
// Example booked date for practice
const bookerAppointments = {
    "2026-03-28": ["10:00AM", "2:00 PM"],
    "2026-03-29": [],
};
// ----- Helpers -----
const getMonthName = (monthIndex) => {
    const monthNames = [
        "January",
        "February", 
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    return monthNames[monthIndex];
};
const formatDateKey = (year, month, day) => {
    const safeMonth = String(month + 1).padStart(2, "0");
    const safeDay = String(day).padStart(2, "0");
    return `${year}-${safeMonth}-${safeDay}`;
};
const formatReadableDate = (year, month, day) => {
    const date = new Date (year, month, day);
    return date.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numberic",
    });
};
const isPastDate = (year, month, day) => {
    const compareDate = new Date(year, month, day);
        compareDate.setHours(0, 0, 0, 0);
        const todayOnly = new Date ();
        todayOnly.setHours(0, 0, 0, 0);
        return compareDate < todayOnly;
    };
    const isClosedDay = (year, month, day) => {
        const date = new Date(year, month, day);
        const weekday = date.getDay();
        // Sunday closed
        if (weekday === 0) {
            return true;
        }
        return false;
    };
    const getSlotsForDate = (year, month, day) => {
        const date = new Date(year, month, day);
        const weekday = date.getDay();
        if (weekday === 6) {
            return saturdaySlots;
        }
        if (weekday === 0) {
            return [];
        }
        return weekdaySlots;
    };
    // ----- Render Calender -----
    const renderCalender = () => {
      if (!calenderGrid || !calenderMonthLabel) return;
      // if the calender is not available, don't run
      // if the monthLable is not available, don't run
      calenderMonthLabel.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
      calenderGrid.innerHTML = "";
      const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
      const daysInMonth = new Date(currentYear, currentMonth +1, 0).getDate();
      for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.className = "calender-empty";
        calenderGrid.appendChild(emptyCell);
      }
      for (let day = 1; day <= daysInMonth; day++) {
        const dayButton = document.createElement("button");
        dayButton.textContent = day;
        dayButton.className = "calender-day";
        const dateKey = formatDateKey(currentYear, currentMonth, day);
        if (
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear()
        ) {
            dayButton.classList.add("today");
        }
        if (
            isPastDate(currentYear, currentMonth, day) ||
            isClosedDay(currentYear, currentMonth, day)
        ) {
            dayButton.classList.add("disabled");
        }
        if (
            selectedDate &&
            selectedDate.year === currentYear &&
            selectedDate.month === currentMonth &&
            selectedDate.day === day
        ) {
            dayButton.classList.add("selected");
        }
        dayButton.addEventListener("click", () => {
            if (isPastDate(currentYear, currentMonth, day)) return;
            if (isClosedDay(currentYear, currentMonth, day)) return;
            selectedDate = {
                year: currentMonth,
                month: currentMonth,
                day: day,
                key: dateKey,
            };
            selectedTime = "";
            selectedDateText.textContent = formatReadableDate(
                currentYear,
                currentMonth,
                day,
            );
            renderCalender();
            renderTimeSlots();
            bookingMessage.textContent = "";
            bookingMessage.className = "booking-message";
        });
        calenderGrid.appendChild(dayButton);
      }
    };
    // ----- Render Time Slots -----
    const renderTimeSlots = () => {
        if (!timeSlots) return;
        timeSlots.innerHTML = "";
        if (!selectedDate) {
            timeSlots.innerHTML = `<p class="selected-date-text">Choose a date first.</p>`;
            return;
        }
        const slots = getSlotsForDate(
            selectedDate.year,
            selectedDate.month,
            selectedDate.day,
        );
        const bookedForDay = bookedAppointments[selectedDate.key] || [];
        if (slots.length === 0) {
            timeSlots.innerHTML = `<p class="selected-date-text">No appointments available for
            this date.</p>`;
            return;
        }
    }