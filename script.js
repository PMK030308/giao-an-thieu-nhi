// Danh sách 41 bài học
// Danh sách 21 bài học đầu tiên (ngắn gọn, dễ hiểu cho thiếu nhi)
const lessons = [
  {
    title: "Bài 1: Thiên Chúa sáng tạo và quan phòng",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Hãy xem chim trời: chúng không gieo, không gặt… thế mà Cha anh em trên trời vẫn nuôi chúng” (Mt 6,26).</p>
      <h4>Giáo huấn</h4>
      <ul>
        <li>Thiên Chúa dựng nên trời đất và muôn loài.</li>
        <li>Người yêu thương, chăm sóc và dẫn dắt mọi sự.</li>
        <li>Đó gọi là sự quan phòng của Thiên Chúa.</li>
      </ul>
      <h4>Sống Lời Chúa</h4>
      <ul>
        <li>Luôn tin tưởng và phó thác cho Chúa.</li>
        <li>Cầu nguyện để cảm tạ Chúa mỗi ngày.</li>
        <li>Bảo vệ thiên nhiên, không xả rác bừa bãi.</li>
      </ul>
    `
  },
  {
    title: "Bài 2: Thiên Chúa tạo dựng con người",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Thiên Chúa sáng tạo con người theo hình ảnh mình” (St 1,27).</p>
      <h4>Giáo huấn</h4>
      <ul>
        <li>Con người được tạo dựng giống hình ảnh Chúa.</li>
        <li>Ban đầu được hạnh phúc, không đau khổ, không chết.</li>
        <li>Tổ tông phạm tội, nên mất ơn nghĩa với Chúa.</li>
      </ul>
      <h4>Sống Lời Chúa</h4>
      <ul>
        <li>Biết ơn Chúa vì sự sống cao quý.</li>
        <li>Tôn trọng bản thân và mọi người.</li>
        <li>Sống yêu thương, làm điều tốt mỗi ngày.</li>
      </ul>
    `
  },
  {
    title: "Bài 3: Sa ngã",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Bà liền hái trái cây mà ăn, rồi đưa cho cả chồng… ông cũng ăn” (St 3,6).</p>
      <h4>Giáo huấn</h4>
      <ul>
        <li>Một số thiên thần và tổ tông loài người đã chống lại Thiên Chúa.</li>
        <li>Tội tổ tông làm con người đau khổ và phải chết.</li>
        <li>Chúa hứa ban Đấng Cứu Thế để cứu chuộc nhân loại.</li>
      </ul>
      <h4>Sống Lời Chúa</h4>
      <ul>
        <li>Tránh xa tội lỗi và cám dỗ.</li>
        <li>Ăn năn và xin lỗi Chúa khi phạm tội.</li>
        <li>Luôn tin rằng Chúa thương và cứu giúp con.</li>
      </ul>
    `
  },
  {
    title: "Bài 4: Con Thiên Chúa làm người",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Ngôi Lời đã trở nên người phàm và cư ngụ giữa chúng ta” (Ga 1,14).</p>
      <h4>Giáo huấn</h4>
      <ul>
        <li>Ngôi Hai Thiên Chúa đã xuống thế làm người.</li>
        <li>Đức Giêsu vừa là Thiên Chúa thật, vừa là người thật.</li>
        <li>Người đến để cứu độ nhân loại.</li>
      </ul>
      <h4>Sống Lời Chúa</h4>
      <ul>
        <li>Yêu mến Chúa Giêsu và học theo gương sống của Ngài.</li>
        <li>Siêng năng tham dự Thánh lễ.</li>
        <li>Sống khiêm nhường và chia sẻ với người khác.</li>
      </ul>
    `
  },
  {
    title: "Bài 5: Cuộc sống trần thế của Chúa Giêsu",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Chúa Giêsu đi khắp nơi, rao giảng Tin Mừng Nước Thiên Chúa” (Mc 1,14-15).</p>
      <h4>Giáo huấn</h4>
      <ul>
        <li>Chúa Giêsu sinh ra tại Bêlem, sống khiêm nhường trong gia đình Nagiarét.</li>
        <li>Người rao giảng Tin Mừng, làm nhiều phép lạ và kêu gọi mọi người tin theo.</li>
        <li>Chúa yêu thương đặc biệt người nghèo khổ và bệnh tật.</li>
      </ul>
      <h4>Sống Lời Chúa</h4>
      <ul>
        <li>Bắt chước sự hiền lành của Chúa Giêsu.</li>
        <li>Quan tâm giúp đỡ người nghèo.</li>
        <li>Siêng năng học giáo lý để hiểu Chúa hơn.</li>
      </ul>
    `
  },
  {
  title: "Bài 6: Cuộc khổ nạn của Chúa Giê-su",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Con Người sắp bị nộp vào tay người đời, họ sẽ giết chết Người, và ngày thứ ba Người sẽ chỗi dậy” (Mt 17,22).</p>
    <h4>Giáo huấn</h4>
    <ul>
      <li>Chúa Giê-su tự nguyện lên Giê-ru-sa-lem để chịu chết vì yêu thương ta.</li>
      <li>Cái chết của Người là hy lễ đền tội cho nhân loại.</li>
      <li>Không chỉ người Do Thái xưa, mà chính tội lỗi của chúng ta cũng làm Chúa phải chịu khổ nạn.</li>
    </ul>
    <h4>Sống Lời Chúa</h4>
    <ul>
      <li>Biết ơn Chúa Giê-su đã hy sinh vì mình.</li>
      <li>Ăn năn sám hối mỗi khi phạm tội.</li>
      <li>Sống hi sinh và yêu thương người khác.</li>
    </ul>
  `
},
{
  title: "Bài 7: Chúa Giê-su sống lại và lên trời",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Chúa chỗi dậy thật rồi, và đã hiện ra với ông Si-mon” (Lc 24,34).</p>
    <h4>Giáo huấn</h4>
    <ul>
      <li>Ngày thứ ba, Chúa Giê-su đã sống lại thật.</li>
      <li>Người nhiều lần hiện ra, ăn uống và dạy dỗ các môn đệ.</li>
      <li>40 ngày sau, Chúa lên trời ngự bên hữu Chúa Cha.</li>
    </ul>
    <h4>Sống Lời Chúa</h4>
    <ul>
      <li>Luôn vui tươi, lạc quan, vì tin Chúa đã thắng sự chết.</li>
      <li>Can đảm theo Chúa, dù có gặp khó khăn.</li>
      <li>Hy vọng được sống lại với Chúa trong vinh quang.</li>
    </ul>
  `
},
{
  title: "Bài 8: Chúa Giê-su sẽ đến phán xét",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Con Người sẽ ngự đến trong vinh quang... và bấy giờ Người sẽ thưởng phạt ai nấy xứng việc họ làm” (Mt 16,27).</p>
    <h4>Giáo huấn</h4>
    <ul>
      <li>Chúa Giê-su sẽ trở lại trong vinh quang để phán xét kẻ sống và kẻ chết.</li>
      <li>Mọi việc làm và ý nghĩ của ta sẽ được phơi bày trước mặt Chúa.</li>
      <li>Ai sống công chính sẽ được thưởng, ai gian ác sẽ bị phạt.</li>
    </ul>
    <h4>Sống Lời Chúa</h4>
    <ul>
      <li>Luôn tỉnh thức, sống tốt mỗi ngày.</li>
      <li>Làm việc lành, tránh điều dữ.</li>
      <li>Chờ Chúa đến với niềm tin yêu, hy vọng.</li>
    </ul>
  `
},
{
  title: "Bài 9: Chúa Thánh Thần",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Tôi đã thấy Thần Khí tựa chim bồ câu từ trời xuống và ngự trên Người” (Ga 1,32).</p>
    <h4>Giáo huấn</h4>
    <ul>
      <li>Chúa Thánh Thần là Ngôi Ba Thiên Chúa.</li>
      <li>Người được ban cho Hội Thánh từ ngày lễ Ngũ Tuần.</li>
      <li>Người xây dựng, thánh hóa và hướng dẫn Hội Thánh.</li>
      <li>Chúa Thánh Thần ban cho ta bảy ơn: khôn ngoan, hiểu biết, thông minh, biết lo liệu, sức mạnh, đạo đức, kính sợ Chúa.</li>
    </ul>
    <h4>Sống Lời Chúa</h4>
    <ul>
      <li>Cầu xin Chúa Thánh Thần soi sáng mỗi ngày.</li>
      <li>Vâng nghe và làm theo tiếng lương tâm ngay lành.</li>
      <li>Tôn trọng thân xác mình vì là đền thờ Chúa Thánh Thần.</li>
    </ul>
  `
},
{
  title: "Bài 10: Thiên Chúa Ba Ngôi",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Có tiếng từ trời phán rằng: Con là Con yêu dấu của Cha, Cha hài lòng về Con” (Mc 1,11).</p>
    <h4>Giáo huấn</h4>
    <ul>
      <li>Chỉ có một Thiên Chúa duy nhất, ta phải thờ phượng một mình Người.</li>
      <li>Trong một Thiên Chúa có Ba Ngôi: Cha, Con, và Thánh Thần.</li>
      <li>Cả Ba Ngôi đều bằng nhau, cùng một bản thể và quyền năng.</li>
    </ul>
    <h4>Sống Lời Chúa</h4>
    <ul>
      <li>Siêng năng làm dấu Thánh Giá với lòng tin.</li>
      <li>Tôn thờ và kính mến Ba Ngôi Thiên Chúa.</li>
      <li>Sống yêu thương, hiệp nhất như tình yêu của Ba Ngôi.</li>
    </ul>
  `
},
{
  title: "Bài 11: Hội Thánh trong chương trình cứu độ của thiên chúa",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Thầy là cây nho, anh em là cành. Ai ở lại trong Thầy thì sinh nhiều hoa trái” (Ga 15,5).</p>
    <h4>Giáo huấn</h4>
    <ul>
      <li>Hội Thánh là cộng đoàn Dân Chúa, là Thân Thể Chúa Ki-tô.</li>
      <li>Hội Thánh là dấu chỉ và khí cụ hiệp thông với Thiên Chúa và hiệp nhất nhân loại.</li>
      <li>Chúa Thánh Thần là linh hồn của Hội Thánh, luôn thánh hóa và hướng dẫn Hội Thánh.</li>
    </ul>
    <h4>Sống Lời Chúa</h4>
    <ul>
      <li>Yêu mến và gắn bó với Hội Thánh.</li>
      <li>Tham gia các sinh hoạt giáo xứ, đoàn thể.</li>
      <li>Cộng tác xây dựng Hội Thánh bằng lời cầu nguyện và việc làm.</li>
    </ul>
  `
},

  {
    title: "Bài 12: ĐẶC TÍNH CỦA HỘI THÁNH",
    content: `
<b>Lời Chúa:</b> “Anh là Phê-rô, nghĩa là Tảng Đá, trên tảng đá này, Thầy sẽ xây Hội Thánh của Thầy” (Mt 16,18)

<b>Giáo huấn:</b> 
- Hội Thánh có 4 đặc tính: Duy Nhất, Thánh Thiện, Công Giáo và Tông Truyền.  
- Duy Nhất: chỉ có một Hội Thánh, một Chúa, một Đức Tin, một Phép Rửa.  
- Thánh Thiện: bắt nguồn từ Thiên Chúa, được Chúa Kitô và Thánh Thần thánh hoá.  
- Công Giáo: mang đầy đủ chân lý và phương tiện cứu độ, được sai đến với mọi dân tộc.  
- Tông Truyền: xây trên nền tảng các Tông đồ, tiếp tục nhờ Giám mục kế vị.

<b>Sống Lời Chúa:</b> Yêu mến Hội Thánh, vâng phục các mục tử và góp phần xây dựng cộng đoàn.
    `
  },
  {
    title: "Bài 13: TỔ CHỨC HỘI THÁNH",
    content: `
<b>Lời Chúa:</b> “Hãy chăm sóc chiên của Thầy” (Ga 21,17)

<b>Giáo huấn:</b> 
- Thành phần: Giáo sĩ, Tu sĩ, Giáo dân.  
- Đức Giáo Hoàng: kế vị Thánh Phêrô, chủ chăn Hội Thánh toàn cầu.  
- Giám mục: kế vị các Tông đồ, coi sóc Giáo phận.  
- Linh mục: cộng tác với Giám mục trong việc mục vụ.  
- Phó tế: phục vụ trong Hội Thánh.  
- Tu sĩ: khấn sống khó nghèo, khiết tịnh, vâng phục.  
- Giáo dân: tìm kiếm Nước Chúa trong đời sống hằng ngày.

<b>Sống Lời Chúa:</b> Cầu nguyện cho Đức Giáo Hoàng, Giám mục, Linh mục và sống đúng vai trò của mình trong Hội Thánh.
    `
  },
  {
    title: "Bài 14: HIỆP THÔNG GIỮA CÁC THÁNH",
    content: `
<b>Lời Chúa:</b> “Chúng ta sẽ lớn lên về mọi phương diện, vươn tới Đức Kitô” (Ep 4,15-16)

<b>Giáo huấn:</b> 
- Các tín hữu hợp thành một Thân Thể với Đức Kitô là Đầu.  
- Hiệp thông giữa: người còn sống, linh hồn trong luyện ngục và các Thánh trên trời.  
- Chia sẻ: đức tin, đức ái, kinh nguyện, các bí tích và của cải.  
- Các Thánh trên trời cầu bầu cho ta, ta cầu nguyện cho các linh hồn.

<b>Sống Lời Chúa:</b> Biết sống yêu thương, cầu nguyện cho nhau, xin các Thánh phù giúp và nhớ cầu cho các linh hồn.
    `
  },
  {
    title: "Bài 15: ĐỨC MARIA – MẸ CHÚA GIÊSU VÀ MẸ HỘI THÁNH",
    content: `
<b>Lời Chúa:</b> “Mừng vui lên, hỡi Đấng đầy ân sủng” (Lc 1,28)

<b>Giáo huấn:</b> 
- Đặc ân của Mẹ Maria: Vô nhiễm Nguyên tội, Mẹ Thiên Chúa, Đồng Trinh trọn đời, Hồn Xác lên trời.  
- Mẹ cộng tác đặc biệt trong công trình cứu độ nhờ vâng phục, tin, cậy, mến.  
- Mẹ là gương mẫu và là Mẹ của Hội Thánh.

<b>Sống Lời Chúa:</b> Tôn kính, yêu mến Đức Mẹ, bắt chước các nhân đức của Mẹ trong đời sống.
    `
  },
  {
    title: "Bài 16: ƠN PHỤC SINH VÀ ĐỜI SỐNG VĨNH CỬU",
    content: `
<b>Lời Chúa:</b> “Ai làm điều lành thì sẽ sống lại để được sống” (Ga 5,29)

<b>Giáo huấn:</b> 
- Thân xác sẽ sống lại trong ngày tận thế.  
- Chúng ta tin vì Chúa là Đấng hằng sống và đã phục sinh.  
- Chết là kết thúc đời tạm, mở ra đời sống mới.  
- Ngày sau hết sẽ có phán xét chung.

<b>Sống Lời Chúa:</b> Chuẩn bị sống đời sau bằng đời sống thánh thiện, tin tưởng vào sự sống lại.
    `
  },
  {
    title: "Bài 17: TỰ DO CỦA CON NGƯỜI",
    content: `
<b>Lời Chúa:</b> “Ở đâu có Thần Khí Chúa, ở đó có tự do” (2Cr 3,17)

<b>Giáo huấn:</b> 
- Tự do: khả năng chọn lựa và chịu trách nhiệm.  
- Tự do đích thực: dùng để phục vụ điều thiện, hướng về Thiên Chúa.  
- Tự do làm cho hành vi có giá trị luân lý.  
- Con người có thể lạm dụng tự do để phạm tội.

<b>Sống Lời Chúa:</b> Sử dụng tự do để làm điều tốt, tránh xa tội lỗi.
    `
  },
  {
    title: "Bài 18: NHÂN ĐỨC",
    content: `
<b>Lời Chúa:</b> “Ai cho mình đạo đức mà không kiềm chế miệng lưỡi, là tự dối lòng” (Gc 1,26)

<b>Giáo huấn:</b> 
- Nhân đức: thói quen tốt, giúp ta làm điều thiện dễ dàng.  
- Có 2 loại: nhân bản và đối thần.  
- 4 nhân đức nhân bản chính: khôn ngoan, công bằng, dũng cảm, tiết độ.  
- 3 nhân đức đối thần: Tin, Cậy, Mến.

<b>Sống Lời Chúa:</b> Tập luyện các nhân đức mỗi ngày, nhất là Đức Tin, Đức Cậy, Đức Mến.
    `
  },
  {
  title: "Tội Lỗi",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Khốn cho các người, hỡi các kinh sư và người Pha-ri-sêu giả hình! Các người rửa sạch bên ngoài chén đĩa, nhưng bên trong thì đầy những chuyện trộm cắp và vô độ” (Mt 23,25)</p>
    
    <h4>Giáo huấn</h4>
    <ul>
      <li>Tội là lời nói, việc làm hoặc ước muốn nghịch với Luật Chúa, xúc phạm đến Thiên Chúa và làm tổn thương bản thân cũng như tha nhân.</li>
      <li><b>Tội trọng:</b> cố tình phạm những điều quan trọng mà ta nhận biết rõ. Nó phá hủy sự sống và phẩm giá con người, cắt đứt tình nghĩa với Chúa và nếu không hối cải, sẽ phải xa cách Người đời đời.</li>
      <li>Khi lỡ phạm tội trọng, cần thống hối thật lòng, xưng tội và dùng mọi cách để không tái phạm.</li>
      <li><b>Tội nhẹ:</b> lỗi nhẹ hoặc lỗi nặng chưa nhận biết hoặc chưa hoàn toàn chấp thuận. Tội nhẹ làm giảm lòng mến Chúa, dễ hướng về điều xấu và có thể dẫn đến tội trọng.</li>
      <li>Các tội thường phát sinh từ bảy nết xấu, gọi là bảy mối tội đầu: kiêu ngạo, hà tiện, dâm ô, hờn giận, mê ăn uống, ghen ghét, lười biếng.</li>
    </ul>
    
    <h4>Nhớ lấy</h4>
    <ul>
      <li>Luôn nhận biết tội trọng và tội nhẹ trong đời sống của mình.</li>
      <li>Tránh tội, làm điều thiện, và xin Chúa tha thứ khi lỡ phạm tội.</li>
      <li>Cố gắng sửa những nết xấu dẫn đến tội, sống trong sạch từ trong lòng ra ngoài.</li>
    </ul>
  `
},
{
  title: "Ơn Chúa",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Những ai được Thiên Chúa ban ân sủng dồi dào và cho trở nên công chính, thì sẽ được sống và được thống trị” (Rm 5,17)</p>

    <h4>Giáo huấn</h4>
    <ul>
      <li>Chúng ta không thể sống đẹp lòng Chúa chỉ bằng sức mình, cần ơn Chúa giúp.</li>
      <li><b>Ơn Chúa</b> là giúp ta sống xứng đáng là con Chúa và dự phần sự sống của Ba Ngôi.</li>
      <li>Có hai ơn của Chúa: 
        <ul>
          <li>Ơn thánh hóa: giúp ta nên thánh.</li>
          <li>Ơn trợ giúp: giúp vượt khó, tùy hoàn cảnh.</li>
        </ul>
      </li>
      <li>Ơn Chúa thúc giục ta tin vào Chúa Ki-tô và sống đúng đạo sau khi chịu phép Rửa tội.</li>
      <li>Ta phải cộng tác: tỉnh thức, mau mắn đón nhận và cố gắng sống tốt.</li>
    </ul>

    <h4>Nhớ lấy</h4>
    <ul>
      <li>Luôn cần ơn Chúa để sống đẹp lòng Người.</li>
      <li>Chấp nhận và cộng tác với ơn Chúa mỗi ngày.</li>
      <li>Sống xứng đáng là con cái Chúa, tham dự sự sống của Ba Ngôi.</li>
    </ul>
  `
},
// Bài 21
{
  title: "Điều răn 1: Thờ Phượng và Kính Mến Thiên Chúa",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Hãy yêu mến Đức Chúa, Thiên Chúa của anh em, hết lòng hết dạ, hết sức anh em” (Đnl 6,5)</p>

    <h4>Giáo huấn</h4>
    <ul>
      <li>Thờ phượng một mình Thiên Chúa và kính mến Người trên hết mọi sự.</li>
      <li>Tin kính Thiên Chúa hết lòng, không nghi ngờ hay chối bỏ những gì Người mặc khải.</li>
      <li>Phó thác mọi sự trong tay Chúa, mong chờ phúc lành đời này và đời sau.</li>
      <li>Yêu mến Chúa hết lòng, hết sức và mau mắn làm theo ý Người.</li>
    </ul>

    <h4>Nhớ lấy</h4>
    <ul>
      <li>Thờ phượng và kính mến Thiên Chúa trước hết mọi sự.</li>
      <li>Tin, trông cậy và yêu mến Chúa bằng cả lòng.</li>
    </ul>
  `
},

// Bài 22
{
  title: "Điều răn 2: Tôn Kính Danh Thiên Chúa",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Chúc tụng danh thánh Chúa, từ giờ đây cho đến muôn đời! Ca ngợi danh thánh Chúa! Từ rạng đông tới lúc chiều tà” (Tv 112,2-3)</p>

    <h4>Giáo huấn</h4>
    <ul>
      <li>Tôn kính Danh Thiên Chúa vì Danh Người là Thánh.</li>
      <li>Tránh dùng Danh Chúa, Chúa Giêsu, Đức Mẹ và các Thánh cách bất xứng, nói phạm hoặc thề gian.</li>
      <li>Chỉ thề nhân danh Chúa khi thật sự cần và phải giữ lời thề.</li>
    </ul>

    <h4>Nhớ lấy</h4>
    <ul>
      <li>Luôn tôn kính Danh Chúa trong lời nói và việc làm.</li>
      <li>Thận trọng khi thề hứa nhân danh Chúa.</li>
    </ul>
  `
},

// Bài 23
{
  title: "Điều răn 3: Thánh hóa ngày Chúa Nhật",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Vào chiều ngày thứ nhất trong tuần, Đức Giêsu đến, đứng giữa các ông và nói: ‘Bình an cho anh em!’” (Ga 20,19-20)</p>

    <h4>Giáo huấn</h4>
    <ul>
      <li>Thánh hóa ngày Chúa Nhật và các ngày lễ buộc.</li>
      <li>Ngày Chúa Nhật nhắc nhớ việc sáng tạo, hoàn tất ý nghĩa nghỉ lễ và hướng tới sự nghỉ muôn đời nơi Chúa.</li>
      <li>Tham dự thánh lễ đầy đủ, nghỉ việc xác, làm việc lành, bác ái và tông đồ.</li>
    </ul>

    <h4>Nhớ lấy</h4>
    <ul>
      <li>Tham dự thánh lễ Chúa Nhật đầy đủ.</li>
      <li>Thực hành các việc lành để thánh hóa ngày Chúa Nhật.</li>
    </ul>
  `
},

// Bài 24
{
  title: "Điều răn 4: Thảo Kính Cha Mẹ",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Ngươi hãy thờ kính cha mẹ, như Đức Chúa, Thiên Chúa của ngươi đã truyền cho ngươi” (Đnl 5,16)</p>

    <h4>Giáo huấn</h4>
    <ul>
      <li>Tôn kính, biết ơn và vâng lời cha mẹ trong những điều chính đáng.</li>
      <li>Lo cho cha mẹ khi còn sống, cầu nguyện và dâng lễ cho cha mẹ đã qua đời.</li>
      <li>Kính trọng, yêu thương, giúp đỡ và cầu nguyện cho mọi người trong gia tộc.</li>
      <li>Anh chị em trong gia đình biết kính trên nhường dưới, yêu thương lẫn nhau.</li>
    </ul>

    <h4>Nhớ lấy</h4>
    <ul>
      <li>Biết kính trọng và vâng lời cha mẹ.</li>
      <li>Yêu thương và giúp đỡ mọi người trong gia đình và dòng họ.</li>
    </ul>
  `
},

// Bài 25
{
  title: "Điều răn 5: Tôn trọng sự sống",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Phàm ai ghét anh em mình thì là kẻ sát nhân; và anh em biết: không kẻ sát nhân nào có sự sống đời đời ở lại trong nó” (1 Ga 3,15)</p>

    <h4>Giáo huấn</h4>
    <ul>
      <li>Quý trọng sự sống tự nhiên và siêu nhiên của mình và người khác.</li>
      <li>Không sát nhân, làm hại, tự sát hoặc phá hoại sức khỏe.</li>
      <li>Loại bỏ ích kỷ, nóng giận, trả thù; luyện tập dịu hiền, quan tâm người khác, xây dựng hòa bình.</li>
    </ul>

    <h4>Nhớ lấy</h4>
    <ul>
      <li>Tôn trọng sự sống của bản thân và mọi người.</li>
      <li>Học cách yêu thương, tha thứ và sống hòa bình.</li>
    </ul>
  `
},

// Bài 26
{
  title: "Điều răn 6+9: Sống trong sạch",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Đèn của thân thể là con mắt. Vậy nếu mắt anh sáng, toàn thân anh sẽ sáng; còn nếu mắt anh xấu thì toàn thân sẽ tối” (Mt 6,22)</p>

    <h4>Giáo huấn</h4>
    <ul>
      <li>Sống trong sạch tư tưởng, chống lại ham muốn xác thịt.</li>
      <li>Tâm hồn trong sạch giúp nhìn mọi sự theo tinh thần Thiên Chúa và chiêm ngắm Người mai sau.</li>
      <li>Cầu nguyện, lãnh nhận Bí tích, sống đoan trang, làm chủ ngũ quan, đọc Lời Chúa và sách lành mạnh.</li>
      <li>Loại bỏ hình ảnh và tư tưởng dâm ô, cầu xin Chúa và Đức Mẹ giúp vượt cám dỗ.</li>
    </ul>

    <h4>Nhớ lấy</h4>
    <ul>
      <li>Giữ tâm hồn trong sạch và tin tưởng vào ơn Chúa giúp vượt cám dỗ.</li>
    </ul>
  `
},

// Bài 27
{
  title: "Điều răn 7: Giữ sự công bằng",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Ngươi không được trộm cắp” (Xh 20,15)</p>

    <h4>Giáo huấn</h4>
    <ul>
      <li>Tôn trọng của cải người khác và sử dụng trong tinh thần liên đới.</li>
      <li>Tội bất công: trộm cướp, gian lận, cho vay lãi quá đáng, hối lộ, đầu cơ tích trữ.</li>
      <li>Khi đã lỗi, phải hoàn trả và bồi thường.</li>
      <li>Tôn trọng môi sinh, sử dụng đúng thú vật, cây cỏ, vật chất vô tri vì lợi ích chung.</li>
    </ul>

    <h4>Nhớ lấy</h4>
    <ul>
      <li>Sống công bằng, tôn trọng của cải người khác và thiên nhiên.</li>
    </ul>
  `
},

// Bài 28
{
  title: "Điều răn 8: Tôn trọng sự thật",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Một khi đã cởi bỏ sự gian dối, mỗi người trong anh em hãy nói sự thật với người thân cận, vì chúng ta là phần thân thể của nhau” (Ep 4,25)</p>

    <h4>Giáo huấn</h4>
    <ul>
      <li>Sống thành thật, làm chứng cho sự thật, tôn trọng danh dự người khác.</li>
      <li>Sống thành thật vì Thiên Chúa là Chân thật, tăng giá trị con người, cần cho đời sống chung.</li>
      <li>Tội nghịch: làm chứng gian, bội thề, nói xấu, vu khống, nói dối, tâng bốc điều xấu, không làm chứng cho sự thật.</li>
      <li>Làm chứng gian kèm thề là bội thề.</li>
    </ul>

    <h4>Nhớ lấy</h4>
    <ul>
      <li>Luôn sống thành thật và tôn trọng sự thật.</li>
      <li>Tránh nói dối, vu khống và bội thề.</li>
    </ul>
  `
},

// Bài 29
{
  title: "Điều răn 10: Không tham lam của người",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Ngươi không được ham muốn vợ người ta, ngươi không được ước ao nhà của người ta, đồng ruộng, tôi tớ nam nữ, con bò con lừa, hay bất cứ vật gì của người ta” (Đnl 5,21)</p>

    <h4>Giáo huấn</h4>
    <ul>
      <li>Giữ lòng khỏi ham muốn quá đáng, không tham lam của người khác.</li>
      <li>Tham lam làm rối loạn lòng, lệch phán đoán, giảm tình yêu mến và dễ phạm tội.</li>
      <li>Chống ghen tỵ bằng cầu xin phúc lành cho người khác và vui mừng khi họ may mắn.</li>
    </ul>

    <h4>Nhớ lấy</h4>
    <ul>
      <li>Giữ lòng khỏi tham lam và ghen tỵ.</li>
      <li>Biết vui mừng cho may lành của người khác.</li>
    </ul>
  `
},

// Bài 30
{
  title: "Phụng Vụ",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Hằng năm cha mẹ Đức Giêsu trẩy hội đền Giê-ru-sa-lem mừng lễ Vượt Qua” (Lc 2,41)</p>

    <h4>Giáo huấn</h4>
    <ul>
      <li>Phụng vụ là việc tôn thờ chính thức của Hội Thánh để tôn vinh Thiên Chúa và thánh hóa con người.</li>
      <li>Phụng vụ cho tham dự cầu nguyện của Chúa Ki-tô, là nguồn mạch sự sống Hội Thánh, giáo huấn và hoán cải dân Chúa.</li>
      <li>Ngày Chúa nhật là “Ngày của Chúa”, nền tảng trung tâm Năm Phụng vụ.</li>
      <li>Năm Phụng vụ gồm các mùa: Vọng, Giáng sinh, Chay, Phục sinh, Thường niên; giúp sống mầu nhiệm Chúa Ki-tô.</li>
    </ul>

    <h4>Nhớ lấy</h4>
    <ul>
      <li>Tham dự phụng vụ để thờ phượng Chúa và thánh hóa bản thân.</li>
      <li>Ngày Chúa nhật là trung tâm và nền tảng của phụng vụ cả năm.</li>
      <li>Sống các mùa Phụng vụ để hiểu và chuẩn bị đón Chúa Ki-tô trở lại.</li>
    </ul>
  `
},
  // Bài 31
  {
    title: "Bí Tích",
    content: `
      <h4>Lời Chúa</h4>
      <p>Hôm ấy là ngày bế mạc tuần lễ Lều, và là ngày long trọng nhất. Đức Giê-su đứng trong Đền thờ và lớn tiếng nói rằng : “Ai khát, hãy đến với tôi, ai tin vào tôi, hãy đến mà uống” (Ga 7,37-38)</p>

      <h4>Giáo huấn</h4>
      <ul>
        <li>Bí tích là những dấu chỉ hữu hiệu của ân sủng do Chúa Giê-su thiết lập và được trao lại cho Hội Thánh để ban sự sống thần linh cho chúng ta.</li>
        <li>Có bảy Bí tích: Rửa tội, Thêm sức, Thánh Thể, Hòa giải, Xức dầu bệnh nhân, Truyền chức thánh, Hôn phối.</li>
        <li>Bí tích Rửa tội, Thêm sức, Truyền chức thánh chỉ nhận một lần, vì in dấu ấn thiêng liêng không thể xóa được.</li>
        <li>Điều kiện lãnh nhận: đón nhận Lời Chúa, có đức tin, thật lòng ước muốn.</li>
        <li>Các Bí tích cần thiết để được ơn cứu độ, vì chính Chúa Ki-tô hành động nơi các Bí tích, và Chúa Thánh Thần làm cho người lãnh nhận nên giống Con Thiên Chúa.</li>
      </ul>
    `
  },

  // Bài 32
  {
    title: "Bí Tích Xức Dầu Bệnh Nhân",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Ai trong anh em đau yếu ư? Người ấy hãy mời các kỳ mục của Hội thánh đến; họ sẽ cầu nguyện cho người ấy, sau khi xức dầu nhân danh Chúa” (Gc 5,14)</p>

      <h4>Giáo huấn</h4>
      <ul>
        <li>Bí tích xức dầu bệnh nhân nâng đỡ người bệnh và người già yếu về hồn và xác.</li>
        <li>Ban những ơn: kết hợp với khổ nạn Chúa, an ủi, tha tội, phục hồi sức khỏe nếu có ích cho ơn cứu độ, chuẩn bị cho cuộc vượt qua.</li>
        <li>Lãnh nhận khi lâm cảnh nguy tử vì bệnh nặng hoặc tuổi già.</li>
        <li>Thánh Thể ban cho người sắp lìa đời giúp họ vững mạnh tiến về đời sau.</li>
      </ul>
    `
  },

  // Bài 33
  {
    title: "Bí Tích Truyền Chức Thánh",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Thượng tế nào cũng là người được chọn trong số người phàm, và được đặt lên làm đại diện cho loài người, trong các mối tương quan với Thiên Chúa, để dâng lễ phẩm cũng như tế vật đền tội” (Dt 5,1)</p>

      <h4>Giáo huấn</h4>
      <ul>
        <li>Là Bí tích Chúa Giê-su lập để trao chức linh mục cho người được tuyển chọn, phục vụ Dân Chúa qua giảng dạy, tế tự, điều hành mục vụ.</li>
        <li>Chúa Giê-su lập trong Bữa Tiệc Ly: “Anh em hãy làm việc này mà tưởng nhớ đến Thầy” (Lc 22,19).</li>
        <li>Chức tư tế chung: tham dự vào chức tư tế của Chúa Ki-tô khi lãnh nhận Rửa tội.</li>
        <li>Chức tư tế thừa tác: tham dự chức tư tế của Chúa Ki-tô qua Bí tích Truyền chức thánh để phục vụ cộng đoàn nhân danh Chúa.</li>
        <li>Các cấp bậc: Giám mục, Linh mục, Phó tế.</li>
        <li>Bổn phận tín hữu: cầu nguyện, tôn kính, vâng lời các chủ chăn, cộng tác xây dựng Nước Chúa, giúp đỡ về tinh thần và vật chất.</li>
      </ul>
    `
  },

  // Bài 34
  {
    title: "Bí Tích Hôn Phối",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Sau đó, Đức Giê-su đi xuống cùng với cha mẹ, trở về Na-da-rét và hằng vâng phục các ngài. Riêng mẹ Người thì hằng ghi nhớ tất cả những điều ấy trong lòng. Còn Đức Giê-su thì ngày càng khôn lớn, và được Thiên Chúa cũng như mọi người thương mến” (Lc 2,51-52)</p>

      <h4>Giáo huấn</h4>
      <ul>
        <li>Là Bí tích Chúa Giê-su lập để kết hợp nam và nữ thành vợ chồng trước mặt Chúa và Hội thánh, sống xứng đáng ơn gọi của mình.</li>
        <li>Gia đình là cộng đồng yêu thương căn bản, tế bào đầu tiên và nền móng xây dựng xã hội bền vững.</li>
        <li>Gia đình Ki-tô giáo là cộng đồng tình yêu theo hình ảnh hiệp thông Thiên Chúa Ba Ngôi, thể hiện sự hiệp thông trong Hội thánh.</li>
        <li>Gia đình Công giáo được gọi là “Hội thánh tại gia” vì là cộng đoàn ân sủng, cầu nguyện, dạy đức tính nhân bản và siêu nhiên, truyền giáo.</li>
      </ul>
    `
  },

  // Bài 35
  {
    title: "Ơn Kêu Gọi",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Bấy giờ, Người nói với môn đệ rằng: 'Lúa chín đầy đồng, mà thợ gặt lại ít. Vậy anh em hãy xin chủ mùa gặt sai thợ ra gặt lúa về'” (Mt 9,37-38)</p>

      <h4>Giáo huấn</h4>
      <ul>
        <li>Là lời Thiên Chúa mời gọi mỗi người vào một bậc sống nào đó; thông thường là dâng mình cho Chúa trong bậc tu trì hoặc hàng giáo sĩ.</li>
        <li>Dấu nhận ơn kêu gọi: ý ngay lành, ước muốn dấn thân, đủ điều kiện Hội thánh quy định, được người có trách nhiệm tuyển chọn.</li>
        <li>Đáp lại: cầu nguyện, suy nghĩ, xin hướng dẫn từ người khôn ngoan và sẵn sàng đáp lại tiếng Chúa.</li>
      </ul>
    `
  },

  // Bài 36
  {
   title: "Á Bí Tích",
  content: `
    <h4>Lời Chúa</h4>
    <p>“Người ta dẫn trẻ em đến với Đức Giê-su, để Người chạm tay vào chúng... Người ôm lấy các trẻ em và đặt tay chúc lành cho chúng” (Mc 10,13-16)</p>

    <h4>Giáo huấn</h4>
    <ul>
      <li>Á Bí Tích là dấu hiệu linh thiêng do Hội thánh lập ra để chuẩn bị người tín hữu lãnh nhận hiệu quả các Bí tích và thánh hóa hoàn cảnh khác nhau của cuộc sống.</li>
      <li>Ba loại: chúc lành cho người/đồ dùng/nơi chốn, nghi thức thánh hiến, nghi thức trừ quỉ.</li>
      <li>Đạo đức bình dân nuôi dưỡng đời sống thiêng liêng, hoà nhịp và hướng đến phụng vụ Hội thánh.</li>
      <li>Ảnh tượng giúp tôn kính Thiên Chúa và noi gương các thánh.</li>
    </ul>
  `
  },

  // Bài 37
  {
    title: "Bí Tích Thêm Sức",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Và khi ông Phao-lô đặt tay trên họ, thì Thánh thần ngự xuống trên họ, họ nói tiếng lạ và nói tiên tri” (Cv 19,6)</p>

      <h4>Giáo huấn</h4>
      <ul>
        <li>Bí tích Thêm sức ban Chúa Thánh Thần, giúp sống hoàn hảo hơn Bí tích Rửa tội, liên kết mật thiết với Hội thánh, làm chứng cho Chúa Ki-tô.</li>
        <li>Thừa tác viên: Giám mục, Linh mục được chỉ định; khẩn cấp thì Linh mục bất cứ ai cũng có thể ban.</li>
        <li>Nghi thức: đặt tay, cầu nguyện xin Thánh Thần, xức dầu và đọc "Hãy lãnh nhận ấn tín ơn Chúa Thánh Thần", chúc bình an.</li>
        <li>In dấu ấn thiêng liêng trong linh hồn, không thể xóa.</li>
        <li>Lãnh nhận: đã rửa tội, đến tuổi khôn, sạch tội trọng, học giáo lý đầy đủ, có người đỡ đầu.</li>
      </ul>
    `
  },

  // Bài 38
  {
    title: "Sống Bí Tích Thêm Sức",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Chính anh em là muối cho đời... Chính anh em là ánh sáng cho trần gian” (Mt 5,13-14)</p>

      <h4>Giáo huấn</h4>
      <ul>
        <li>Bổn phận sau Thêm sức: thực hành Lời Chúa làm chứng cho Chúa Ki-tô, góp phần xây dựng xã hội theo Tin Mừng, bênh vực và truyền bá đức tin.</li>
        <li>Sống hài hòa với mọi người, xây dựng nền văn minh tình thương theo mẫu mực Ba Ngôi Thiên Chúa.</li>
        <li>Hoán cải nội tâm, cổ võ công bằng bác ái, góp phần đổi mới định chế và điều kiện sống dưới ánh sáng Tin Mừng.</li>
        <li>Tham gia xây dựng ích chung: chu toàn trách nhiệm cá nhân, góp phần sinh hoạt chung, sống đúng đòi hỏi lương tâm.</li>
      </ul>
    `
  },

  // Bài 39
  {
    title: "Hoạt Động Tông Đồ",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Những người phải tản mác này đi khắp nơi loan báo lời Chúa” (Cv 8,4)</p>

      <h4>Giáo huấn</h4>
      <ul>
        <li>Hoạt động tông đồ là làm việc giúp người khác biết và tin Chúa Giê-su.</li>
        <li>Nhiệm vụ: mọi người Ki-tô hữu đều mở rộng Nước Chúa, tham gia hoạt động tông đồ, truyền giáo.</li>
        <li>Hình thức: cá nhân hoặc tập thể, thăm viếng, dạy giáo lý, sinh hoạt tông đồ Hội thánh.</li>
        <li>Sứ mạng truyền giáo: Thiên Chúa muốn mọi người cứu độ, Hội thánh truyền chân lý Chúa, Chúa Ki-tô sai tông đồ rao giảng Tin Mừng cho muôn dân.</li>
      </ul>
    `
  },

  // Bài 40
  {
    title: "Việc Cầu Nguyện",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Có một lần Đức Giê-su cầu nguyện ở nơi kia. Người cầu nguyện xong, thì có một người trong nhóm môn đệ nói với Người: Thưa Thầy, xin dạy chúng con cầu nguyện, cũng như ông Gio-an đã dạy môn đệ của ông” (Lc 11,1)</p>

      <h4>Giáo huấn</h4>
      <ul>
        <li>Cầu nguyện là nâng tâm hồn lên cùng Chúa, gặp gỡ và hiệp thông với Người trong tình yêu thương.</li>
        <li>Liên kết với Thiên Chúa là nguồn sự sống; Người hằng mời và chờ đợi ta đến thưa chuyện.</li>
        <li>Mẫu gương cầu nguyện: Chúa Giê-su hoàn hảo nhất.</li>
        <li>Thầy dạy cầu nguyện: Chúa Thánh Thần, nhắc lại mọi điều Chúa Giê-su đã dạy.</li>
      </ul>
    `
  },

  // Bài 41
  {
    title: "Đời Sống Cầu Nguyện",
    content: `
      <h4>Lời Chúa</h4>
      <p>“Anh em hãy canh thức và cầu nguyện, để khỏi lâm vào cơn cám dỗ. Vì tinh thần thì hăng hái, nhưng thể xác lại yếu đuối” (Mt 26,41)</p>

      <h4>Giáo huấn</h4>
      <ul>
        <li>Cầu nguyện bất cứ lúc nào: tạ ơn, ngợi khen, xin ơn cho mình hoặc người khác.</li>
        <li>Cầu nguyện ở đâu: ưu tiên nhà thờ, ngoài ra nơi thanh vắng, cô tịch cũng thích hợp.</li>
        <li>Cao điểm cầu nguyện: gặp gỡ thân tình với Thiên Chúa là Cha; đến với Cha nhờ Chúa Giê-su, con đường duy nhất (Ga 14,6).</li>
        <li>Liên kết với Đức Ma-ri-a khi cầu nguyện: Mẹ là Mẹ Thiên Chúa, chuyển cầu cho ta.</li>
        <li>Thánh giúp trong cầu nguyện: các Thánh hiệp thông trọn vẹn với Thiên Chúa, chuyển cầu cho ta.</li>
        <li>Nuôi dưỡng đời sống cầu nguyện: nhịp cầu nguyện trong ngày (sáng, tối, trước bữa ăn), tham dự Thánh lễ.</li>
      </ul>
    `
  }
];


// Ngày nghỉ lễ
const holidays = [
  "2025-12-24",
  "2026-01-21",
  "2026-02-18",
  "2026-04-01",
  "2026-04-08"
];

function generateSchedule(startDate, lessons) {
  const tbody = document.querySelector("#scheduleTable tbody");
  let currentDate = new Date(startDate);
  let lessonIndex = 0;

  while (lessonIndex < lessons.length) {
    const isoDate = currentDate.toISOString().split("T")[0];

    if (!holidays.includes(isoDate)) {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${currentDate.toLocaleDateString("vi-VN")}</td>
        <td>Bài ${lessonIndex + 1}</td>
        <td>
          <button onclick="toggleLesson(${lessonIndex})">${lessons[lessonIndex].title}</button>
          <div id="lesson-${lessonIndex}" class="lesson-content">
            <p>${lessons[lessonIndex].content}</p>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
      lessonIndex++;
    }
    currentDate.setDate(currentDate.getDate() + 7); // sang thứ 4 tuần sau
  }
}

function toggleLesson(index) {
  const div = document.getElementById(`lesson-${index}`);
  div.style.display = div.style.display === "none" ? "block" : "none";
}

generateSchedule("2025-08-27", lessons);

// Tạo lịch học vào các Thứ 4, chỉ hiển thị: Tiêu đề, Ngày, Số bài (không có nội dung)
function generateScheduleForWednesdays(startDate) {
  const tbody = document.querySelector("#scheduleTable tbody");
  tbody.innerHTML = "";

  let current = new Date(startDate);
  const endYear = current.getFullYear() + 1;
  const lastDayOfJune = new Date(endYear, 6, 0);
  let lastWednesday = new Date(lastDayOfJune);
  while (lastWednesday.getDay() !== 3) { // 3 = Thứ 4
    lastWednesday.setDate(lastWednesday.getDate() - 1);
  }

  let lessonIndex = 0;
  while (lessonIndex < lessons.length && current <= lastWednesday) {
    const iso = current.toISOString().split('T')[0];
    if (!holidays.includes(iso)) {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${lessons[lessonIndex].title}</td>
        <td>${formatDateVN(current)}</td>
        <td>${lessonIndex + 1}</td>
      `;
      tbody.appendChild(tr);
      lessonIndex++;
    }
    current.setDate(current.getDate() + 7);
  }

  if (lessonIndex < lessons.length) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="3"><em>Chú ý: còn ${lessons.length - lessonIndex} bài chưa được xếp lịch (hết khung thời gian).</em></td>`;
    tbody.appendChild(tr);
  }
}

function formatDateVN(date) {
  return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

// Render danh sách bài học lên giao diện
function renderLessonsList() {
  const ul = document.getElementById('lessonsList');
  ul.innerHTML = "";
  lessons.forEach((ls, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="lesson-title">Bài ${idx + 1}: ${ls.title}</span>
      <button type="button" class="detail-btn" onclick="showLesson(${idx})">Xem chi tiết</button>
    `;
    ul.appendChild(li);
  });
}

// Hiển thị/ẩn vùng chi tiết (giữ nguyên)
function showLesson(index) {
  const contentWrap = document.getElementById('lessonContent');
  const container = document.getElementById('lessonText');
  const ls = lessons[index];

  container.innerHTML = `
    <h3>Bài ${index + 1}: ${ls.title}</h3>
    ${ls.content}
  `;

  contentWrap.classList.remove('collapsed');
  contentWrap.setAttribute('aria-hidden', 'false');

  const firstHeading = contentWrap.querySelector('h3');
  if (firstHeading) firstHeading.focus();

  contentWrap.scrollIntoView({behavior: 'smooth', block: 'center'});
}

function hideLesson() {
  const contentWrap = document.getElementById('lessonContent');
  contentWrap.classList.add('collapsed');
  contentWrap.setAttribute('aria-hidden', 'true');
  const firstBtn = document.querySelector('#lessonsList .detail-btn');
  if (firstBtn) firstBtn.focus();
}

// 🔍 Tìm kiếm bài học (giữ như cũ)
document.getElementById("searchInput").addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  const items = document.querySelectorAll("#lessonsList li");

  items.forEach(li => {
    const text = li.innerText.toLowerCase();
    li.style.display = text.includes(keyword) ? "" : "none";
  });
});

// 🟡 Highlight bài học sắp tới
function highlightUpcomingLesson() {
  const today = new Date();
  let upcomingRow = null;

  document.querySelectorAll("#scheduleTable tbody tr").forEach(tr => {
    const dateCell = tr.children[1];
    if (!dateCell) return;

    const parts = dateCell.textContent.split("/");
    if (parts.length !== 3) return;
    const d = new Date(parts[2], parts[1] - 1, parts[0]);

    if (d >= today && !upcomingRow) {
      upcomingRow = tr;
    }
  });

  if (upcomingRow) {
    upcomingRow.classList.add("upcoming");
  }
}

// Khởi tạo
const startDate = new Date(2025, 7, 27); // giữ giá trị hiện tại nếu ok
renderLessonsList();
generateScheduleForWednesdays(startDate);
highlightUpcomingLesson();
