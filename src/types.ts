/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ResponseFormat {
  success?: number;
  expired?: number;
  error?: string;
  data: Record<string, unknown> | Array<object> | any;
  meta: Record<string, unknown> | Array<object> | any;
}
export type SuccessResponse = Pick<ResponseFormat, "success" | "data" | "meta">;
export type ErrorResponse = Omit<ResponseFormat, "data">;

export interface Student {
  id: number;
  name: string;
  first_name: string;
  last_name: string;
  avatar_url: string;
  display_behaviour: boolean;
  display_parent_behaviour: boolean;
  display_homework: boolean;
  display_rewards: boolean;
  display_detentions: boolean;
  display_report_cards: boolean;
  display_classes: boolean;
  display_announcements: boolean;
  display_attendance: boolean;
  display_attendance_type: string;
  display_attendance_percentage: boolean;
  display_activity: boolean;
  display_mental_health: boolean;
  display_timetable: boolean;
  is_disabled: boolean;
  display_two_way_communications: boolean;
  display_absences: boolean;
  can_upload_attachments: string | null;
  display_event_badges: boolean;
  display_avatars: boolean;
  display_concern_submission: boolean;
  display_custom_fields: boolean;
  pupil_concerns_help_text: string;
  allow_pupils_add_timetable_notes: boolean;
  announcements_count: number;
  messages_count: number;
  pusher_channel_name: string;
  has_birthday: boolean;
  has_new_survey: boolean;
  survey_id: number | null;
  detention_alias_plural_uc: string;
}
export interface GetBehaviourOptions {
  /**
   * From date, in format YYYY-MM-DD
   */
  from?: string;
  /**
   * To date, in format YYYY-MM-DD
   */
  to?: string;
}
export interface BehaviourTimelinePoint {
  positive: number;
  negative: number;
  name: string;
  start: string;
  end: string;
}
export interface BehaviourResponse {
  timeline: Array<BehaviourTimelinePoint>;
  positive_reasons: Record<string, number>;
  negative_reasons: Record<string, number>;
  other_positive: Array<string>;
  other_negative: Array<string>;
  other_positive_count: Array<Record<string, number>>;
  other_negative_count: Array<Record<string, number>>;
}
export interface GetActivityOptions {
  /**
   * From date, in format YYYY-MM-DD
   */
  from?: string;
  /**
   * To date, in format YYYY-MM-DD
   */
  to?: string;
  /**
   *  ID of the last activityPoint (used in pagination)
   */
  last_id?: string;
}
export interface ActivityPoint {
  id: number;
  type: string;
  polarity: string;
  reason: string;
  score: number;
  timestamp: string;
  timestamp_custom_time: string | null;
  style: {
    border_color: string | null;
    custom_class: string | null;
  };
  pupil_name: string;
  lesson_name: string;
  teacher_name: string;
  room_name: string | null;
  note: string;
  _can_delete: boolean;
  badges: string | undefined;
  detention_date: string | null;
  detention_time: string | null;
  detention_location: string | null;
  detention_type: string | null;
}
export type ActivityResponse = Array<ActivityPoint>;
export type DisplayDate = "due_date" | "issue_date";
export interface GetHomeworkOptions {
  /**
   * Way to sort homeworks
   */
  displayDate?: DisplayDate;
  /**
   * From date, in format YYYY-MM-DD
   */
  fromDate?: string;
  /**
   * To date, in format YYYY-MM-DD
   */
  toDate?: string;
}
export interface ValidatedHomeworkAttachment {
  id: number;
  file_name: string;
  file: string;
  validated_file: string;
}
export interface Homework {
  lesson: string;
  subject: string;
  teacher: string;
  homework_type: string;
  id: number;
  title: string;
  meta_title: string;
  description: string;
  description_raw: string;
  issue_date: string;
  due_date: string;
  completion_time_unit: string;
  completion_time_value: string;
  publish_time: string;
  status: {
    id: number;
    state: "not_completed" | "late" | "completed" | null;
    mark: any | null;
    mark_relative: number;
    ticked: "yes" | "no";
    allow_attachments: "yes" | "no";
    first_seen_date: string;
    last_seen_date: string;
    attachments: Array<any>;
    has_feedback: boolean;
  };
  validated_links: Array<any>;
  validated_attachments: Array<ValidatedHomeworkAttachment>;
}
export type HomeworksResponse = Array<Homework>;
export interface GetLessonsOptions {
  /**
   * Date to get lessons for, in format YYYY-MM-DD
   */
  date: string;
}
export interface Lesson {
  teacher_name: string;
  lesson_name: string;
  subject_name: string;
  is_alternative_lesson: boolean;
  period_name: string;
  period_number: string;
  room_name: string;
  date: string;
  start_time: string;
  end_time: string;
  key: number;
  note_abstract: string;
  note: string;
  pupil_note_abstract: string;
  pupil_note: string;
  pupil_note_raw: string;
}
export type LessonsResponse = Array<Lesson>;
export interface LessonPupilBehaviour {
  // Not sure what to call this
  reason: string;
  score: number;
  icon: string;
  polarity: string;
  timestamp: string;
  teacher: {
    title: string;
    first_name: string;
    last_name: string;
  };
}
export interface PupilEvent {
  timestamp: string;
  lesson_pupil_behaviour: LessonPupilBehaviour;
  event: {
    label: string;
  };
}
export interface Badge {
  id: number;
  name: string;
  icon: string;
  colour: string;
  created_date: string;
  pupil_badges: Array<PupilEvent>;
  icon_url: string;
}
export type BadgesResponse = Array<Badge>;

export interface Detention {
  id: number;
  attended: "yes" | "no" | "upscaled" | "pending";
  date: string | null;
  length: number | null;
  location: string | null;
  notes: string | null;
  time: string | null;
  pupil: {
    id: number;
    first_name: string;
    last_name: string;
    school: {
      opt_notes_names: "yes" | "no";
      opt_notes_comments: "yes" | "no";
      opt_notes_comments_pupils: "yes" | "no";
    };
  };
  lesson: {
    id: number;
    name: string;
    subject: {
      id: number;
      name: string;
    };
  };
  lesson_pupil_behaviour: {
    reason: string;
  };
  teacher: {
    id: number;
    first_name: string;
    last_name: string;
    title: string;
  };
  detention_type: {
    name: string;
  };
}
export type DetentionsResponse = Array<Detention>;

export interface Announcement {
  id: number;
  title: string;
  description: string | null;
  school_name: string;
  teacher_name: string;
  school_logo: string | null;
  sticky: "yes" | "no";
  state: string | null;
  timestamp: string;
  attachments: Array<{
    filename: string;
    url: string;
  }>;
  for_pupils: Array<any>;
  comment_visibility: string;
  allow_comments: "yes" | "no";
  allow_reactions: "yes" | "no";
  allow_consent: "yes" | "no";
  priority_pinned: "yes" | "no";
  requires_consent: "yes" | "no";
  can_change_consent: boolean;
  consent: string | null;
  pupil_consents: Array<any>;
}

export type AnnouncementsResponse = Array<Announcement>;

export interface Pupil extends Student {
  school_name: string;
  school_logo: string;
  timezone: string;
  display_covid_tests: boolean;
  can_record_covid_tests: boolean;
  detention_yes_count: number;
  detention_no_count: number;
  detention_pending_count: number;
  detention_upscaled_count: number;
  homework_todo_count: number;
  homework_late_count: number;
  homework_not_completed_count: number;
  homework_excused_count: number;
  homework_completed_count: number;
  homework_submitted_count: number;
  announcements_count: number;
  messages_count: number;
}
export type GetPupilsResponse = Array<Pupil>;

export interface GetFullActivityOptions {
  /**
   * From date, in format YYYY-MM-DD
   */
  from: string;
  /**
   * To date, in format YYYY-MM-DD
   */
  to: string;
}
export interface AttendanceMeta {
  dates: Array<string>;
  end_date: string;
  percentage: string;
  percentage_singe_august: string;
  sessions: Array<string>;
  start_date: string;
}
export interface GetAttendanceOptions {
    /**
   * From date, in format YYYY-MM-DD
   */
     from: string;
     /**
      * To date, in format YYYY-MM-DD
      */
     to: string;
}
export type AttendanceStatus = "present" | "ignore" | "absent" | "excused";
export interface AttendanceDate {
  AM: {
    code: string;
    status: AttendanceStatus;
    late_minutes: number;
  };
  PM: {
    code: string;
    status: AttendanceStatus;
    late_minutes: number;
  };
}
export type AttendanceScheme = { data: AttendanceDate; meta: AttendanceMeta };
export type AttendanceResponse = Array<Record<string, AttendanceDate>>;