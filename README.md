# K4-Track1-Lab17-2A202601132-PhamBaHuy

Track 1 - Day 17 — Finding and Validating Pain Points

## Chặng 1 — Đặt giả thuyết · 60 phút
**Mục tiêu**: Mở lại toàn bộ logic đang bị nén trong solution directive và biến nó thành một giả thuyết đủ cụ thể để evidence có thể làm thay đổi.

Nhóm đi theo chuỗi:
> **Solution → Change → Actor → Situation & Job → Pain → Evidence**

---

### 1. Solution — Gỡ solution khỏi hình thức cụ thể

- **Case đã chọn**: AI Support Radar trên nền tảng học trực tuyến VLearn (Hệ thống phát hiện sớm học viên gặp bế tắc/có nguy cơ bỏ cuộc và hỗ trợ can thiệp kịp thời).

**Solution directive (nguyên văn)**:
> *"Xây dựng tính năng AI Support Radar trên hệ thống VLearn: Sử dụng mô hình Machine Learning/AI để tự động phân tích hành vi học tập, điểm số quiz, tần suất nộp bài của học viên, phát hiện các học viên có nguy cơ rớt môn/bỏ cuộc (at-risk learners), tự động đẩy danh sách vào Support Queue và sinh các gợi ý can thiệp (intervention suggestions) để Giảng viên/Coach nhấn nút gửi hỗ trợ kịp thời."*

**Capability trung tính (Neutral Capability)**:
> Khả năng nhận diện sớm những học viên đang gặp bế tắc hoặc có dấu hiệu chững lại trong tiến độ học tập, đồng thời kích hoạt sự trợ giúp/tháo gỡ đúng lúc và đúng ngữ cảnh trước khi học viên nản lòng và từ bỏ khóa học.

---

### 2. Change — Làm lộ chuỗi thay đổi được kỳ vọng

**Chuỗi thay đổi logic**:
> **Solution** (Cơ chế phát hiện bế tắc & kích hoạt trợ giúp kịp thời)  
> → **Học viên nhận được sự hỗ trợ/tháo gỡ đúng lúc khi gặp bài khó hoặc mất nhịp học**  
> → **Học viên vượt qua rào cản kiến thức, không bị dồn ứ bài tập, duy trì động lực học**  
> → **Outcome** (Tăng tỷ lệ hoàn thành khóa học, giảm tỷ lệ drop-out, nâng cao mức độ hài lòng)

**Các thay đổi được kỳ vọng**:
1. **Output (Team tạo ra)**: Cơ chế nhận diện học viên đang kẹt bài tập/quiz và kết nối hỗ trợ kịp thời kèm ngữ cảnh chi tiết.
2. **Behavior Change 1 (Học viên)**: Thay vì âm thầm chịu đựng, ngại hỏi hoặc bỏ mặc bài tập khi gặp khó, học viên đón nhận sự hỗ trợ, giải tỏa khúc mắc và tiếp tục làm bài.
3. **Behavior Change 2 (Người hỗ trợ - Coach/Giảng viên/Hệ thống)**: Chủ động tiếp cận tháo gỡ khó khăn cho học viên đúng "thời điểm vàng" thay vì chờ học viên bỏ học mới biết.
4. **Outcome (Kết quả kinh doanh & Đào tạo)**: Tỷ lệ học viên hoàn thành khóa học (Completion Rate) tăng lên, giảm tỷ lệ bỏ học giữa chừng (Drop-out Rate), nâng cao điểm hài lòng và uy tín đào tạo.

---

### 3. Actor — Xác định các nhóm người có liên quan

| Actor | Họ đang làm gì? | Pain hoặc hậu quả có thể có | Họ hưởng lợi thế nào? |
| :--- | :--- | :--- | :--- |
| **Learner (Học viên)** *(Nhánh điều tra chính)* | Tự học qua video, đọc tài liệu, làm quiz, làm bài tập thực hành/dự án. | Gặp bài khó không biết hỏi ai, ngại hỏi vì sợ bị đánh giá, chờ phản hồi quá lâu dẫn đến dồn bài, chán nản và âm thầm bỏ cuộc; mất tiền học phí và thời gian mà không đạt mục tiêu. | Nhận được trợ giúp đúng lúc (just-in-time support), gỡ bỏ bế tắc kiến thức, giữ vững động lực và hoàn thành khóa học thành công. |
| **Instructor (Giảng viên / Chủ nhiệm môn)** | Soạn bài giảng, giảng dạy, chấm bài, theo dõi chất lượng lớp. | Lớp đông không thể kèm từng người; chỉ biết học viên rớt khi đã quá muộn; tỷ lệ hoàn thành môn thấp ảnh hưởng uy tín. | Nắm được lỗ hổng kiến thức chung của học viên để cải thiện bài giảng; nâng cao chất lượng đào tạo. |
| **Coach / Teaching Assistant (Trợ giảng)** | Giải đáp thắc mắc, nhắc bài, hỗ trợ kỹ thuật và động viên học viên. | Không biết học viên nào thực sự đang cần giúp vì học viên im lặng; hỗ trợ dàn trải không hiệu quả; quá tải tin nhắn vào cuối kỳ. | Nhận diện đúng học viên đang cần giúp để hỗ trợ trúng đích, tiết kiệm công sức và tăng hiệu quả công việc. |
| **VLearn Platform / Trung tâm đào tạo** | Vận hành nền tảng, tuyển sinh, chăm sóc khách hàng. | Học viên bỏ học dẫn đến đánh giá xấu, giảm tỷ lệ giới thiệu bạn bè, giảm giá trị vòng đời khách hàng (LTV thấp). | Tăng tỷ lệ hoàn thành, tăng mức độ trung thành của học viên, tối ưu hiệu quả đào tạo. |

- **Actor nhóm chọn để điều tra trước**: **Learner (Học viên)**.
- **Vì sao chọn nhánh này thay vì actor khác**: 
  > Bởi vì **Học viên là người trực tiếp trải nghiệm nỗi đau (Primary Pain Owner)**. Quyết định tiếp tục học hay âm thầm bỏ cuộc hoàn toàn phụ thuộc vào trải nghiệm và cảm xúc của học viên khi gặp bế tắc. Nếu không hiểu sâu rào cản tâm lý, hành vi tìm kiếm sự giúp đỡ và lý do thực sự khiến học viên dừng học, mọi giải pháp hỗ trợ xây dựng từ góc nhìn của Giảng viên hay Hệ thống đều sẽ bị trật mục tiêu.

---

### 4. Situation & Job — User đang cố làm gì trong tình huống nào?

- **Tình huống bắt đầu**: Đang tự học vào buổi tối ở tuần thứ 3 của một khóa học trực tuyến, gặp một bài tập thực hành phức tạp hoặc làm bài kiểm tra trượt 2 lần liên tiếp.
- **User muốn hoàn thành việc gì**: Học viên muốn hiểu rõ lỗi sai, tháo gỡ điểm nghẽn kiến thức để hoàn thành bài tập đúng hạn và theo kịp tiến độ cả lớp.
- **Hiện tại họ làm như thế nào**: Tự xem lại video bài giảng nhiều lần, lên Google/ChatGPT tra cứu, tìm kiếm trên diễn đàn/nhóm chat của lớp, hoặc cố tự mò mẫm sửa bài một mình.
- **Điểm bắt đầu gặp vướng mắc**: Xem lại video vẫn không hiểu vì giải thích chung chung; tra Google/ChatGPT thì câu trả lời không khớp ngữ cảnh bài học; ngại nhắn tin hỏi giảng viên/trợ giảng vì sợ câu hỏi ngớ ngẩn; nhắn lên nhóm chung thì vài tiếng hoặc hôm sau mới có người trả lời. Sau vài ngày bế tắc, bài tập dồn ứ lại và học viên bắt đầu nản lòng.

**Mô tả Situation & Job**:
> Khi gặp phải một bài tập khó hoặc không hiểu kiến thức trọng tâm trong khóa học trực tuyến, **Học viên** đang cố **tìm cách hiểu bản chất vấn đề và sửa lỗi để hoàn thành bài tập đúng hạn** bằng cách **tua đi tua lại video bài giảng, tự tra Google/ChatGPT và âm thầm tự xoay sở một mình**.

**JTBD Hypothesis**:
> *"Khi gặp bài tập khó hoặc bị vướng mắc kiến thức trong lúc tự học trực tuyến, tôi muốn nhanh chóng nhận được sự giải thích/tháo gỡ đúng trọng tâm và không phán xét, để có thể hoàn thành bài tập, giữ được sự tự tin và tiếp tục theo đuổi khóa học."*

---

### 5. Pain — Viết các cách giải thích cạnh tranh

**Pain Hypothesis A (Giả thuyết về Rào cản tìm trợ giúp & Độ trễ phản hồi - Help-Seeking Barrier & Latency)**:
> Khi gặp bài tập khó trong khóa học trực tuyến, **Học viên** gặp khó khăn trong việc **tiếp tục hoàn thành bài tập** vì **họ ngại chủ động hỏi người hướng dẫn (sợ bị đánh giá) và các kênh hỏi đáp chung có độ trễ phản hồi quá lớn (mất nhiều tiếng/ngày)**, dẫn đến **sự bế tắc kéo dài, bài tập bị dồn ứ, mất dần động lực và âm thầm bỏ dở khóa học (silent drop-out)**.

**Pain Hypothesis B (Giả thuyết về Khoảng cách năng lực & Quá tải nhận thức - Content Gap & Cognitive Overload)**:
> Khi gặp bài tập khó trong khóa học trực tuyến, **Học viên** gặp khó khăn trong việc **tiếp thu kiến thức** vì **nội dung bài giảng quá nhanh hoặc thiếu bài tập bắc cầu phù hợp với trình độ nền tảng của họ**, dẫn đến **dù có cố gắng xem lại nhiều lần họ vẫn không hiểu và tự kết luận rằng mình không đủ khả năng học tiếp**.

- **Giả thuyết nhóm chọn để điều tra trước**: **Pain Hypothesis A (Rào cản tìm kiếm trợ giúp & Độ trễ hỗ trợ)**
- **Lý do chọn**:
  > Đa số các khóa học trực tuyến đều cung cấp tài liệu đầy đủ, nhưng sự khác biệt lớn nhất giữa học online và học offline là tính tương tác tức thời. Rào cản tâm lý khi phải tự cất tiếng hỏi và việc phải chờ đợi câu trả lời khi đang có hứng thú học là "kẻ giết chết động lực" số 1 khiến học viên bỏ cuộc.

---

### 6. Evidence — Xác định điều cần tìm trước khi viết câu hỏi

| Cần kiểm tra | Evidence làm nhóm tin hơn | Evidence làm nhóm nghi ngờ hoặc bác bỏ |
| :--- | :--- | :--- |
| **Situation có thật** | Học viên kể lại được trải nghiệm cụ thể gần đây bị kẹt ở bài tập/quiz nào, vào tuần thứ mấy trong khóa học online. | Học viên chỉ học video lý thuyết, không làm bài tập; hoặc luôn thấy bài tập quá dễ không có gì vướng mắc. |
| **Pain có ý nghĩa** | Học viên mô tả cảm giác bất lực, stress khi ngồi mò mẫm hàng giờ; kể lại việc bài tập bị quá hạn và sau đó quyết định bỏ không vào học nữa. | Học viên thấy việc kẹt bài là bình thường, không bận tâm; hoặc sẵn sàng bỏ qua bài khó để học bài tiếp theo mà không ảnh hưởng gì. |
| **Workaround tồn tại** | Học viên đã tốn nhiều công sức: chụp màn hình hỏi ChatGPT, lên StackOverflow/Google tìm kiếm, nhắn tin riêng cho bạn cùng lớp, xem YouTube ngoài. | Học viên gặp bài khó là tắt máy đi ngủ ngay, không hề tìm kiếm giải pháp hay thử bất kỳ cách nào để tự gỡ. |
| **Consequence tồn tại** | Học viên trượt kỳ thi, không hoàn thành khóa học, mất tiền học phí, cảm thấy thất vọng về bản thân và không muốn mua khóa học online nào khác. | Dù gặp bài khó nhưng học viên vẫn hoàn thành khóa học đạt 100% điểm; không để lại hậu quả gì về tiến độ hay tâm lý. |
| **Pattern có lặp** | Tình trạng bế tắc và ngại hỏi xảy ra lặp đi lặp lại ở nhiều môn học/khóa học trực tuyến khác nhau mà học viên từng tham gia. | Tình huống chỉ xảy ra 1 lần duy nhất do lỗi mạng hoặc bài tập bị lỗi đề thi. |

---

### Chốt Problem Hypothesis và park solution

**Problem Hypothesis nhóm mang sang Chặng 2**:
> *"Học viên tham gia các khóa học trực tuyến trên nền tảng VLearn khi gặp bài tập khó hoặc lỗ hổng kiến thức thường gặp khó khăn trong việc nhận được sự tháo gỡ kịp thời và đúng ngữ cảnh, do rào cản tâm lý ngại hỏi người hướng dẫn và độ trễ phản hồi trên các kênh hỗ trợ hiện tại, dẫn đến việc bế tắc kéo dài, dồn ứ bài tập, nản lòng và âm thầm bỏ dở khóa học."*

**Điều gì phải đúng để giả thuyết đứng vững**:
1. Học viên thực sự có mong muốn hoàn thành khóa học và có nỗ lực tự xoay sở khi gặp bài khó.
2. Việc nhận được giải thích/hỗ trợ kịp thời (trong vòng vài phút đến vài giờ khi đang ngồi học) có tác động quyết định giúp học viên tiếp tục làm bài.
3. Rào cản tâm lý (ngại hỏi, sợ phiền, sợ bị phán xét) là có thật và ngăn cản học viên chủ động tìm kiếm sự giúp đỡ từ Giảng viên/Coach.

**Điều gì có thể khiến nhóm sửa hoặc bác bỏ giả thuyết**:
1. Học viên bỏ học chủ yếu vì lý do ngoại cảnh (quá bận công việc, mất mục tiêu ban đầu, thay đổi kế hoạch cá nhân) chứ không phải do bế tắc bài tập.
2. Học viên hoàn toàn tự tin và thoải mái nhắn hỏi Coach bất cứ lúc nào, không hề có rào cản tâm lý ngại ngùng.
3. Các công cụ AI bên ngoài (như ChatGPT) đã giải quyết hoàn hảo mọi vướng mắc học tập của học viên, không còn khoảng trống bế tắc nào.

**Solution Parking Lot**: *(Brainstorm ít nhất năm hướng, trong đó có ít nhất một hướng không sử dụng AI)*

| Hướng giải quyết có thể có | AI / Không sử dụng AI |
| :--- | :--- |
| **1. Kênh trợ giúp ẩn danh & Cam kết phản hồi nhanh (Anonymous Q&A Forum with SLA)**: Cho phép học viên đăng câu hỏi ẩn danh kèm cam kết Trợ giảng giải đáp trong vòng 30 phút. | **Không sử dụng AI** |
| **2. Trợ lý AI gia sư ngữ cảnh (Contextual AI Learning Assistant)**: Chatbot AI được huấn luyện trên giáo trình khóa học, gợi ý từng bước (hints/scaffolding) khi học viên kẹt code/bài tập mà không làm hộ toàn bộ. | **AI** |
| **3. Mô hình Bạn cùng tiến / Nhóm học tập nhỏ (Study Pods & Peer Buddy)**: Ghép đôi 2 học viên cùng trình độ để thảo luận và thúc đẩy nhau làm bài tập hàng tuần. | **Không sử dụng AI** |
| **4. AI tự động phát hiện kẹt bài & gửi gợi ý chủ động (AI In-app Nudge)**: Khi học viên làm bài sai 3 lần hoặc dừng ở một trang quá lâu, hệ thống tự hiển thị gợi ý bài đọc bổ trợ tương ứng. | **AI** |
| **5. Giờ giải đáp trực tiếp hàng tuần (Weekly Open Office Hours)**: Khung giờ cố định 2 buổi/tuần qua Zoom để Giảng viên/Trợ giảng live trực tiếp giải đáp mọi thắc mắc của học viên. | **Không sử dụng AI** |

---

## Chặng 2 — Chuẩn bị phỏng vấn · 30 phút
**Mục tiêu**: Chuyển Evidence Map thành một Conversation Guide ngắn, đủ để tìm bằng chứng về pain của **Học viên (Learner)** mà không mời user đánh giá solution.

| Nội dung | Thời gian |
| :--- | :--- |
| Chốt ba điều quan trọng nhất cần học | 10 phút |
| Viết Conversation Guide | 15 phút |
| Tự rà soát và phân công phỏng vấn | 5 phút |

---

### 1. Chốt Big 3 (Ba điều quan trọng nhất cần học từ Học viên)

Quay lại Evidence Map ở Chặng 1 và chọn đúng ba điều quan trọng nhất cần học, trong đó có câu hỏi "đáng sợ" có khả năng làm thay đổi hoàn toàn giả thuyết ban đầu.

| STT | Điều cần học | Evidence cần tìm | Điều gì khiến nhóm xem lại giả thuyết? |
| :---: | :--- | :--- | :--- |
| **1** | **Hành vi thực tế khi gặp bế tắc & Rào cản tìm trợ giúp** *(Help-seeking Behavior & Barriers)*:<br>Khi gặp bài tập khó/không hiểu, học viên thực sự đã làm gì đầu tiên và tại sao họ không hỏi Giảng viên/Coach? | Học viên mô tả chi tiết: tự mò mẫm, xem lại video nhiều lần, tra cứu bên ngoài; chia sẻ cảm giác ngại hỏi, sợ bị coi là yếu kém, hoặc thấy kênh hỏi đáp quá chậm/bất tiện. | Học viên trả lời rằng họ luôn nhắn tin hỏi ngay cho Giảng viên/Coach mà không hề ngại ngùng và luôn nhận được câu trả lời tức thì thỏa đáng. |
| **2** | **Workarounds & Nỗ lực tự khắc phục** *(Workaround & Effort Spent)*:<br>Học viên đã đầu tư bao nhiêu thời gian và công sức để tự xoay sở vượt qua điểm nghẽn kiến thức? | Học viên kể lại việc thức khuya nhiều giờ tìm kiếm trên Google/YouTube/ChatGPT, hỏi bạn bè, chép thử code mẫu, làm đi làm lại bài quiz nhiều lần. | Học viên gặp bài khó là bỏ qua luôn, không tốn công sức thử giải quyết; việc kẹt bài không gây khó chịu hay bận tâm gì cho họ. |
| **3**<br>*(Đáng sợ)* | **Nguyên nhân gốc rễ dẫn đến việc Dừng học / Bỏ cuộc** *(Root Cause of Drop-out)*:<br>Học viên bỏ dở khóa học có thực sự vì bế tắc bài tập không được gỡ rối, hay do lý do cá nhân ngoài tầm kiểm soát? | Học viên chia sẻ rằng lý do chính khiến họ dừng học là vì dồn ứ 2-3 bài tập không làm được, cảm thấy bị tụt lại phía sau và mất hẳn động lực tiếp tục. | Học viên chia sẻ họ bỏ học chỉ vì bận việc đột xuất ở công ty, gia đình có việc, hoặc ban đầu đăng ký theo trào lưu chứ không thực sự có nhu cầu học. |

---

### 2. Viết Conversation Guide (Dành cho Học viên)

#### Tiêu chí tuyển người (Recruitment Criteria)
> *"Chúng tôi cần nói chuyện với người đã **tham gia ít nhất một khóa học trực tuyến (có video + bài tập/quiz)** và **từng trải qua cảm giác gặp bài tập khó, bị chậm tiến độ hoặc từng bỏ dở khóa học** trong vòng **60 ngày** gần đây."*

**Recruitment check**: *(Câu xác nhận interviewee thực sự từng trải qua situation — dùng để lọc người, không tính là evidence chính)*
> *"Trong vòng 2 tháng qua khi học online, bạn có từng gặp lần nào bị kẹt ở một bài tập hoặc chủ đề khó đến mức phải mất nhiều thời gian tự xoay sở hoặc bị chậm tiến độ so với lớp không?"*

#### Lời mở đầu (Introduction)
> *"Chào bạn, mình là Huy, hiện đang thực hiện một nghiên cứu thực tế về trải nghiệm tự học và những khó khăn thường gặp của học viên trong các khóa học trực tuyến. Mục tiêu của buổi trò chuyện ngắn hôm nay là để lắng nghe những câu chuyện và trải nghiệm học tập thực tế từ bạn, xem những lúc gặp bài khó hoặc vướng mắc thì bạn thường xoay sở như thế nào. Buổi trao đổi hoàn toàn mang tính chất học hỏi, không kiểm tra kiến thức và cũng không nhằm mục đích giới thiệu/đánh giá bất kỳ sản phẩm nào. Mọi chia sẻ chân thật của bạn đều là tư liệu vô cùng quý giá cho nghiên cứu của nhóm."*

#### Story Opener
> *"Kể mình nghe về lần gần nhất **bạn gặp phải một bài tập hoặc kiến thức rất khó hiểu trong một khóa học online mà bạn từng tham gia**?"*

#### Big 3 Questions & Probe Bank

| Điều cần học | Câu hỏi sẽ dùng (Anchor vào quá khứ) | Probe bank (Đào sâu câu chuyện) |
| :--- | :--- | :--- |
| **1. Hành vi khi bế tắc & Rào cản hỏi trợ giúp** | *"Lúc nhận ra mình bị bế tắc hoặc làm bài không ra, việc cụ thể đầu tiên bạn đã làm là gì?"* | • *"Lúc đó bạn đã tìm kiếm trợ giúp ở đâu?"*<br>• *"Bạn có nhắn tin hỏi Giảng viên, Trợ giảng hay hỏi lên nhóm lớp không? Điều gì khiến bạn quyết định hỏi (hoặc không hỏi)?"*<br>• *"Lúc đó chuyện gì xảy ra tiếp theo?"* |
| **2. Workarounds & Mức độ nỗ lực tự xoay sở** | *"Bạn đã dành bao nhiêu thời gian để tự tìm cách tháo gỡ bài tập đó, và bạn đã thử những cách nào?"* | • *"Bạn đã dùng những công cụ hoặc nguồn tài liệu nào khác bên ngoài?"*<br>• *"Phần nào trong quá trình tự mò mẫm đó khiến bạn cảm thấy mệt mỏi hoặc nản nhất?"*<br>• *"Bạn đã thử cách nào khác nữa chưa?"* |
| **3. Nguyên nhân gốc rễ & Hậu quả thực tế** *(Câu hỏi đáng sợ)* | *"Kết quả của lần kẹt bài đó như thế nào? Điều gì đã giúp bạn vượt qua hoặc khiến bạn quyết định dừng lại?"* | • *"Việc đó ảnh hưởng thế nào đến tiến độ học các bài tiếp theo của bạn?"*<br>• *"Trong trường hợp bạn quyết định dừng học/bỏ bài đó, lý do thực sự lúc đó là gì?"*<br>• *"Lần gần nhất trước đó bạn gặp tình trạng tương tự là khi nào?"* |

#### Ba phản xạ khi data bắt đầu lệch

| User đưa ra | Phản xạ | Cách quay lại evidence |
| :--- | :---: | :--- |
| **Lời khen** *(Ví dụ: "Học online nếu có AI chỉ bài thì tuyệt vời quá!")* | **Deflect** | Cảm ơn ngắn rồi kéo về trải nghiệm thực tế: *"Cảm ơn bạn! Để hiểu rõ hơn, trong khóa học gần nhất, những lúc gặp bài khó bạn đã tự xoay sở thực tế như thế nào?"* |
| **Câu chung chung hoặc giả định tương lai** *(Ví dụ: "Thường thì bài khó tôi sẽ ráng tìm hiểu trên mạng...")* | **Anchor** | Neo về một sự kiện có thật trong quá khứ: *"Lần gần nhất bạn gặp một bài khó như vậy là ở bài học nào? Lúc đó bạn đã ngồi tìm kiếm trong bao lâu?"* |
| **Ý tưởng hoặc feature request** *(Ví dụ: "Khóa học nên có nút bấm hỏi đáp 1-1 ngay trên màn hình...")* | **Dig** | Đào sâu vào pain và cách xử lý hiện tại: *"Nút bấm đó sẽ giúp bạn tránh được điều bất tiện nhất nào hiện nay? Lúc chưa có nó, bạn đang làm cách nào để bù đắp?"* |

---

### 3. Tự rà soát và phân công phỏng vấn

#### Checklist Tự rà soát Guide (Self-Audit)
- [x] **Có câu nào làm lộ solution không?** $\rightarrow$ *Không — hoàn toàn không nhắc tới AI Support Radar, Support Queue, hay bot gợi ý can thiệp.*
- [x] **Có câu nào hỏi ý kiến hoặc dự đoán tương lai không?** $\rightarrow$ *Không — 100% câu hỏi neo chặt vào sự kiện, hành vi và cảm xúc thực tế đã xảy ra trong quá khứ.*
- [x] **Story opener đã neo vào “lần gần nhất” chưa?** $\rightarrow$ *Đã neo vào "lần gần nhất bạn gặp phải một bài tập hoặc kiến thức rất khó hiểu trong khóa học online".*
- [x] **Ba câu hỏi chính có nối với ba điều cần học không?** $\rightarrow$ *Nối 1-1 trực tiếp với 3 mục trong Big 3 của Learner.*
- [x] **Có ít nhất một câu hỏi có thể làm giả thuyết yếu đi không?** $\rightarrow$ *Có — Câu hỏi số 3 đào sâu nguyên nhân bỏ học thực tế (nếu học viên bỏ học vì bận việc cá nhân chứ không phải vì bài khó).*
- [x] **Interviewee đã đáp ứng tiêu chí tuyển chưa?** $\rightarrow$ *Đã có tiêu chí tuyển và câu hỏi Recruitment check rõ ràng cho nhóm đối tượng Học viên (Learners).*
- [x] **Mỗi thành viên đã biết mình sẽ phỏng vấn ai chưa?** $\rightarrow$ *Đã lập bảng phân công chi tiết bên dưới.*

#### Phân công phỏng vấn (Interview Logistics)

| Thành viên | Vai trò | Đối tượng phỏng vấn | Thời lượng & Kênh |
| :--- | :--- | :--- | :--- |
| **Phạm Bá Huy** (Lead) | Người phỏng vấn chính (Interviewer) | 01 Học viên vừa tham gia khóa học trực tuyến (có trải nghiệm kẹt bài/chậm tiến độ) | 20–25 phút · Trực tiếp |
| **Nguyễn Văn Tuấn Anh** | Người ghi chép (Note-taker) | Ghi lại nguyên văn trích dẫn (quotes), công cụ workaround, cảm xúc và mốc thời gian | Biên bản phỏng vấn (Google Docs) |
| **Nguyễn Văn Tuấn Anh** | Người quan sát (Observer & Timekeeper) | Theo dõi các bẫy phản xạ (Deflect/Anchor/Dig), canh thời lượng và gợi ý probe đào sâu | Quan sát & hỗ trợ |

---

