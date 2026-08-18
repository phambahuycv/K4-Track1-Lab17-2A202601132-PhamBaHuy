/**
 * VLearn AI Support Radar - Interactive Prototype Engine (Day 18)
 * Authors: Chicken Plus (Pham Ba Huy, Nguyen Van Tuan Anh)
 */

(function () {
  'use strict';

  // --- STATE MANAGEMENT ---
  const state = {
    activeOption: 'A', // 'A' | 'B' | 'C'
    codeFixed: false,  // false: `[]`, true: `[userId]`
    facilitatorVisible: true,
    testsPassing: false,
    
    // 9 Test Cases Guided Stepper State
    activeTestCase: 'A-1',
    activeStepIndex: 0,
    guideCollapsed: false,

    // Option A Socratic state
    optionA: {
      step: 0, // 0: init, 1: path selected, 2: question answered, 3: completed
      selectedPath: null,
      history: []
    },

    // Option B Explainer state
    optionB: {
      selectedLine: 15,
      mode: 'standard', // 'standard' | 'example' | 'short'
      isOpen: false
    },

    // Option C Fast SLA state
    optionC: {
      ticketStatus: 'idle', // 'idle' | 'submitted' | 'assigned' | 'replied'
      timerSeconds: 29 * 60 + 58,
      timerInterval: null,
      customNote: ''
    }
  };

  // --- 9 TEST CASES STEP-BY-STEP DEFINITIONS ---
  const testCaseDefinitions = {
    'A-1': {
      code: 'TC-A1',
      title: 'Option A: Happy Path (Dẫn dắt tư duy từng bước)',
      goal: 'Mục tiêu: Tester tự tương tác từng bước với Socratic AI để hiểu bản chất useEffect mà không cần đáp án sẵn.',
      option: 'A',
      steps: [
        {
          num: 1,
          title: 'Bấm xin gợi ý tư duy',
          headline: 'Bước 1/5: Kích hoạt Socratic AI',
          detail: 'Nhấp vào nút [💡 Cần gợi ý tư duy] trên thanh Editor Actions để AI phân tích lỗi.',
          targetSelector: '#btn-trigger-socratic'
        },
        {
          num: 2,
          title: 'Chọn hướng kiểm tra',
          headline: 'Bước 2/5: Xác nhận phạm vi tư duy',
          detail: 'AI đưa ra 2 hướng nghi vấn. Hãy bấm vào [1. Cơ chế hoạt động của Dependency Array []].',
          targetSelector: '#btn-opt-a-path-1'
        },
        {
          num: 3,
          title: 'Trả lời câu hỏi gợi mở',
          headline: 'Bước 3/5: Trả lời câu hỏi gợi mở của AI',
          detail: 'Đọc câu hỏi và chọn [Đáp án A: Không, mảng rỗng [] chỉ chạy đúng 1 lần...].',
          targetSelector: '#btn-opt-a-ans-1'
        },
        {
          num: 4,
          title: 'Sửa code vào dependency',
          headline: 'Bước 4/5: Sửa code theo nhận thức',
          detail: 'Bấm nút [🔧 Tự động điền [userId]] hoặc nhấp vào ô [] ở dòng 15 trong code.',
          targetSelector: '#btn-opt-a-apply'
        },
        {
          num: 5,
          title: 'Chạy lại Tests',
          headline: 'Bước 5/5: Kiểm tra kết quả',
          detail: 'Nhấp vào nút [▶ Run Tests] ở góc trên bên phải để kiểm tra bài làm và xem kết quả.',
          targetSelector: '#btn-run-tests'
        }
      ]
    },
    'A-2': {
      code: 'TC-A2',
      title: 'Option A: Uncertainty Path (AI chưa chắc chắn)',
      goal: 'Mục tiêu: Trải nghiệm cách AI minh bạch về sự phân vân giữa 2 nguyên nhân và để người học làm chủ hướng đi.',
      option: 'A',
      steps: [
        {
          num: 1,
          title: 'Kích hoạt AI',
          headline: 'Bước 1/3: Kích hoạt Socratic AI',
          detail: 'Nhấp vào nút [💡 Cần gợi ý tư duy] trên thanh Editor Actions.',
          targetSelector: '#btn-trigger-socratic'
        },
        {
          num: 2,
          title: 'Xem hộp thoại phân vân',
          headline: 'Bước 2/3: Trải nghiệm tính năng Uncertainty',
          detail: 'Quan sát hộp thoại AI hiển thị 2 giả định. Thử chọn [2. Lỗi Stale Closure trong React Hook].',
          targetSelector: '#btn-opt-a-path-2'
        },
        {
          num: 3,
          title: 'Quan sát AI điều hướng',
          headline: 'Bước 3/3: Đánh giá cách AI phản hồi',
          detail: 'AI sẽ tiếp nhận lựa chọn của bạn để điều chỉnh câu hỏi gợi mở theo hướng đã chọn.',
          targetSelector: '#btn-opt-a-ans-1'
        }
      ]
    },
    'A-3': {
      code: 'TC-A3',
      title: 'Option A: Control & Emergency Recovery (Lối thoát khẩn cấp)',
      goal: 'Mục tiêu: Kiểm tra quyền kiểm soát của học viên khi muốn đổi câu hỏi gợi ý hoặc bấm nút thoát khẩn cấp.',
      option: 'A',
      steps: [
        {
          num: 1,
          title: 'Kích hoạt AI & chọn hướng',
          headline: 'Bước 1/4: Mở câu hỏi gợi mở',
          detail: 'Nhấp [💡 Cần gợi ý tư duy] và chọn nhánh [1. Cơ chế Dependency Array []].',
          targetSelector: '#btn-trigger-socratic'
        },
        {
          num: 2,
          title: 'Thử đổi câu hỏi',
          headline: 'Bước 2/4: Thử nghiệm nút Control',
          detail: 'Nếu câu hỏi quá khó hoặc chưa rõ, nhấp vào nút [🔄 Đổi câu hỏi gợi ý khác].',
          targetSelector: '#btn-opt-a-switch-q'
        },
        {
          num: 3,
          title: 'Báo hint chưa đúng ý',
          headline: 'Bước 3/4: Thử nghiệm nút Recovery',
          detail: 'Nhấp vào nút [⚠️ Hint không đúng ý] để yêu cầu AI chọn lại mốc kiến thức.',
          targetSelector: '#btn-opt-a-not-relevant'
        },
        {
          num: 4,
          title: 'Xem đáp án khẩn cấp',
          headline: 'Bước 4/4: Kiểm tra lối thoát an toàn',
          detail: 'Nhấp vào nút đỏ [🚨 Xem đáp án chi tiết (Khẩn cấp)] để xem cách thoát khỏi ngõ cụt.',
          targetSelector: '#btn-opt-a-emergency'
        }
      ]
    },
    'B-1': {
      code: 'TC-B1',
      title: 'Option B: Happy Path (Khoanh vùng & Giải thích tại chỗ)',
      goal: 'Mục tiêu: Tester tự bôi đen đúng dòng lỗi hoặc bấm mốc video để nhận giải thích cô đọng tức thì.',
      option: 'B',
      steps: [
        {
          num: 1,
          title: 'Khoanh vùng dòng lỗi 15',
          headline: 'Bước 1/4: Chọn đoạn code bị kẹt',
          detail: 'Nhấp chuột vào dòng 15 (}, []);) trong trình soạn thảo code hoặc bấm mốc video [04:12].',
          targetSelector: '#code-line-bug'
        },
        {
          num: 2,
          title: 'Bấm giải thích đoạn này',
          headline: 'Bước 2/4: Kích hoạt Explainer AI',
          detail: 'Nhấp vào nút [🔍 Giải thích đoạn này với AI] trên pop-up nổi xuất hiện.',
          targetSelector: '#btn-b-explain-selection'
        },
        {
          num: 3,
          title: 'Đọc giải thích & sửa code',
          headline: 'Bước 3/4: Áp dụng kiến thức',
          detail: 'Đọc nội dung cô đọng dưới Terminal và nhấp [🔧 Điền [userId] vào code].',
          targetSelector: '#btn-b-apply'
        },
        {
          num: 4,
          title: 'Chạy lại Tests',
          headline: 'Bước 4/4: Kiểm tra kết quả',
          detail: 'Nhấp [▶ Run Tests] để xác nhận bài làm đã chính xác.',
          targetSelector: '#btn-run-tests'
        }
      ]
    },
    'B-2': {
      code: 'TC-B2',
      title: 'Option B: Uncertainty (Khoanh vùng chưa đủ ngữ cảnh)',
      goal: 'Mục tiêu: Kiểm tra phản xạ của AI khi học viên chọn sai dòng hoặc chọn vùng quá ngắn.',
      option: 'B',
      steps: [
        {
          num: 1,
          title: 'Chọn dòng code khác',
          headline: 'Bước 1/2: Thử chọn sai vị trí',
          detail: 'Nhấp chuột vào dòng 8 (// Lấy thông tin user...) hoặc dòng 4 để xem cảnh báo.',
          targetSelector: '.selectable-line[data-line="8"]'
        },
        {
          num: 2,
          title: 'Quan sát thông báo & chọn lại',
          headline: 'Bước 2/2: Quan sát cách AI xử lý',
          detail: 'Hệ thống hiển thị cảnh báo thiếu ngữ cảnh. Sau đó hãy nhấp lại vào đúng dòng 15.',
          targetSelector: '#code-line-bug'
        }
      ]
    },
    'B-3': {
      code: 'TC-B3',
      title: 'Option B: Control & Depth Customization (Tùy biến độ sâu)',
      goal: 'Mục tiêu: Tester tự điều chỉnh mức độ chi tiết: xem code ví dụ so sánh hoặc đọc tóm tắt 1 câu.',
      option: 'B',
      steps: [
        {
          num: 1,
          title: 'Mở Explainer dòng 15',
          headline: 'Bước 1/4: Mở giải thích dòng 15',
          detail: 'Nhấp dòng 15 và bấm [🔍 Giải thích đoạn này với AI].',
          targetSelector: '#code-line-bug'
        },
        {
          num: 2,
          title: 'Xem ví dụ minh họa',
          headline: 'Bước 2/4: Thử nút ví dụ',
          detail: 'Nhấp vào nút [💡 Cho ví dụ minh họa] để xem đoạn code so sánh ❌ vs ✅.',
          targetSelector: '#btn-b-ex'
        },
        {
          num: 3,
          title: 'Xem giải thích siêu ngắn',
          headline: 'Bước 3/4: Thử nút tóm tắt',
          detail: 'Nhấp vào nút [⚡ Giải thích ngắn hơn] để nhận tóm tắt 1 câu TL;DR.',
          targetSelector: '#btn-b-short'
        },
        {
          num: 4,
          title: 'Đóng pop-up tự sửa',
          headline: 'Bước 4/4: Đóng thẻ giải thích',
          detail: 'Nhấp nút [✕ Đóng & Tự sửa] để quay lại màn hình làm việc.',
          targetSelector: '#btn-b-close'
        }
      ]
    },
    'C-1': {
      code: 'TC-C1',
      title: 'Option C: Happy Path (Gửi Ticket & Nhận phản hồi TA)',
      goal: 'Mục tiêu: Trải nghiệm quy trình gửi ticket đính kèm code tự động và nhận hỗ trợ từ Trợ giảng người thật.',
      option: 'C',
      steps: [
        {
          num: 1,
          title: 'Mở form ticket hỗ trợ',
          headline: 'Bước 1/5: Kích hoạt yêu cầu TA',
          detail: 'Nhấp vào nút [🙋 Gửi câu hỏi cho TA (SLA ≤ 30p)] trên thanh Editor Actions.',
          targetSelector: '#btn-trigger-sla'
        },
        {
          num: 2,
          title: 'Gửi ticket hỗ trợ',
          headline: 'Bước 2/5: Gửi ticket vào hàng đợi',
          detail: 'Xem phần đính kèm code/log tự động và nhấp [🚀 Gửi Ticket Hỗ Trợ].',
          targetSelector: '#btn-submit-ticket'
        },
        {
          num: 3,
          title: 'Theo dõi SLA & Trạng thái',
          headline: 'Bước 3/5: Quan sát đồng hồ SLA đếm ngược',
          detail: 'Quan sát đồng hồ SLA đếm ngược và tiến trình 3 bước (Đã gửi -> TA nhận -> TA trả lời).',
          targetSelector: '#sla-timer-display'
        },
        {
          num: 4,
          title: 'Nhận phản hồi từ TA',
          headline: 'Bước 4/5: Đọc tin nhắn từ TA Hoàng Nam',
          detail: 'Bấm [⚡ Giả lập TA phản hồi ngay] (hoặc chờ 3.5s) để đọc hướng dẫn sửa lỗi của TA.',
          targetSelector: '#btn-simulate-ta-reply'
        },
        {
          num: 5,
          title: 'Sửa code & Chạy Test',
          headline: 'Bước 5/5: Hoàn tất bài học',
          detail: 'Nhấp [🔧 Sửa code theo hướng dẫn của TA] và bấm [▶ Run Tests] để pass test case.',
          targetSelector: '#btn-opt-c-apply'
        }
      ]
    },
    'C-2': {
      code: 'TC-C2',
      title: 'Option C: Asynchronous Multitasking (Học tiếp trong lúc chờ)',
      goal: 'Mục tiêu: Kiểm tra tính năng chuyển bài tạm thời để tránh thời gian chết khi chờ hỗ trợ bất đồng bộ.',
      option: 'C',
      steps: [
        {
          num: 1,
          title: 'Gửi ticket hỗ trợ',
          headline: 'Bước 1/2: Tạo ticket',
          detail: 'Nhấp [🙋 Gửi câu hỏi cho TA] và bấm [🚀 Gửi Ticket Hỗ Trợ].',
          targetSelector: '#btn-trigger-sla'
        },
        {
          num: 2,
          title: 'Chuyển sang học bài tiếp theo',
          headline: 'Bước 2/2: Học tiếp trong lúc chờ',
          detail: 'Nhấp vào nút [⏭️ Học tạm Bài 13 trong lúc chờ] để tiếp tục lộ trình học.',
          targetSelector: '#btn-opt-c-next-lesson'
        }
      ]
    },
    'C-3': {
      code: 'TC-C3',
      title: 'Option C: Control & Self-Recovery (Bổ sung / Hủy ticket)',
      goal: 'Mục tiêu: Kiểm tra quyền bổ sung thông tin hoặc hủy ticket khi học viên đã tự sửa được lỗi.',
      option: 'C',
      steps: [
        {
          num: 1,
          title: 'Gửi ticket hỗ trợ',
          headline: 'Bước 1/3: Tạo ticket',
          detail: 'Nhấp [🙋 Gửi câu hỏi cho TA] và bấm [🚀 Gửi Ticket Hỗ Trợ].',
          targetSelector: '#btn-trigger-sla'
        },
        {
          num: 2,
          title: 'Bổ sung ghi chú',
          headline: 'Bước 2/3: Thử thêm chi tiết',
          detail: 'Nhấp vào nút [✏️ Bổ sung ghi chú] để gửi thêm chi tiết cho TA.',
          targetSelector: '#btn-opt-c-add-note'
        },
        {
          num: 3,
          title: 'Hủy ticket khi tự sửa được',
          headline: 'Bước 3/3: Kiểm tra tính năng Self-Recovery',
          detail: 'Nhấp vào nút [✅ Tôi đã tự sửa được (Hủy ticket)] để giải phóng hàng đợi.',
          targetSelector: '#btn-opt-c-cancel'
        }
      ]
    }
  };

  // --- FACILITATOR ANNOTATIONS METADATA ---
  const facilitatorData = {
    A: {
      title: 'OPTION A: Socratic Hints AI (AI-Led / Guided)',
      expect: 'Nhấp nút "Cần gợi ý tư duy", đọc câu hỏi dẫn dắt của AI, suy ngẫm và trả lời từng bước để tự phát hiện ra lỗi thiếu dependency trong useEffect.',
      watch: 'Tester có đọc kỹ câu hỏi gợi mở hay vội vàng tìm nút đáp án? Tester có cảm thấy bị "hỏi vặn" hay được khai sáng tư duy? Phản xạ khi thấy AI hiển thị 2 giả định nguyên nhân.',
      dont: 'TUYỆT ĐỐI KHÔNG giải thích cơ chế Dependency Array của useEffect; KHÔNG giải thích cách AI suy luận hay chỉ điểm cần bấm nút nào. Để tester tự ra quyết định.',
      gate: '- <strong>Control:</strong> Nút "Đổi câu hỏi gợi ý" / Tự chọn câu trả lời.<br>- <strong>Recovery:</strong> Nút "Hint không đúng ý" / Mở khóa "Xem đáp án chi tiết" khi kẹt.'
    },
    B: {
      title: 'OPTION B: In-video Contextual Explainer (User-Led / Bounded)',
      expect: 'Bôi đen/chọn dòng code số 15 (}, []);) hoặc mốc video 04:12, sau đó nhấp "Giải thích đoạn này", đọc giải thích cô đọng sát bài giảng và tự sửa code.',
      watch: 'Tester có nhận biết được mình cần bôi đen chỗ nào không? Tester có thử bôi đen quá ngắn (nhận cảnh báo) không? Tester có dùng các phím tắt "Cho ví dụ" / "Đơn giản hơn" trước khi sửa code?',
      dont: 'KHÔNG gợi ý tester phải bôi đen dòng nào; KHÔNG giải thích nội dung tooltip; để tester tự nhận biết phạm vi nội dung bế tắc.',
      gate: '- <strong>Control:</strong> Các nút "Giải thích ngắn hơn" / "Cho ví dụ minh họa".<br>- <strong>Recovery:</strong> Nút đóng pop-up "✕" để quay lại bài học và tự sửa code.'
    },
    C: {
      title: 'OPTION C: Fast SLA Q&A (Human Baseline / Non-AI)',
      expect: 'Nhấp nút "Gửi câu hỏi cho Trợ giảng (TA)", xem form tự động đính kèm code/log lỗi, gửi ticket và trải nghiệm quy trình chờ đợi theo dõi SLA ≤ 30 phút.',
      watch: 'Tester có kiên nhẫn chờ TA trả lời hay sốt ruột? Tester có bấm "Học bài tiếp theo" trong lúc chờ không? Phản xạ khi nhận được tin nhắn hỗ trợ từ TA con người.',
      dont: 'KHÔNG hối thúc hoặc giải thích SLA là gì; KHÔNG trả lời thay Trợ giảng; để tester cảm nhận rõ độ trễ và sự phụ thuộc vào con người.',
      gate: '- <strong>Control:</strong> Bổ sung câu hỏi / Nút "Tôi đã tự sửa được (Hủy ticket)".<br>- <strong>Recovery:</strong> Nút "Chuyển sang bài học tiếp theo" trong thời gian chờ.'
    }
  };

  // --- DOM ELEMENTS CACHE ---
  const dom = {
    // Tabs & Switchers
    tabOptA: document.getElementById('tab-opt-a'),
    tabOptB: document.getElementById('tab-opt-b'),
    tabOptC: document.getElementById('tab-opt-c'),
    
    // Facilitator Elements
    btnToggleFacilitator: document.getElementById('btn-toggle-facilitator'),
    facilitatorPanel: document.getElementById('facilitator-panel'),
    facilitatorModeText: document.getElementById('facilitator-mode-text'),
    facOptionTitle: document.getElementById('fac-option-title'),
    facExpect: document.getElementById('fac-expect'),
    facWatch: document.getElementById('fac-watch'),
    facDont: document.getElementById('fac-dont'),
    facGate: document.getElementById('fac-gate'),
    
    // 9 Test Cases Guide Bar Elements
    tcGuideBar: document.getElementById('tc-guide-bar'),
    guideTcBadge: document.getElementById('guide-tc-badge'),
    guideTcTitle: document.getElementById('guide-tc-title'),
    guideTcGoal: document.getElementById('guide-tc-goal'),
    selectActiveTc: document.getElementById('select-active-tc'),
    btnGuideToggleCollapse: document.getElementById('btn-guide-toggle-collapse'),
    stepperTrack: document.getElementById('stepper-track'),
    promptHeadline: document.getElementById('prompt-headline'),
    promptDetail: document.getElementById('prompt-detail'),
    btnPrevStep: document.getElementById('btn-prev-step'),
    btnNextStep: document.getElementById('btn-next-step'),

    // Global Actions
    btnResetScenario: document.getElementById('btn-reset-scenario'),
    btnRunTests: document.getElementById('btn-run-tests'),
    optionTriggerSlot: document.getElementById('option-trigger-slot'),
    
    // Code Editor & Visuals
    codeSurface: document.getElementById('code-surface'),
    editableDeps: document.getElementById('editable-deps'),
    codeLineBug: document.getElementById('code-line-bug'),
    optionBPopup: document.getElementById('option-b-popup'),
    popupSelectionText: document.getElementById('popup-selection-text'),
    btnBExplainSelection: document.getElementById('btn-b-explain-selection'),
    
    // Terminal & Tabs
    termTabTests: document.getElementById('term-tab-tests'),
    termTabConsole: document.getElementById('term-tab-console'),
    termTabInteraction: document.getElementById('term-tab-interaction'),
    interactionTabTitle: document.getElementById('interaction-tab-title'),
    termStatusBadge: document.getElementById('term-status-badge'),
    terminalTestsView: document.getElementById('terminal-tests-view'),
    interactionPanel: document.getElementById('interaction-panel'),
    testItem2: document.getElementById('test-item-2'),
    failCountBadge: document.getElementById('fail-count-badge'),
    
    // Video
    btnTs1: document.getElementById('btn-ts-1'),
    btnTs2: document.getElementById('btn-ts-2'),
    btnVidPlay: document.getElementById('btn-vid-play'),
    
    // Modal
    successModal: document.getElementById('success-modal'),
    modalOptionName: document.getElementById('modal-option-name'),
    btnCloseSuccess: document.getElementById('btn-close-success'),
    btnModalBackTestcases: document.getElementById('btn-modal-back-testcases'),
    btnModalOpenMatrix: document.getElementById('btn-modal-open-matrix'),
    btnModalReset: document.getElementById('btn-modal-reset'),
    btnModalTestOther: document.getElementById('btn-modal-test-other'),

    // 9 Test Cases Matrix Modal
    btnOpen9TestCases: document.getElementById('btn-open-9testcases'),
    matrixModal: document.getElementById('matrix-modal'),
    btnCloseMatrix: document.getElementById('btn-close-matrix')
  };

  // --- INITIALIZATION ---
  function init() {
    bindEvents();
    renderOption(state.activeOption);
    updateFacilitatorPanel();
    loadTestCase(state.activeTestCase, 0);
  }

  // --- EVENT BINDINGS ---
  function bindEvents() {
    // 9 Test Cases Matrix Modal
    dom.btnOpen9TestCases?.addEventListener('click', () => {
      dom.matrixModal.style.display = 'flex';
    });

    dom.btnCloseMatrix?.addEventListener('click', () => {
      dom.matrixModal.style.display = 'none';
    });

    // Jump to specific test case
    document.querySelectorAll('.btn-run-tc').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const jumpTarget = e.target.dataset.jump;
        runSpecificTestCase(jumpTarget);
      });
    });

    // Option switching
    dom.tabOptA.addEventListener('click', () => switchOption('A'));
    dom.tabOptB.addEventListener('click', () => switchOption('B'));
    dom.tabOptC.addEventListener('click', () => switchOption('C'));

    // Facilitator Toggle
    dom.btnToggleFacilitator.addEventListener('click', toggleFacilitatorMode);

    // Reset Scenario
    dom.btnResetScenario.addEventListener('click', resetScenario);

    // Test runner
    dom.btnRunTests.addEventListener('click', runTests);

    // Terminal Tabs
    dom.termTabTests.addEventListener('click', () => switchTerminalTab('tests'));
    dom.termTabInteraction.addEventListener('click', () => switchTerminalTab('interaction'));

    // Editable slot click in code editor (User directly fixes code)
    dom.editableDeps.addEventListener('click', () => {
      toggleCodeFix();
    });

    // Selectable lines in editor for Option B
    document.querySelectorAll('.selectable-line').forEach(line => {
      line.addEventListener('click', (e) => {
        if (state.activeOption === 'B') {
          handleLineSelect(line);
        }
      });
    });

    // Option B Popup explain button
    dom.btnBExplainSelection.addEventListener('click', () => {
      triggerOptionBExplanation();
    });

    // Video timestamp click
    dom.btnTs1.addEventListener('click', () => {
      if (state.activeOption === 'B') {
        highlightLine(15);
        dom.popupSelectionText.innerHTML = 'Khớp với mốc Video 04:12: <code>useEffect Dependency Array</code>';
        dom.optionBPopup.style.display = 'block';
      }
    });

    // Stepper Guide bar events
    dom.selectActiveTc?.addEventListener('change', (e) => {
      loadTestCase(e.target.value, 0);
    });

    dom.btnGuideToggleCollapse?.addEventListener('click', () => {
      state.guideCollapsed = !state.guideCollapsed;
      dom.tcGuideBar.classList.toggle('collapsed', state.guideCollapsed);
      dom.btnGuideToggleCollapse.textContent = state.guideCollapsed ? 'Hiện hướng dẫn ▼' : 'Ẩn hướng dẫn ▲';
    });

    dom.btnPrevStep?.addEventListener('click', () => {
      if (state.activeStepIndex > 0) {
        setStep(state.activeStepIndex - 1);
      }
    });

    dom.btnNextStep?.addEventListener('click', () => {
      const tc = testCaseDefinitions[state.activeTestCase];
      if (tc && state.activeStepIndex < tc.steps.length - 1) {
        setStep(state.activeStepIndex + 1);
      }
    });

    // Success Modal buttons
    dom.btnCloseSuccess?.addEventListener('click', () => {
      dom.successModal.style.display = 'none';
      resetScenario();
    });

    dom.btnModalBackTestcases?.addEventListener('click', () => {
      dom.successModal.style.display = 'none';
      resetScenario();
      // Scroll up and focus on the guide bar dropdown
      dom.tcGuideBar?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      dom.selectActiveTc?.focus();
    });

    dom.btnModalOpenMatrix?.addEventListener('click', () => {
      dom.successModal.style.display = 'none';
      resetScenario();
      dom.matrixModal.style.display = 'flex';
    });

    dom.btnModalReset?.addEventListener('click', () => {
      dom.successModal.style.display = 'none';
      resetScenario();
      loadTestCase(state.activeTestCase, 0);
    });

    dom.btnModalTestOther?.addEventListener('click', () => {
      dom.successModal.style.display = 'none';
      const nextOpt = state.activeOption === 'A' ? 'B' : state.activeOption === 'B' ? 'C' : 'A';
      switchOption(nextOpt);
      resetScenario();
      const defaultTcForOpt = nextOpt === 'A' ? 'A-1' : nextOpt === 'B' ? 'B-1' : 'C-1';
      loadTestCase(defaultTcForOpt, 0);
    });
  }

  // --- 9 TEST CASES STEPPER ENGINE ---
  function loadTestCase(tcKey, stepIdx = 0) {
    state.activeTestCase = tcKey;
    const tc = testCaseDefinitions[tcKey];
    if (!tc) return;

    // Sync option tab if needed
    if (state.activeOption !== tc.option) {
      switchOption(tc.option);
    }

    if (dom.selectActiveTc) {
      dom.selectActiveTc.value = tcKey;
    }

    dom.guideTcBadge.textContent = tc.code;
    dom.guideTcTitle.textContent = tc.title;
    dom.guideTcGoal.textContent = tc.goal;

    setStep(stepIdx);
  }

  function setStep(stepIdx) {
    const tc = testCaseDefinitions[state.activeTestCase];
    if (!tc) return;

    state.activeStepIndex = Math.max(0, Math.min(stepIdx, tc.steps.length - 1));
    const step = tc.steps[state.activeStepIndex];

    // Update Stepper UI Track
    renderStepperUI(tc, state.activeStepIndex);

    // Update Action Prompt
    dom.promptHeadline.textContent = step.headline;
    dom.promptDetail.textContent = step.detail;

    // Update Nav buttons
    dom.btnPrevStep.disabled = state.activeStepIndex === 0;
    dom.btnNextStep.disabled = state.activeStepIndex === tc.steps.length - 1;

    // Highlight target element on the screen with gentle spotlight glow
    highlightTargetElement(step.targetSelector);
  }

  function advanceStep() {
    const tc = testCaseDefinitions[state.activeTestCase];
    if (tc && state.activeStepIndex < tc.steps.length - 1) {
      setStep(state.activeStepIndex + 1);
    }
  }

  function renderStepperUI(tc, currentIdx) {
    dom.stepperTrack.innerHTML = '';
    tc.steps.forEach((step, idx) => {
      const node = document.createElement('div');
      const isDone = idx < currentIdx;
      const isActive = idx === currentIdx;

      node.className = `step-node ${isDone ? 'done' : ''} ${isActive ? 'active' : ''}`;
      node.innerHTML = `
        <span class="step-num">${isDone ? '✓' : step.num}</span>
        <span class="step-label">${step.title}</span>
      `;
      node.addEventListener('click', () => setStep(idx));

      dom.stepperTrack.appendChild(node);

      if (idx < tc.steps.length - 1) {
        const arrow = document.createElement('span');
        arrow.className = 'step-arrow';
        arrow.textContent = '→';
        dom.stepperTrack.appendChild(arrow);
      }
    });
  }

  function highlightTargetElement(selector) {
    // Remove previous glows
    document.querySelectorAll('.guide-target-glow').forEach(el => {
      el.classList.remove('guide-target-glow');
    });

    if (!selector) return;

    setTimeout(() => {
      const target = document.querySelector(selector);
      if (target) {
        target.classList.add('guide-target-glow');
        // Scroll into view if needed
        target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 150);
  }

  // --- OPTION SWITCHING ---
  function switchOption(opt) {
    state.activeOption = opt;

    // Update tab styles
    [dom.tabOptA, dom.tabOptB, dom.tabOptC].forEach(tab => {
      const isCurrent = tab.dataset.option === opt;
      tab.classList.toggle('active', isCurrent);
      tab.setAttribute('aria-selected', isCurrent);
    });

    updateFacilitatorPanel();
    renderOption(opt);
  }

  function updateFacilitatorPanel() {
    const data = facilitatorData[state.activeOption];
    dom.facOptionTitle.textContent = data.title;
    dom.facExpect.innerHTML = data.expect;
    dom.facWatch.innerHTML = data.watch;
    dom.facDont.innerHTML = data.dont;
    dom.facGate.innerHTML = data.gate;
  }

  function toggleFacilitatorMode() {
    state.facilitatorVisible = !state.facilitatorVisible;
    dom.facilitatorPanel.classList.toggle('hidden', !state.facilitatorVisible);
    dom.btnToggleFacilitator.classList.toggle('active', state.facilitatorVisible);
    dom.facilitatorModeText.textContent = state.facilitatorVisible ? 'BẬT' : 'TẮT';
  }

  // --- RENDER DYNAMIC TRIGGER & DOCK BASED ON OPTION ---
  function renderOption(opt) {
    // Clear trigger slot
    dom.optionTriggerSlot.innerHTML = '';
    dom.optionBPopup.style.display = 'none';

    if (opt === 'A') {
      // Option A Trigger: Socratic AI Button
      const btn = document.createElement('button');
      btn.className = 'btn-trigger-a';
      btn.id = 'btn-trigger-socratic';
      btn.innerHTML = '<span>💡</span> Cần gợi ý tư duy (Socratic AI)';
      btn.addEventListener('click', openOptionAFlow);
      dom.optionTriggerSlot.appendChild(btn);

      dom.interactionTabTitle.textContent = 'Socratic Hints AI';
    } else if (opt === 'B') {
      // Option B Trigger: User-led highlight helper hint
      const hint = document.createElement('div');
      hint.className = 'btn-trigger-b-hint';
      hint.innerHTML = '<span>👆</span> Bôi đen dòng code 15 hoặc bấm mốc video để AI giải thích';
      dom.optionTriggerSlot.appendChild(hint);

      dom.interactionTabTitle.textContent = 'Contextual Explainer';
    } else if (opt === 'C') {
      // Option C Trigger: Fast SLA Human Q&A Button
      const btn = document.createElement('button');
      btn.className = 'btn-trigger-c';
      btn.id = 'btn-trigger-sla';
      btn.innerHTML = '<span>🙋</span> Gửi câu hỏi cho TA (SLA ≤ 30p)';
      btn.addEventListener('click', openOptionCFlow);
      dom.optionTriggerSlot.appendChild(btn);

      dom.interactionTabTitle.textContent = 'Trợ giảng VLearn (Fast SLA)';
    }

    // If interaction was already active, refresh dock
    if (dom.termTabInteraction.style.display !== 'none') {
      renderInteractionContent();
    }
  }

  // ==========================================================================
  // OPTION A: SOCRATIC HINTS AI (AI-Led / Guided Multi-turn)
  // ==========================================================================
  function openOptionAFlow() {
    state.optionA.step = 1;
    switchTerminalTab('interaction');
    renderOptionAContent();
    if (state.activeTestCase.startsWith('A')) {
      advanceStep();
    }
  }

  function renderOptionAContent() {
    let html = `
      <div class="expectation-banner banner-a">
        <span class="icon">ℹ️</span>
        <span class="text"><strong>Nguyên tắc Socratic:</strong> AI sẽ đặt câu hỏi gợi mở để bạn tự phát hiện nguyên nhân. AI tuyệt đối không sửa code thay bạn.</span>
      </div>
      <div class="socratic-flow">
    `;

    // Step 1: AI Evidence diagnosis & Uncertainty path choice
    html += `
      <div class="ai-message-card">
        <div class="ai-message-header">
          <div class="ai-author"><span>🤖</span> Socratic Mentor AI</div>
          <span class="evidence-tag">Evidence: Dòng 15 & Test Case #2 fail</span>
        </div>
        <div class="ai-message-body">
          Chào bạn! Mình phân tích thấy <code>Test Case #2</code> bị fail vì state <code>user</code> không cập nhật khi props <code>userId</code> chuyển từ "1" sang "2".
        </div>
    `;

    if (state.optionA.step === 1) {
      html += `
        <div class="uncertainty-box">
          <div class="uncertainty-title">🔍 AI đang phân vân giữa 2 khả năng gây ra lỗi này. Bạn muốn bắt đầu kiểm tra từ đâu?</div>
          <div class="path-options">
            <button class="btn-path" id="btn-opt-a-path-1">1. Cơ chế hoạt động của Dependency Array []</button>
            <button class="btn-path" id="btn-opt-a-path-2">2. Lỗi Stale Closure trong React Hook</button>
          </div>
        </div>
      `;
    }

    // Step 2: Socratic Questioning
    if (state.optionA.step >= 2) {
      html += `
        <div class="ai-message-body" style="background: rgba(163, 113, 247, 0.08); padding: 10px; border-radius: 6px; border-left: 3px solid var(--accent-purple);">
          🎯 <strong>Câu hỏi gợi mở #1:</strong><br>
          Khi <code>userId</code> thay đổi từ 1 sang 2, hàm bên trong <code>useEffect</code> có được React tự động gọi lại không khi bạn truyền tham số thứ hai là mảng rỗng <code>[]</code>?
        </div>
      `;

      if (state.optionA.step === 2) {
        html += `
          <div class="tester-response-section">
            <div class="response-prompt">Lựa chọn câu trả lời của bạn:</div>
            <div class="response-choices">
              <button class="btn-choice" id="btn-opt-a-ans-1">
                A. Không, mảng rỗng <code>[]</code> báo cho React chỉ chạy effect đúng 1 lần duy nhất lúc component tạo ra (mount).
              </button>
              <button class="btn-choice" id="btn-opt-a-ans-2">
                B. Có, useEffect luôn luôn chạy lại sau mỗi lần render bất kể tham số thứ hai là gì.
              </button>
            </div>
          </div>
        `;
      }
    }

    // Step 3: Positive Reinforcement & Guided Code Action
    if (state.optionA.step >= 3) {
      html += `
        <div class="ai-message-body" style="color: #7ee787; margin-top: 10px;">
          ✨ <strong>Chính xác tuyệt đối!</strong><br>
          Vì mảng <code>[]</code> rỗng nên React không biết khi nào cần chạy lại effect để fetch dữ liệu mới.
        </div>
        <div class="ai-message-body">
          💡 <strong>Bước tiếp theo:</strong> Để React biết cần kích hoạt lại <code>useEffect</code> mỗi khi <code>userId</code> thay đổi, bạn hãy truyền <code>userId</code> vào bên trong dependency array: <code>[userId]</code>.
        </div>
        <div style="margin-top: 10px; display: flex; gap: 10px;">
          <button class="btn-path" id="btn-opt-a-apply" style="background: var(--accent-green); border-color: var(--accent-green); color: #fff;">
            🔧 Tự động điền [userId] vào dòng 15 & Chạy Test
          </button>
        </div>
      `;
    }

    // Control & Recovery Footer
    html += `
      </div>
      <div class="control-recovery-bar">
        <div style="display: flex; gap: 8px;">
          <button class="btn-ctrl" id="btn-opt-a-switch-q">🔄 Đổi câu hỏi gợi ý khác</button>
          <button class="btn-ctrl" id="btn-opt-a-not-relevant">⚠️ Hint không đúng ý</button>
        </div>
        <button class="btn-ctrl btn-emergency" id="btn-opt-a-emergency">🚨 Xem đáp án chi tiết (Khẩn cấp)</button>
      </div>
      </div>
    `;

    dom.interactionPanel.innerHTML = html;

    // Attach internal events for Option A
    if (state.optionA.step === 1) {
      document.getElementById('btn-opt-a-path-1')?.addEventListener('click', () => {
        state.optionA.step = 2;
        renderOptionAContent();
        if (state.activeTestCase.startsWith('A')) advanceStep();
      });
      document.getElementById('btn-opt-a-path-2')?.addEventListener('click', () => {
        state.optionA.step = 2;
        renderOptionAContent();
        if (state.activeTestCase.startsWith('A')) advanceStep();
      });
    }

    if (state.optionA.step === 2) {
      document.getElementById('btn-opt-a-ans-1')?.addEventListener('click', () => {
        state.optionA.step = 3;
        renderOptionAContent();
        if (state.activeTestCase.startsWith('A')) advanceStep();
      });
      document.getElementById('btn-opt-a-ans-2')?.addEventListener('click', () => {
        alert('AI Feedback: Chưa chính xác! Mảng [] rỗng thông báo cho React không có dependencies nào, nên nó sẽ KHÔNG chạy lại. Bạn hãy thử chọn lại nhé!');
      });
    }

    if (state.optionA.step >= 3) {
      document.getElementById('btn-opt-a-apply')?.addEventListener('click', () => {
        applyCodeFix();
        if (state.activeTestCase.startsWith('A')) advanceStep();
        runTests();
      });
    }

    // Control & Recovery handlers
    document.getElementById('btn-opt-a-switch-q')?.addEventListener('click', () => {
      alert('AI Control: Đã đổi sang câu hỏi tương đương: "Tại sao khi props thay đổi mà component không fetch dữ liệu mới?"');
      if (state.activeTestCase === 'A-3') advanceStep();
    });

    document.getElementById('btn-opt-a-not-relevant')?.addEventListener('click', () => {
      state.optionA.step = 1;
      renderOptionAContent();
      if (state.activeTestCase === 'A-3') advanceStep();
    });

    document.getElementById('btn-opt-a-emergency')?.addEventListener('click', () => {
      const confirmRescue = confirm('Bạn có chắc muốn xem đáp án chi tiết ngay? Lời khuyên: Hãy thử tự sửa [userId] vào dòng 15 trước.');
      if (confirmRescue) {
        applyCodeFix();
        alert('Đáp án: Sửa dòng 15 thành `}, [userId]);` để useEffect lắng nghe thay đổi của userId.');
        if (state.activeTestCase === 'A-3') advanceStep();
        runTests();
      }
    });
  }

  // ==========================================================================
  // OPTION B: CONTEXTUAL EXPLAINER (User-Led / Bounded)
  // ==========================================================================
  function handleLineSelect(lineEl) {
    const lineNum = parseInt(lineEl.dataset.line, 10);
    state.optionB.selectedLine = lineNum;

    // Visual selection highlight
    document.querySelectorAll('.selectable-line').forEach(l => l.classList.remove('user-selected'));
    lineEl.classList.add('user-selected');

    // Position & show popup
    if (lineNum === 15) {
      dom.popupSelectionText.innerHTML = 'Đã chọn dòng 15: <code>}, []);</code>';
      dom.optionBPopup.style.display = 'block';
      if (state.activeTestCase.startsWith('B')) advanceStep();
    } else {
      // Uncertainty simulation: line too short or wrong line
      dom.popupSelectionText.innerHTML = `Đã chọn dòng ${lineNum}. Vùng chọn có thể chưa đủ ngữ cảnh.`;
      dom.optionBPopup.style.display = 'block';
      if (state.activeTestCase === 'B-2') advanceStep();
    }
  }

  function highlightLine(lineNum) {
    const target = document.querySelector(`.selectable-line[data-line="${lineNum}"]`);
    if (target) handleLineSelect(target);
  }

  function triggerOptionBExplanation() {
    dom.optionBPopup.style.display = 'none';
    state.optionB.isOpen = true;
    switchTerminalTab('interaction');
    renderOptionBContent();
    if (state.activeTestCase.startsWith('B')) advanceStep();
  }

  function renderOptionBContent() {
    let bodyContent = '';

    if (state.optionB.mode === 'standard') {
      bodyContent = `
        <p><strong>Tham số thứ hai <code>[]</code> (Dependency Array):</strong></p>
        <p>Trong React <code>useEffect</code>, mảng phụ thuộc cho React biết khi nào cần thực thi lại effect. Khi bạn truyền <code>[]</code> (mảng rỗng), effect <strong>chỉ chạy 1 lần duy nhất lúc mount</strong>.</p>
        <p>Do đó, khi <code>props.userId</code> thay đổi từ '1' sang '2', component re-render nhưng effect bị bỏ qua, dẫn đến state <code>user</code> không được cập nhật mới.</p>
      `;
    } else if (state.optionB.mode === 'example') {
      bodyContent = `
        <p><strong>Ví dụ minh họa so sánh:</strong></p>
        <pre style="background: rgba(0,0,0,0.4); padding: 8px; border-radius: 4px; font-family: var(--font-mono); font-size: 0.78rem;">
// ❌ Chỉ fetch 1 lần lúc đầu, đổi user không cập nhật:
useEffect(() => { fetchUserData(userId); }, []);

// ✅ Tự động fetch lại mỗi khi userId thay đổi:
useEffect(() => { fetchUserData(userId); }, [userId]);
        </pre>
      `;
    } else if (state.optionB.mode === 'short') {
      bodyContent = `
        <p>⚡ <strong>Tóm tắt 1 câu:</strong> Thay mảng rỗng <code>[]</code> thành <code>[userId]</code> để useEffect lắng nghe và fetch lại khi người dùng đổi sang ID khác.</p>
      `;
    }

    const html = `
      <div class="expectation-banner banner-b">
        <span class="icon">ℹ️</span>
        <span class="text"><strong>Nguyên tắc Giới hạn (Bounded):</strong> AI chỉ giải thích đúng dòng lệnh bạn đã khoanh vùng, sử dụng thuật ngữ quen thuộc trong bài học.</span>
      </div>
      
      <div class="explainer-card">
        <div class="explainer-header">
          <div class="explainer-tag"><span>✨</span> In-context Explainer AI</div>
          <span class="selection-reference">Dòng 15: <code>}, []);</code> ↔ Bài giảng [04:12]</span>
        </div>

        <div class="explainer-body">
          ${bodyContent}
        </div>

        <div class="explainer-controls">
          <button class="btn-b-ctrl" id="btn-b-ex">💡 Cho ví dụ minh họa</button>
          <button class="btn-b-ctrl" id="btn-b-short">⚡ Giải thích ngắn hơn</button>
          <button class="btn-b-ctrl" id="btn-b-standard">📖 Giải thích chuẩn</button>
          <button class="btn-b-ctrl" id="btn-b-apply" style="background: var(--accent-cyan); color: #0d1117; font-weight: 700; margin-left: auto;">
            🔧 Điền [userId] vào code
          </button>
          <button class="btn-b-ctrl" id="btn-b-close">✕ Đóng & Tự sửa</button>
        </div>
      </div>
    `;

    dom.interactionPanel.innerHTML = html;

    // Attach Option B Controls
    document.getElementById('btn-b-ex')?.addEventListener('click', () => {
      state.optionB.mode = 'example';
      renderOptionBContent();
      if (state.activeTestCase === 'B-3') advanceStep();
    });
    document.getElementById('btn-b-short')?.addEventListener('click', () => {
      state.optionB.mode = 'short';
      renderOptionBContent();
      if (state.activeTestCase === 'B-3') advanceStep();
    });
    document.getElementById('btn-b-standard')?.addEventListener('click', () => {
      state.optionB.mode = 'standard';
      renderOptionBContent();
    });
    document.getElementById('btn-b-apply')?.addEventListener('click', () => {
      applyCodeFix();
      if (state.activeTestCase.startsWith('B')) advanceStep();
      runTests();
    });
    document.getElementById('btn-b-close')?.addEventListener('click', () => {
      switchTerminalTab('tests');
      if (state.activeTestCase === 'B-3') advanceStep();
    });
  }

  // ==========================================================================
  // OPTION C: FAST SLA Q&A (Human Baseline / Non-AI)
  // ==========================================================================
  function openOptionCFlow() {
    switchTerminalTab('interaction');
    renderOptionCContent();
    if (state.activeTestCase.startsWith('C')) advanceStep();
  }

  function renderOptionCContent() {
    let html = `
      <div class="expectation-banner banner-c">
        <span class="icon">ℹ️</span>
        <span class="text"><strong>Human Baseline:</strong> Thắc mắc được chuyển đến Trợ giảng con người (TA). Cam kết phản hồi ≤ 30 phút.</span>
      </div>
      <div class="sla-flow">
    `;

    if (state.optionC.ticketStatus === 'idle') {
      // Step 1: Draft Ticket Form
      html += `
        <div class="ticket-draft-form">
          <div class="ticket-field">
            <label>Mô tả chỗ bạn đang bị vướng mắc:</label>
            <textarea id="ticket-input-note" placeholder="Ví dụ: Mình chạy test thấy case 2 báo lỗi không đổi user data, mình xem video rồi nhưng chưa rõ vì sao...">${state.optionC.customNote}</textarea>
          </div>
          <div class="ticket-attachments">
            <span>📎 Tự động đính kèm: <code>UserProfile.jsx</code></span>
            <span>📎 Log lỗi: <code>Test Case #2 FAIL</code></span>
            <span>📎 Mốc video: <code>04:12</code></span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px;">
            <button class="btn-submit-ticket" id="btn-submit-ticket">
              🚀 Gửi Ticket Hỗ Trợ (Cam kết ≤ 30p)
            </button>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Trực ban: TA Hoàng Nam (Online)</span>
          </div>
        </div>
      `;
    } else {
      // Step 2 & 3: Ticket Active Tracking & Simulated TA Response
      const isReplied = state.optionC.ticketStatus === 'replied';
      
      html += `
        <div class="ticket-active-card">
          <div class="ticket-tracking-header">
            <div class="ticket-id">🎫 Ticket #VL-8492 — React Hooks useEffect</div>
            <div class="sla-countdown">
              <span>⏱️ SLA:</span>
              <span id="sla-timer-display">${formatTimer(state.optionC.timerSeconds)}</span>
            </div>
          </div>

          <div class="ticket-stepper">
            <div class="step-item done">
              <span class="step-icon">✓</span>
              <span>1. Đã gửi (12:12)</span>
            </div>
            <div class="step-item ${state.optionC.ticketStatus === 'assigned' || isReplied ? 'done' : 'active'}">
              <span class="step-icon">👤</span>
              <span>2. TA Nam đã nhận</span>
            </div>
            <div class="step-item ${isReplied ? 'done' : 'active'}">
              <span class="step-icon">${isReplied ? '✓' : '⌛'}</span>
              <span>3. ${isReplied ? 'Đã phản hồi' : 'TA đang soạn câu trả lời...'}</span>
            </div>
          </div>
      `;

      if (!isReplied) {
        html += `
          <div style="font-size: 0.8rem; color: var(--text-secondary); background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
            <span>Trợ giảng <strong>Hoàng Nam</strong> đang đọc code và log test của bạn...</span>
            <button class="btn-ctrl" id="btn-simulate-ta-reply" style="background: rgba(210, 153, 34, 0.2); color: #e3b341; border-color: var(--accent-orange);">
              ⚡ Giả lập TA phản hồi ngay (Tester Demo)
            </button>
          </div>
        `;
      } else {
        // TA Human Response Box
        html += `
          <div class="ta-reply-box">
            <div class="ta-author-line">
              <span class="ta-avatar">HN</span>
              <span>Trợ giảng Hoàng Nam</span>
              <span style="font-size: 0.7rem; color: var(--text-muted); font-weight: normal;">• Vừa xong</span>
            </div>
            <div class="ta-reply-content">
              Chào Huy! Mình xem qua code của bạn rồi nhé. Ở <strong>dòng 15</strong>, bạn đang để tham số thứ 2 của <code>useEffect</code> là mảng rỗng <code>[]</code>, nên React chỉ fetch data 1 lần lúc component mount thôi.<br><br>
              Để component tự fetch lại dữ liệu mỗi khi <code>userId</code> thay đổi từ props cha truyền vào, bạn chỉ cần sửa thành <code>[userId]</code> nhé! Bạn thử sửa lại rồi bấm Run Test xem được chưa nha.
            </div>
            <div style="margin-top: 10px; display: flex; gap: 8px;">
              <button class="btn-path" id="btn-opt-c-apply" style="background: var(--accent-orange); color: #fff; font-weight: 700;">
                🔧 Sửa code theo hướng dẫn của TA & Run Test
              </button>
            </div>
          </div>
        `;
      }

      // Option C Controls
      html += `
          <div class="control-recovery-bar" style="margin-top: 14px;">
            <div style="display: flex; gap: 8px;">
              <button class="btn-ctrl" id="btn-opt-c-add-note">✏️ Bổ sung ghi chú</button>
              <button class="btn-ctrl" id="btn-opt-c-cancel">✅ Tôi đã tự sửa được (Hủy ticket)</button>
            </div>
            <button class="btn-ctrl" id="btn-opt-c-next-lesson">⏭️ Học tạm Bài 13 trong lúc chờ</button>
          </div>
        </div>
      `;
    }

    html += `</div>`;
    dom.interactionPanel.innerHTML = html;

    // Attach Option C Events
    document.getElementById('btn-submit-ticket')?.addEventListener('click', () => {
      const note = document.getElementById('ticket-input-note')?.value || '';
      state.optionC.customNote = note;
      state.optionC.ticketStatus = 'assigned';
      startSLATimer();
      renderOptionCContent();
      if (state.activeTestCase.startsWith('C')) advanceStep();

      // Automatically simulate TA reply after 3.5s if not manually clicked
      setTimeout(() => {
        if (state.optionC.ticketStatus === 'assigned') {
          state.optionC.ticketStatus = 'replied';
          renderOptionCContent();
        }
      }, 3500);
    });

    document.getElementById('btn-simulate-ta-reply')?.addEventListener('click', () => {
      state.optionC.ticketStatus = 'replied';
      renderOptionCContent();
      if (state.activeTestCase.startsWith('C')) advanceStep();
    });

    document.getElementById('btn-opt-c-apply')?.addEventListener('click', () => {
      applyCodeFix();
      if (state.activeTestCase.startsWith('C')) advanceStep();
      runTests();
    });

    document.getElementById('btn-opt-c-cancel')?.addEventListener('click', () => {
      clearInterval(state.optionC.timerInterval);
      state.optionC.ticketStatus = 'idle';
      alert('Đã hủy ticket hỗ trợ. Bạn đã lấy lại quyền tự sửa code.');
      renderOptionCContent();
      if (state.activeTestCase === 'C-3') advanceStep();
    });

    document.getElementById('btn-opt-c-add-note')?.addEventListener('click', () => {
      const extra = prompt('Nhập thêm thông tin bổ sung cho Trợ giảng:');
      if (extra) {
        alert('Đã cập nhật thêm thông tin vào ticket #VL-8492.');
        if (state.activeTestCase === 'C-3') advanceStep();
      }
    });

    document.getElementById('btn-opt-c-next-lesson')?.addEventListener('click', () => {
      alert('Chuyển hướng: Bạn đang tạm mở Bài 13: Custom Hooks. Hệ thống sẽ gửi thông báo đẩy khi TA phản hồi.');
      if (state.activeTestCase === 'C-2') advanceStep();
    });
  }

  function startSLATimer() {
    if (state.optionC.timerInterval) clearInterval(state.optionC.timerInterval);
    state.optionC.timerInterval = setInterval(() => {
      if (state.optionC.timerSeconds > 0) {
        state.optionC.timerSeconds--;
        const display = document.getElementById('sla-timer-display');
        if (display) display.textContent = formatTimer(state.optionC.timerSeconds);
      }
    }, 1000);
  }

  function formatTimer(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  // --- TERMINAL TAB SWITCHING ---
  function switchTerminalTab(tab) {
    if (tab === 'tests') {
      dom.termTabTests.classList.add('active');
      dom.termTabInteraction.classList.remove('active');
      dom.terminalTestsView.style.display = 'flex';
      dom.interactionPanel.style.display = 'none';
    } else if (tab === 'interaction') {
      dom.termTabInteraction.style.display = 'flex';
      dom.termTabInteraction.classList.add('active');
      dom.termTabTests.classList.remove('active');
      dom.terminalTestsView.style.display = 'none';
      dom.interactionPanel.style.display = 'block';
      renderInteractionContent();
    }
  }

  function renderInteractionContent() {
    if (state.activeOption === 'A') renderOptionAContent();
    else if (state.activeOption === 'B') renderOptionBContent();
    else if (state.activeOption === 'C') renderOptionCContent();
  }

  // --- CODE FIXING & RUN TEST LOGIC ---
  function toggleCodeFix() {
    state.codeFixed = !state.codeFixed;
    updateCodeDisplay();
  }

  function applyCodeFix() {
    state.codeFixed = true;
    updateCodeDisplay();
  }

  function updateCodeDisplay() {
    if (state.codeFixed) {
      dom.editableDeps.textContent = '[userId]';
      dom.editableDeps.classList.add('fixed');
      dom.codeLineBug.classList.remove('error-highlight');
    } else {
      dom.editableDeps.textContent = '[]';
      dom.editableDeps.classList.remove('fixed');
      dom.codeLineBug.classList.add('error-highlight');
    }
  }

  function runTests() {
    // Show quick running feedback
    dom.btnRunTests.innerHTML = '<span class="icon">⌛</span> Testing...';
    dom.btnRunTests.disabled = true;

    setTimeout(() => {
      dom.btnRunTests.innerHTML = '<span class="icon">▶</span> Run Tests';
      dom.btnRunTests.disabled = false;
      switchTerminalTab('tests');

      if (state.codeFixed) {
        // PASS STATE
        state.testsPassing = true;
        dom.termStatusBadge.className = 'term-status status-pass';
        dom.termStatusBadge.textContent = '✓ 2 of 2 Tests Passing';
        dom.failCountBadge.textContent = '0 Fail';

        dom.testItem2.className = 'test-item pass';
        dom.testItem2.innerHTML = `
          <span class="test-status-badge">PASS</span>
          <div class="test-details">
            <div class="test-title">✓ re-fetches and updates user data when props.userId changes from "1" to "2"</div>
            <div style="color: var(--accent-green); font-size: 0.74rem;">Passed in 38ms (State successfully updated on props change).</div>
          </div>
        `;

        // Show Success Modal
        setTimeout(() => {
          const optNames = {
            A: 'Option A: Socratic Hints AI (AI-Led / Guided)',
            B: 'Option B: In-video Contextual Explainer (User-Led / Bounded)',
            C: 'Option C: Fast SLA Q&A (Human Baseline)'
          };
          dom.modalOptionName.textContent = optNames[state.activeOption];
          dom.successModal.style.display = 'flex';
        }, 400);

      } else {
        // FAIL STATE
        state.testsPassing = false;
        dom.termStatusBadge.className = 'term-status status-fail';
        dom.termStatusBadge.textContent = '❌ 1 of 2 Tests Passing';
        dom.failCountBadge.textContent = '1 Fail';

        dom.testItem2.className = 'test-item fail';
        dom.testItem2.innerHTML = `
          <span class="test-status-badge">FAIL</span>
          <div class="test-details">
            <div class="test-title">✕ re-fetches and updates user data when props.userId changes from "1" to "2"</div>
            <div class="test-error-log">
              <span class="error-line">AssertionError: Expected component to render "Bob (ID: 2)", but still displaying "Alice (ID: 1)".</span>
              <span class="error-hint">Hint: State did not re-fetch. Check if useEffect is listening to props.userId change.</span>
              <span class="error-stack">at UserProfile.test.js:28:12 (UserProfile.jsx:15)</span>
            </div>
          </div>
        `;
      }
    }, 400);
  }

  // --- RESET SCENARIO ---
  function resetScenario() {
    state.codeFixed = false;
    state.testsPassing = false;
    
    // Reset Option states
    state.optionA.step = 0;
    state.optionA.selectedPath = null;
    
    state.optionB.mode = 'standard';
    state.optionB.isOpen = false;
    
    clearInterval(state.optionC.timerInterval);
    state.optionC.ticketStatus = 'idle';
    state.optionC.timerSeconds = 29 * 60 + 58;

    // Reset UI
    updateCodeDisplay();
    switchTerminalTab('tests');
    dom.termTabInteraction.style.display = 'none';
    dom.optionBPopup.style.display = 'none';
    document.querySelectorAll('.selectable-line').forEach(l => l.classList.remove('user-selected'));

    dom.termStatusBadge.className = 'term-status status-fail';
    dom.termStatusBadge.textContent = '❌ 1 of 2 Tests Passing';
    dom.failCountBadge.textContent = '1 Fail';
    dom.testItem2.className = 'test-item fail';
    dom.testItem2.innerHTML = `
      <span class="test-status-badge">FAIL</span>
      <div class="test-details">
        <div class="test-title">✕ re-fetches and updates user data when props.userId changes from "1" to "2"</div>
        <div class="test-error-log">
          <span class="error-line">AssertionError: Expected component to render "Bob (ID: 2)", but still displaying "Alice (ID: 1)".</span>
          <span class="error-hint">Hint: State did not re-fetch. Check if useEffect is listening to props.userId change.</span>
          <span class="error-stack">at UserProfile.test.js:28:12 (UserProfile.jsx:15)</span>
        </div>
      </div>
    `;

    renderOption(state.activeOption);
  }

  // --- RUN SPECIFIC TEST CASE FROM MATRIX ---
  function runSpecificTestCase(target) {
    dom.matrixModal.style.display = 'none';
    resetScenario();
    loadTestCase(target, 0);
  }

  // Run on DOM ready
  document.addEventListener('DOMContentLoaded', init);
})();
