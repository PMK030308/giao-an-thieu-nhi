function showLesson(lesson) {
  const lessonText = document.getElementById("lessonText");

  const lessons = {
    lesson1: `
      <h3>Bài 1: Thiên Chúa là Cha yêu thương</h3>
      <p><b>Mục tiêu:</b> Các em biết Thiên Chúa yêu thương và chăm sóc mọi người.</p>
      <p><b>Kể chuyện:</b> Dụ ngôn người cha nhân hậu.</p>
      <p><b>Hoạt động:</b> Vẽ tranh gia đình và chia sẻ cảm nghĩ.</p>
    `,
    lesson2: `
      <h3>Bài 2: Cầu nguyện với Chúa</h3>
      <p><b>Mục tiêu:</b> Các em học cách cầu nguyện đơn sơ với Chúa Giêsu.</p>
      <p><b>Kinh Thánh:</b> Lời Chúa dạy kinh Lạy Cha.</p>
      <p><b>Hoạt động:</b> Các em cùng đọc một lời nguyện ngắn.</p>
    `,
    lesson3: `
      <h3>Bài 3: Yêu thương bạn bè</h3>
      <p><b>Mục tiêu:</b> Các em biết quan tâm và giúp đỡ bạn bè.</p>
      <p><b>Kinh Thánh:</b> Người Samari nhân hậu.</p>
      <p><b>Hoạt động:</b> Đóng vai tình huống giúp bạn.</p>
    `,
    lesson4: `
      <h3>Bài 4: Vâng lời cha mẹ</h3>
      <p><b>Mục tiêu:</b> Các em hiểu tầm quan trọng của việc hiếu thảo với cha mẹ.</p>
      <p><b>Kinh Thánh:</b> Đức Giêsu sống vâng phục cha mẹ tại Nazareth.</p>
      <p><b>Hoạt động:</b> Viết 1 việc tốt cụ thể sẽ làm cho cha mẹ trong tuần này.</p>
    `
  };

  lessonText.innerHTML = lessons[lesson] || "👉 Chọn bài học để xem nội dung.";
}
