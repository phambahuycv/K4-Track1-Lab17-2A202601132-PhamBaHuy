# K4-Track1-Lab17-2A202601132-PhamBaHuy

Track 1 - Day 17 — Finding and Validating Pain Points

## Chặng 1 — Đặt giả thuyết · 60 phút
**Mục tiêu**: Mở lại toàn bộ logic đang bị nén trong solution directive và biến nó thành một giả thuyết đủ cụ thể để evidence có thể làm thay đổi.

Nhóm đi theo chuỗi:
> **Solution → Change → Actor → Situation & Job → Pain → Evidence**

---

### 1. Solution — Gỡ solution khỏi hình thức cụ thể

- **Case đã chọn**: AI Support Radar trên nền tảng học trực tuyến VLearn (Hệ thống phát hiện sớm học viên có nguy cơ bỏ cuộc và hỗ trợ can thiệp kịp thời).

**Solution directive (nguyên văn)**:
> *"Xây dựng tính năng AI Support Radar trên hệ thống VLearn: Sử dụng mô hình Machine Learning/AI để tự động phân tích hành vi học tập, điểm số quiz, tần suất nộp bài của học viên, phát hiện các học viên có nguy cơ rớt môn/bỏ cuộc (at-risk learners), tự động đẩy danh sách vào Support Queue và sinh các gợi ý can thiệp (intervention suggestions) để Giảng viên/Coach nhấn nút gửi hỗ trợ kịp thời."*

**Capability trung tính (Neutral Capability)**:
> Khả năng nhận diện sớm những học viên đang gặp bế tắc hoặc có dấu hiệu chững lại trong tiến độ học tập, đồng thời cung cấp thông tin/ngữ cảnh kịp thời cho người phụ trách để có hành động trợ giúp phù hợp trước khi học viên nản lòng và từ bỏ khóa học.

---

### 2. Change — Làm lộ chuỗi thay đổi được kỳ vọng

**Chuỗi thay đổi logic**:
> **Solution** (Cơ chế cảnh báo sớm & ngữ cảnh bế tắc)  
> → **Giảng viên/Coach chủ động phát hiện đúng lúc & gửi can thiệp trúng đích**  
> → **Học viên được tháo gỡ khó khăn kịp thời, duy trì nhịp học và động lực**  
> → **Outcome** (Tăng tỷ lệ hoàn thành khóa học, giảm tỷ lệ drop-out, nâng cao mức độ hài lòng)

**Các thay đổi được kỳ vọng**:
1. **Output (Team tạo ra)**: Hệ thống tín hiệu cảnh báo học viên cần trợ giúp kèm dữ liệu ngữ cảnh (bài tập chưa nộp, bài quiz điểm thấp, thời gian không đăng nhập, thời lượng tua video).
2. **Behavior Change 1 (Giảng viên / Coach)**: Chuyển từ "thế bị động" (chỉ phản hồi khi học viên chủ động hỏi hoặc khi đã có kết quả thi trượt) sang "thế chủ động" (rà soát và tiếp cận học viên gặp khó khăn ngay trong tuần phát sinh vấn đề).
3. **Behavior Change 2 (Học viên)**: Thay vì âm thầm chán nản, tích tụ lỗ hổng kiến thức và bỏ học, học viên nhận được phản hồi/giải đáp đúng lúc, tiếp tục quay lại làm bài tập và theo kịp lộ trình.
4. **Outcome (Kết quả kinh doanh & Đào tạo)**: Tỷ lệ hoàn thành khóa học (Course Completion Rate) tăng, giảm tỷ lệ học viên bỏ học giữa chừng (Drop-out Rate), nâng cao chỉ số hài lòng (CSAT/NPS) của nền tảng VLearn.

---

### 3. Actor — Xác định các nhóm người có liên quan

| Actor | Họ đang làm gì? | Pain hoặc hậu quả có thể có | Họ hưởng lợi thế nào? |
| :--- | :--- | :--- | :--- |
| **Learner (Học viên)** | Học bài, xem video bài giảng, làm quiz, làm bài tập thực hành. | Gặp bài khó không biết hỏi ai, ngại hỏi, dồn ứ bài tập dẫn đến nản lòng và âm thầm bỏ cuộc; mất tiền/thời gian mà không đạt mục tiêu học tập. | Nhận được sự trợ giúp đúng thời điểm (just-in-time support), giải tỏa bế tắc, duy trì động lực và hoàn thành khóa học. |
| **Instructor (Giảng viên / Chủ nhiệm môn)** | Thiết kế giáo trình, giảng dạy, theo dõi tiến độ tổng thể, chấm điểm bài tập lớn. | Quá tải khi lớp quá đông (hàng trăm học viên), không thể kiểm tra từng cá nhân; chỉ phát hiện khi tỷ lệ rớt môn đã quá muộn để cứu vãn; bị đánh giá KPI giữ chân học viên thấp. | Có bức tranh tổng quan về sức khỏe lớp học, tiết kiệm thời gian lọc dữ liệu, can thiệp hiệu quả và nâng cao chất lượng đào tạo. |
| **Coach / Teaching Assistant (Trợ giảng / Cố vấn học tập)** | Trực tiếp hỗ trợ giải đáp thắc mắc hàng ngày, nhắc nhở học viên nộp bài, chăm sóc học viên. | Không biết học viên nào thực sự đang cần giúp vì học viên thụ động im lặng; mất nhiều thời gian nhắn tin dàn trải không đúng trọng tâm; kiệt sức (burnout). | Biết rõ danh sách ưu tiên cần hỗ trợ và lý do cụ thể để tiếp cận giải quyết đúng vấn đề, tăng hiệu suất làm việc. |
| **VLearn Platform / Trung tâm đào tạo** | Vận hành kinh doanh nền tảng, tuyển sinh, đảm bảo chất lượng và uy tín thương hiệu. | Học viên bỏ dở khóa học dẫn đến review xấu, giảm tỷ lệ mua lại (LTV thấp), lãng phí chi phí marketing (CAC cao). | Tăng tỷ lệ retention, tăng LTV, nâng cao uy tín thương hiệu và tối ưu hóa hiệu quả vận hành. |

- **Actor nhóm chọn để điều tra trước**: **Giảng viên & Cố vấn học tập (Instructor / Coach)** phụ trách lớp học.
- **Vì sao chọn nhánh này thay vì actor khác**: 
  > Bởi vì đây là actor trực tiếp thực hiện hành vi can thiệp (actionable lever). Nếu Instructor/Coach không có thời gian, không tin tưởng thông tin cảnh báo, hoặc không biết cách can thiệp hiệu quả thì dù hệ thống có phân tích học viên chính xác đến đâu chuỗi giá trị cũng bị gãy. Hiểu rõ rào cản và quy trình làm việc thực tế của họ là điều kiện tiên quyết để can thiệp diễn ra thành công.

---

### 4. Situation & Job — User đang cố làm gì trong tình huống nào?

- **Tình huống bắt đầu**: Bước sang tuần thứ 3-4 của một khóa học trực tuyến kéo dài 8-10 tuần (thời điểm độ khó kiến thức tăng cao và xuất hiện bài tập thực hành lớn đầu tiên).
- **User muốn hoàn thành việc gì**: Giảng viên/Coach muốn rà soát và xác định xem ai trong số 100-200 học viên của lớp đang tụt lại phía sau để có kế hoạch hỗ trợ trước khi họ nản chí.
- **Hiện tại họ làm như thế nào**: Xuất file Excel bảng điểm và log đăng nhập từ LMS, dùng công thức lọc thủ công những người điểm dưới trung bình hoặc vắng mặt trên 4 ngày, rồi soạn tin nhắn gửi qua Zalo/Email cho từng người.
- **Điểm bắt đầu gặp vướng mắc**: Việc xuất và lọc dữ liệu thủ công mất hàng giờ đồng hồ; dữ liệu điểm số thường có độ trễ (đến lúc điểm kém thì học viên đã mất động lực từ tuần trước); danh sách nhắn tin bị loãng, nhiều học viên không phản hồi khiến Coach không biết ai thực sự cần giúp.

**Mô tả Situation & Job**:
> Khi bước vào giai đoạn giữa khóa học trực tuyến với số lượng học viên đông (100–200 học viên), **Instructor / Coach** đang cố **nhận diện những học viên đang bị đuối sức/chậm tiến độ để nhắc nhở và hỗ trợ kịp thời** bằng cách **tải dữ liệu log điểm số từ LMS, lọc file Excel thủ công và nhắn tin riêng lẻ qua Zalo/Email**.

**JTBD Hypothesis**:
> *"Khi phụ trách một lớp học trực tuyến quy mô lớn với nhiều học viên có tốc độ học khác nhau, tôi muốn nhanh chóng nhận biết được những học viên đang gặp bế tắc thực sự kèm lý do cụ thể, để có thể can thiệp đúng người, đúng lúc mà không bị quá tải thời gian rà soát thủ công."*

---

### 5. Pain — Viết các cách giải thích cạnh tranh

**Pain Hypothesis A (Giả thuyết về Tín hiệu muộn và thiếu ngữ cảnh - Information Latency & Lack of Context)**:
> Khi lớp học đang diễn ra, **Instructor / Coach** gặp khó khăn trong việc **hỗ trợ học viên kịp thời** vì **các chỉ số trên LMS (điểm số, số bài nộp) chỉ phản ánh kết quả sau cùng chứ không đo được sự bế tắc trong quá trình (như xem video nhiều lần, làm quiz trượt liên tục nhưng chưa nộp bài)**, dẫn đến **khi phát hiện thì học viên đã ngừng học nhiều ngày và không còn ý định quay lại (drop-out)**.

**Pain Hypothesis B (Giả thuyết về Quá tải can thiệp và phản hồi kém - Action Burden & Low Engagement)**:
> Khi phát hiện được danh sách học viên có nguy cơ, **Instructor / Coach** gặp khó khăn trong việc **thực hiện can thiệp hiệu quả** vì **họ không có đủ thời gian để soạn thông điệp cá nhân hóa cho từng người trong khi tin nhắn gửi mẫu hàng loạt lại bị học viên phớt lờ**, dẫn đến **công sức can thiệp tốn kém nhưng không tạo ra chuyển biến hành vi ở học viên**.

- **Giả thuyết nhóm chọn để điều tra trước**: **Pain Hypothesis A**
- **Lý do chọn**:
  > Thời điểm can thiệp (timing) và hiểu đúng nguyên nhân bế tắc là yếu tố sống còn. Nếu tín hiệu phát hiện quá muộn (học viên đã bỏ học được 1-2 tuần) thì dù phương pháp can thiệp có hay đến mấy cũng không còn tác dụng ("cứu muộn hơn là không cứu"). Do đó, cần kiểm chứng xem có đúng là Coach đang bị "mù thông tin" trong giai đoạn học viên manh nha bế tắc hay không.

---

### 6. Evidence — Xác định điều cần tìm trước khi viết câu hỏi

| Cần kiểm tra | Evidence làm nhóm tin hơn | Evidence làm nhóm nghi ngờ hoặc bác bỏ |
| :--- | :--- | :--- |
| **Situation có thật** | Coach/Giảng viên có lịch định kỳ hàng tuần phải vào LMS kiểm tra tiến độ lớp; kể tên được cụ thể các khóa học có tỷ lệ rớt cao ở tuần 3-4. | Coach không bao giờ chủ động rà soát giữa khóa; chỉ chấm điểm cuối kỳ; hoặc chỉ quản lý lớp nhỏ 5-10 người kèm 1-1 dễ dàng nắm bắt. |
| **Pain có ý nghĩa** | Coach chia sẻ sự bất lực khi nhận ra học viên đã không vào học suốt 2 tuần mà không hề hay biết; cảm thấy lãng phí công sức khi tiếp cận thì học viên đã xin bảo lưu/hủy khóa. | Coach thấy việc học viên bỏ học là bình thường (sàng lọc tự nhiên); không quan tâm đến tỷ lệ drop-out; hoặc cho rằng nhiệm vụ kèm cặp là của bộ phận khác. |
| **Workaround tồn tại** | Coach đã tự lập file Google Sheet theo dõi tiến độ riêng, tạo các cột tick xanh/đỏ thủ công, tự đặt lịch nhắc nhở trên lịch cá nhân, lập group Zalo nhắc bài hàng ngày. | Coach hoàn toàn không có hành động gì để theo dõi ngoài việc đợi hệ thống tự chấm; không thử bất kỳ cách nào để bù đắp sự thiếu hụt thông tin. |
| **Consequence tồn tại** | Tỷ lệ rớt/bỏ học đo lường được là 20-30%; Coach bị trừ KPI hoặc mất uy tín; học viên để lại đánh giá tiêu cực rằng "khóa học không có ai quan tâm hỗ trợ". | Tỷ lệ hoàn thành vẫn đạt 90%+ dù Coach không can thiệp; học viên tự xoay sở tốt thông qua tài liệu có sẵn hoặc hỏi bạn cùng lớp. |
| **Pattern có lặp** | Tình trạng bế tắc luôn xảy ra tại các mốc kiến thức khó (ví dụ tuần 3: bài tập lập trình/đồ án đầu tiên), lặp lại ở mọi khóa học từ khóa này sang khóa khác. | Tình trạng bỏ học chỉ xảy ra ngẫu nhiên, không theo quy luật, chủ yếu do lý do cá nhân bất khả kháng (bận việc đột xuất, vấn đề tài chính). |

---

### Chốt Problem Hypothesis và park solution

**Problem Hypothesis nhóm mang sang Chặng 2**:
> *"Giảng viên và Cố vấn học tập (Coach) trên nền tảng VLearn khi quản lý các lớp học trực tuyến quy mô từ 50 học viên trở lên đang gặp tình trạng phát hiện học viên có nguy cơ bỏ cuộc quá muộn (khi học viên đã ngừng tương tác nhiều ngày hoặc trượt bài kiểm tra lớn), do các báo cáo hiện tại trên LMS có độ trễ và thiếu dữ liệu hành vi quá trình, khiến cho các nỗ lực can thiệp hỗ trợ bị mất 'thời điểm vàng' và không cứu vãn được tỷ lệ drop-out."*

**Điều gì phải đúng để giả thuyết đứng vững**:
1. Tồn tại một "khoảng thời gian vàng" (Golden Window - thường là 2-3 ngày đầu khi học viên bắt đầu kẹt bài) mà nếu can thiệp kịp thời thì học viên vẫn tiếp tục học.
2. Coach thực sự có động lực và trách nhiệm muốn giữ chân học viên, sẵn sàng can thiệp nếu có thông tin cảnh báo sớm đáng tin cậy.
3. Dữ liệu hành vi học tập (thời gian xem video, số lần submit lỗi, thời gian dừng giữa chừng) có tương quan thực tế với nguy cơ bỏ học.

**Điều gì có thể khiến nhóm sửa hoặc bác bỏ giả thuyết**:
1. Học viên bỏ học chủ yếu vì lý do ngoại cảnh (thiếu thời gian, việc cá nhân bận, mất động lực nội tại) chứ không phải vì gặp bài khó không được hỗ trợ.
2. Coach đã biết rõ học viên nào yếu nhưng không có đủ thời gian/nguồn lực để hỗ trợ từng người (nghĩa là Pain chính nằm ở khâu hành động can thiệp - Pain B, chứ không phải ở khâu phát hiện - Pain A).
3. Dữ liệu trên LMS đã đủ rõ ràng nhưng Coach không có thói quen hoặc không được phân công trách nhiệm can thiệp.

**Solution Parking Lot**: *(Brainstorm ít nhất năm hướng, trong đó có ít nhất một hướng không sử dụng AI)*

| Hướng giải quyết có thể có | AI / Không sử dụng AI |
| :--- | :--- |
| **1. Cảnh báo theo ngưỡng quy tắc định sẵn (Rule-based Threshold Alerts)**: Tự động gắn cờ và gửi email/thông báo cho Coach khi học viên không đăng nhập quá 3 ngày hoặc làm quiz trượt 2 lần liên tiếp. | **Không sử dụng AI** |
| **2. Trợ lý AI phân tích hành vi & chấm điểm rủi ro (AI Behavioral Risk Scoring)**: Mô hình ML phân tích hành vi học tập đa chiều (thời lượng video, thao tác tua/dừng, log bài tập, tương tác diễn đàn) để dự đoán điểm nguy cơ (Risk Score) theo thời gian thực. | **AI** |
| **3. Mô hình Bạn đồng hành / Học nhóm (Peer Accountability Circles)**: Ghép nhóm 3-4 học viên cùng học tập, có nhóm trưởng điểm danh và báo cáo Coach nếu có bạn vắng mặt hoặc gặp bài khó. | **Không sử dụng AI** |
| **4. AI Auto-Nudge & Gợi ý bài học cá nhân hóa (AI In-app Assistant)**: Bot AI tự động phát hiện học viên đang kẹt ở video/bài code cụ thể và pop-up gợi ý tài liệu bổ trợ/bài giải mẫu ngay trên màn hình trước khi học viên nản chí. | **AI** |
| **5. Biểu mẫu đo cảm xúc & Check-in định kỳ 1-1 (Weekly Pulse Check Survey)**: Form khảo sát 1 câu hỏi vào cuối tuần ("Tuần này bạn thấy kiến thức thế nào: Dễ / Vừa / Rất đuối?"), ai chọn "Rất đuối" sẽ được tự động xếp lịch hẹn 10 phút với Coach. | **Không sử dụng AI** |
